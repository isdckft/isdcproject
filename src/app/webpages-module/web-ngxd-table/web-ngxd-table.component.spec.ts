import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNgxdTableComponent } from './web-ngxd-table.component';

describe('WebNgxdTableComponent', () => {
  let component: WebNgxdTableComponent;
  let fixture: ComponentFixture<WebNgxdTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebNgxdTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebNgxdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
