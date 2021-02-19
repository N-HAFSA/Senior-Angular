import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHospedeComponent } from './add-hospede.component';

describe('AddHospedeComponent', () => {
  let component: AddHospedeComponent;
  let fixture: ComponentFixture<AddHospedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHospedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHospedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
