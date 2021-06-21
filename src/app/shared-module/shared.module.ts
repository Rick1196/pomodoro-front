import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeFormatterPipe } from '../helper/pipes/timeFormatter/time-formater.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelMessageComponent } from '../component/atoms/texts/label-message/label-message.component';
import { FormControlErrorsPipe } from '../helper/pipes/form-control-errors.pipe';
import { BasicInputFieldComponent } from '../component/atoms/inputs/basic-input-field/basic-input-field.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormGroupErrorsPipe } from '../helper/pipes/form-group-errors.pipe';
import { SelectLangComponent } from '../component/atoms/inputs/select-lang/select-lang.component';
import { InputErrorLabelComponent } from '../component/atoms/texts/input-error-label/input-error-label.component';
import { HeaderComponent } from '../component/shared/header/header.component';
import { ProfileCardComponent } from '../component/shared/header/profile-card/profile-card.component';
import { ClickOutsideDirective } from '../helper/directives/click-outside/click-outside.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    TimeFormatterPipe,
    FormControlErrorsPipe,
    FormGroupErrorsPipe,
    LabelMessageComponent,
    BasicInputFieldComponent,
    SelectLangComponent,
    InputErrorLabelComponent,
    HeaderComponent,
    ProfileCardComponent,
    ClickOutsideDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DragDropModule,
  ],
  exports: [
    TimeFormatterPipe,
    FormGroupErrorsPipe,
    FormsModule,
    ReactiveFormsModule,
    LabelMessageComponent,
    FormControlErrorsPipe,
    BasicInputFieldComponent,
    TranslateModule,
    SelectLangComponent,
    InputErrorLabelComponent,
    HeaderComponent,
    ProfileCardComponent,
    ClickOutsideDirective,
    DragDropModule,
  ],
})
export class SharedModule {}
