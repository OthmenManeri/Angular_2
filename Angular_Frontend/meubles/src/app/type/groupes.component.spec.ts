import { ComponentFixture, TestBed } from '@angular/core/testing';

import { typesComponent } from './types.component';

describe('typesComponent', () => {
  let component: typesComponent;
  let fixture: ComponentFixture<typesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ typesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(typesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
