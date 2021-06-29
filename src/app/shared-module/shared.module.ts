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
import { TeamsCardComponent } from '../component/shared/header/teams-card/teams-card.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../component/shared/side-menu/side-menu.component';
import { CreateTeamComponent } from '../modules/teams/component/create-team/create-team.component';
import { TeamsListComponent } from '../modules/teams/component/teams-list/teams-list.component';
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
    TeamsCardComponent,
    SideMenuComponent,
    CreateTeamComponent,
    TeamsListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DragDropModule,
    RouterModule,
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
    TeamsCardComponent,
    SideMenuComponent,
    CreateTeamComponent,
    TeamsListComponent,
  ],
})
export class SharedModule {}
