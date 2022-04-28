import { NgForm } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, TemplateRef  } from '@angular/core';
import { WebPageService } from '../services/web-page.service';
import { PageTypeService } from '../services/page-type.service';
import { WebPage } from './../../model/web-page';
import { PageType } from './../../model/page-type';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-web-page-form',
  templateUrl: './web-page-form.component.html',
  styleUrls: ['./web-page-form.component.css']
})
export class WebPageFormComponent implements OnInit, OnChanges {
  @Input('sub-title') subTitle: string;
  @Input('webPageId') webPageId: number;
  @Output('myevent') myEvent = new EventEmitter<{id: number, name: string, isNew: boolean }>();


  @ViewChild('officialCheckBox') officialCheckbox: ElementRef;
  siteTitle = 'Insert a new site';
  webPages : WebPage[];
  pageTypes : PageType[];
  isNew = false;
  modalRef: BsModalRef;
  message: string;
  model = new WebPage(null,null,null,null,null,false, null);

  constructor(private webPageService:WebPageService, private pageTypeService:PageTypeService,
    private modalService: BsModalService) { 
    }

  ngOnChanges(){
    //console.log ('ViewChild : officialCheckBox: +' this.officialCheckbox);

    if ( this.webPageId !== null) { // We are in the modify state
      this.webPageService.getWebPageById(this.webPageId).subscribe(model => this.model = model);
      this.siteTitle = 'Modify the site attributes';
      this.isNew = false;
    } else { this.isNew = true;}
  }

  ngOnInit() {

     this.pageTypeService.getPageTypes().subscribe(
      pageTypes => this.pageTypes = pageTypes);
  }
  onSubmit(f: NgForm) {
    // We do not need the NgForm parameter right now, because we acces tha parameteres with two-way binding.
    // It is only for demonstrate here at logging
    // console.log ('#webpageform:');
    // console.log(f );
    // console.log(f.form);
    // console.log(f.form.value );
    console.log(f);
    if (this.model.id === null) { // new web page
      this.webPageService.newWebPage(this.model).subscribe(model => {
        this.model = model;
        this.myEvent.emit({id: this.model.id, name: this.model.name, isNew: true }); 
        this.model = new WebPage(null,null,null,null,null,false,null);
      });
    } else {
      // update service
      this.webPageService.updateWebPage(this.model).subscribe(

        model => {
         // console.log(model);
          this.model = model;
          this.myEvent.emit({id: this.model.id, name: this.model.name, isNew: false });
         this.model = new WebPage(null,null,null,null,null,false,null);
     });

    } 
    this.siteTitle = 'Insert a new site';
  }
  onKeyUp($event){
    console.log($event.target.value)
  }
  onKeyUpAbout(about){
    console.log(about.value)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(f: NgForm){
    this.message = 'Confirmed!';
    this.modalRef.hide();
    this.onSubmit(f);
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
}

