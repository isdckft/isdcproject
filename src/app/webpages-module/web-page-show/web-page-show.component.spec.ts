import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPageShowComponent } from './web-page-show.component';

describe('WebPageShowComponent', () => {
  let component: WebPageShowComponent;
  let fixture: ComponentFixture<WebPageShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPageShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPageShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
