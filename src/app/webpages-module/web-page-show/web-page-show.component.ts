import { Component, OnInit , TemplateRef } from '@angular/core';
import { WebPage} from './../../model/web-page'; 
import { WebPageService } from '../services/web-page.service';
import { ActivatedRoute, Router, Params, Data } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-web-page-show',
  templateUrl: './web-page-show.component.html',
  styleUrls: ['./web-page-show.component.css']
})
export class WebPageShowComponent implements OnInit {
  isCollapsed = false;
  sid: number;
  capitalize  = 'no';
  webPage : WebPage;
  modalRef: BsModalRef;
  message: string;
  constructor(private webPageService:WebPageService, private route: ActivatedRoute,
    private router: Router, private modalService: BsModalService) { }

  ngOnInit() {

    // this.route.params.subscribe((params: Params) => {
    //   this.sid = params['id'];
    //   console.log('route.params.subscribe: '+this.sid);
    //   this.getWebPage();

    // });
    this.route.data
    .subscribe(
      (data: Data) => {
        this.webPage = data['webpage'];
      }
    );
    this.route.queryParams.subscribe((params: Params) => {
      this.capitalize = params['capitalize'];
      console.log('route.queryParams.subscribe: '+this.capitalize );
    });
  }

  getWebPage(){
    if (this.sid !== null) {
      this.webPageService.getWebPageById(this.sid).subscribe(webPage => {
        this.webPage = webPage;
        if (this.capitalize === 'yes'){
          this.webPage.name = this.webPage.name.toUpperCase(); 
        } else {
          this.webPage.name = this.webPage.name.toLowerCase();
        }
      });
    }
  }
  next(id:number){
    id = id + 1;
    console.log('id:'+ id);
    this.router.navigate(['/webpage/',id], {queryParams:{capitalize: 'yes'}});
  }
  back(id:number){
    id = id - 1;
    console.log('id:'+ id);
    this.router.navigate(['/webpage/',id], {queryParams:{capitalize: 'no'}});
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
}
