import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPageCardComponent } from './web-page-card.component';

describe('WebPageCardComponent', () => {
  let component: WebPageCardComponent;
  let fixture: ComponentFixture<WebPageCardComponent>;

  beforeEach(async(() => { 
    TestBed.configureTestingModule({
      declarations: [ WebPageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
