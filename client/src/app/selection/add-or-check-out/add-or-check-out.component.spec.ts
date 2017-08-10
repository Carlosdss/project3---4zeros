import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrCheckOutComponent } from './add-or-check-out.component';

describe('AddOrCheckOutComponent', () => {
  let component: AddOrCheckOutComponent;
  let fixture: ComponentFixture<AddOrCheckOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrCheckOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
