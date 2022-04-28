import { WebPageService } from '../services/web-page.service';
import { WebPage } from './../../model/web-page';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth-module/auth.service';
import {
  trigger,
  state,
  style,
  transition, 
  animate,
  keyframes,
  group
} from '@angular/animations'; 
@Component({
  selector: 'app-web-pages',
  templateUrl: './web-pages.component.html',
  styleUrls: ['./web-pages.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(200)),
      transition('highlighted => normal', animate(800))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'blue',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'green',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.2)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(400)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(700)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]
}) 
export class WebPagesComponent implements OnInit {
  state = 'normal';
  wildState = 'normal';
  title = 'My Favorite Sites goes here and I like to write a lot of words, but maybe it is not a good idea';
  subTitle = 'See the list bellow and complete it!';
  newPageInserted: string = null;
  webPages: WebPage[] =[];
  webPage: WebPage;
  webPageId: number = null;
  constructor( private webPageService: WebPageService, private router: Router,
    private authService: AuthService) { 
  }
  ngOnInit() {
    this.getWebPages();
  }

  onMove() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }
  
  onSqueeze() {
    this.wildState = 'shrunken';
  }

  getWebPages(): void {
    this.webPageService.getWebPages().subscribe(webPages =>{
      this.webPages = webPages;
    });
  } 

  delete(webPage: WebPage): void {
    this.webPageService.deleteWebPage(webPage).subscribe(webPage => {
      this.webPage = webPage;
      this.getWebPages();
    }); 
  }
  select(id: number): void {
    this.webPageId = id;
    // this.router.navigate(['/webpages/'+id]);
  }

  show(id: number): void {
    this.router.navigate(['/webpage/',id], {queryParams:{capitalize: 'yes'}});
  }

  onTriggeredEvent($event){
    if ($event.isNew) {
        this.newPageInserted = 'New Web Page was added, ID: '+ $event.id + ' Name: ' + $event.name;
    } else {
      this.newPageInserted = 'Web Page was updated, ID: '+ $event.id + ' Name: ' + $event.name;
    }
    this.getWebPages(); // re-read the table from the server
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  animationStarted(event) {
   // console.log(event);
  }

  animationEnded(event) {
    //console.log(event);
  }

}





