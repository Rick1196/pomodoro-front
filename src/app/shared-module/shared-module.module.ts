import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeFormatterPipe } from '../helper/pipes/timeFormatter/time-formater.pipe';



@NgModule({
  declarations: [
    TimeFormatterPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TimeFormatterPipe
  ]
})
export class SharedModuleModule { }
