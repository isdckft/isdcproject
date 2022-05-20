import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WebPageService } from '../services/web-page.service';
import { WebPage } from './../../model/web-page';
import { timer } from 'rxjs/observable/timer';
import { Router } from '@angular/router';
import { AuthService } from '../../auth-module/auth.service';

@Component({
  selector: 'app-web-ngxd-table',
  templateUrl: './web-ngxd-table.component.html',
  styleUrls: ['./web-ngxd-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WebNgxdTableComponent implements OnInit {
  // columns = [
  //   { name: 'Id' }, 
  //   { name: 'Name' },
  //   { name: 'About' },
  //   { name: 'Url' },
  //   { name: 'Pagetype'},
  //   { name: 'Date' , cellClass : 'text-center'},
  //   { name: 'Official', headerClass: 'is-header' , cellClass : 'is-official text-right'},
  //   { name: 'Delete' },
  //   { name: 'Show' }
  // ];
  rows;
  loadingIndicator: boolean;
  reorderable: boolean = true;
  summaryRow = false;
  limit = 4;
  summaryPosition = 'bottom';
  columnMode = 'force';  //  could be:  standard , flex,force
  rowHeight = 'auto';

  webPage: WebPage;
  webPageId: number = null;

  constructor(private webPageService: WebPageService,private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.loadingIndicator= true;
    this.getWebPages();
  }

  getWebPages(): void {
    const source = timer(1000);
    this.webPageService.getWebPages().subscribe(webPages =>{
      this.rows = webPages;
      // Wait to see the loading indicator
      const subscribe = source.subscribe(val =>  this.loadingIndicator= false);
    });
  } 

  getRowClass(row) {
    return {
      'row-color': row.official

    };
  }

  delete(webPage: WebPage): void {
    this.webPageService.deleteWebPage(webPage).subscribe(webPage => {
      this.webPage = webPage;
      this.getWebPages();
    }); 
  }

  show(id: number): void {
    this.router.navigate(['/webpage/',id], {queryParams:{capitalize: 'yes'}});
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
}
