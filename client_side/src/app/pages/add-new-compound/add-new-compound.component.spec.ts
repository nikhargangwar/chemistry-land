import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCompoundComponent } from './add-new-compound.component';

describe('AddNewCompoundComponent', () => {
  let component: AddNewCompoundComponent;
  let fixture: ComponentFixture<AddNewCompoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewCompoundComponent]
    });
    fixture = TestBed.createComponent(AddNewCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
