import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorLabelComponent } from './input-error-label.component';

describe('InputErrorLabelComponent', () => {
  let component: InputErrorLabelComponent;
  let fixture: ComponentFixture<InputErrorLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputErrorLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
