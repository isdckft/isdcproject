import { Component, OnInit, Input, OnChanges, DoCheck, SimpleChanges, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, 
  ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-web-page-card',
  templateUrl: './web-page-card.component.html',
  styleUrls: ['./web-page-card.component.css']
})
export class WebPageCardComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit
  // DoCheck,  
  // AfterContentChecked,
  // AfterViewChecked
  {

  myContent = 'first';
  @ViewChild('heading') header : ElementRef;
  @ContentChild('contentHeading') contText : ElementRef;
  @Input('sub-title') subTitle: string;

  constructor() { 
   // console.log('WebPageCard constructor is called');
  }  
  
  ngOnChanges(changes: SimpleChanges){
   // console.log('WebPageCard ngOnChanges() is called');
   // console.log(changes);
  }

  ngOnInit() {
    console.log('WebPageCard ngOnInit() is called');
  }
  
  //It is called very often
  // ngDoCheck(){
  //   console.log('WebPageCard ngDoCheck() is called');
  // }

  ngAfterContentInit(){
    //  console.log('WebPageCard  ngAfterContentInit()is called');
    //  console.log('Contentchild: ' + this.contText.nativeElement.textContent);
   }

  // ngAfterContentChecked(){
  //   console.log('WebPageCard  ngAfterContentChecked()is called');
  // }

  // You can acces the element only after ViewInit
  ngAfterViewInit(){
    // console.log('WebPageCard ngAfterViewInit() is called');
    // console.log('Viewchild: ' + this.header.nativeElement.textContent);
  }

  // ngAfterViewChecked(){
  //   console.log('WebPageCard ngAfterViewChecked() is called');
  // }

  ngOnDestroy(){
    // console.log('WebPageCard ngOnDestroy is called');
  }
}
