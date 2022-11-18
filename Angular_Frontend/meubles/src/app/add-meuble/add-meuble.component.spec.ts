import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmeubleComponent } from './add-meuble.component';

describe('AddmeubleComponent', () => {
  let component: AddmeubleComponent;
  let fixture: ComponentFixture<AddmeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmeubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
