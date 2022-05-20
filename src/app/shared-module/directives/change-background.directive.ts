import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'green';
  
  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // set the border of the element with renderer
    this.renderer.setStyle(this.el.nativeElement, 'border', 'thick solid');
  }

  @HostListener('mouseenter')   // change color in case of mouse over
  mouseover(eventDate: Event){
    // set the color with hostbinding
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') // change color in case of mouse leave
  mouseleave(eventDate: Event){
    // set the color with hostbinding
    this.backgroundColor = this.defaultColor;
  }
}
