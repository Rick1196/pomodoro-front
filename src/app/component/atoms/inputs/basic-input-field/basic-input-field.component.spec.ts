import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInputFieldComponent } from './basic-input-field.component';

describe('BasicInputFieldComponent', () => {
  let component: BasicInputFieldComponent;
  let fixture: ComponentFixture<BasicInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInputFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
