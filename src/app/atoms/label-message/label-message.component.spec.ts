import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { LabelMessageComponent } from './label-message.component';

describe('LabelMessageComponent', () => {
  let component: LabelMessageComponent;
  let fixture: ComponentFixture<LabelMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabelMessageComponent],
      imports: [
        TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
