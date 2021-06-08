import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared-module/shared.module';

import { BasicInputFieldComponent } from './basic-input-field.component';

describe('BasicInputFieldComponent', () => {
  let component: BasicInputFieldComponent;
  let fixture: ComponentFixture<BasicInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), SharedModule],
      declarations: [BasicInputFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInputFieldComponent);
    component = fixture.componentInstance;
    component.inputProperties = {
      autocomplete: 'on',
      class: 'input-field',
      formControl: null,
      id: 'test',
      name: 'test',
      placeholder: 'test',
      type: 'text',
    };
    component.formGroup = new FormGroup({
      test: new FormControl('test', [Validators.required, Validators.minLength(18)]),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The form control should have a dirty property as false', () => {
    expect(component).toBeTruthy();
    expect(component.displayMessage).toEqual(false);
  });

  it('The form control should have a dirty property as true after user input', () => {
    expect(component).toBeTruthy();
    const inputElement = fixture.debugElement.nativeElement.querySelector('#test');
    inputElement.value = 'iPvViTLGfB';
    inputElement.dispatchEvent(new Event('input'));
    expect(component.displayMessage).toEqual(true);
  });
});
