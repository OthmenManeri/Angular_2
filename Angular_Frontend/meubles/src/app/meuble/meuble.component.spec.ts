import { ComponentFixture, TestBed } from '@angular/core/testing';

import { meublesComponent } from './meubles.component';

describe('meublesComponent', () => {
  let component: meublesComponent;
  let fixture: ComponentFixture<meublesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ meublesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(meublesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
