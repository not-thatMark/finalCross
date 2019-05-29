import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdataPage } from './showdata.page';

describe('ShowdataPage', () => {
  let component: ShowdataPage;
  let fixture: ComponentFixture<ShowdataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
