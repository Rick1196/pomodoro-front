import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeFormatterPipe } from '../helper/pipes/timeFormatter/time-formater.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelMessageComponent } from '../atoms/label-message/label-message.component';
import { FormControlErrorsPipe } from '../helper/pipes/form-control-errors.pipe';
import { BasicInputFieldComponent } from '../component/atoms/inputs/basic-input-field/basic-input-field.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    TimeFormatterPipe,
    LabelMessageComponent,
    FormControlErrorsPipe,
    BasicInputFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    TimeFormatterPipe,
    FormsModule,
    ReactiveFormsModule,
    LabelMessageComponent,
    FormControlErrorsPipe,
    BasicInputFieldComponent,
    TranslateModule,
  ],
})
export class SharedModule {}