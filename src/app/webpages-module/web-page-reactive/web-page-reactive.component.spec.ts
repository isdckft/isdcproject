import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPageReactiveComponent } from './web-page-reactive.component';

describe('WebPageReactiveComponent', () => {
  let component: WebPageReactiveComponent;
  let fixture: ComponentFixture<WebPageReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPageReactiveComponent ]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(WebPageReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
