import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { BasicInputFieldComponent } from './basic-input-field.component';

describe('BasicInputFieldComponent', () => {
  let component: BasicInputFieldComponent;
  let fixture: ComponentFixture<BasicInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
