import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { InputErrorLabelComponent } from './input-error-label.component';

describe('InputErrorLabelComponent', () => {
  let component: InputErrorLabelComponent;
  let fixture: ComponentFixture<InputErrorLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputErrorLabelComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorLabelComponent);
    component = fixture.componentInstance;
    component.errorData = {
      errorCode: 'minlength',
      value: '16',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const messageError = fixture.debugElement.query(
        By.css('.message-label'),
    ).nativeElement;
    expect(messageError.innerHTML).toContain('minlength');
  });
});

describe('InputErrorLabelComponent', () => {
  let component: InputErrorLabelComponent;
  let fixture: ComponentFixture<InputErrorLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputErrorLabelComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorLabelComponent);
    component = fixture.componentInstance;
    component.errorData = null;
    fixture.detectChanges();
  });

  it('should be hidden on a valid form', () => {
    component.errorData = null;
    const messageError = fixture.debugElement.query(
        By.css('.message-label'),
    );
    expect(messageError).toEqual(null);
  });
});
