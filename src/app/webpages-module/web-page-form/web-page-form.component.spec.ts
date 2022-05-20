import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPageFormComponent } from './web-page-form.component';

describe('WebPageFormComponent', () => { 
  let component: WebPageFormComponent;
  let fixture: ComponentFixture<WebPageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

