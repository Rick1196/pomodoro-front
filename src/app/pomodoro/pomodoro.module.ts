import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PomodoroRoutingModule } from './pomodoro-routing.module';
import { LandingComponent } from './component/landing/landing.component';
import { ClockComponent } from './component/clock/clock.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    LandingComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    PomodoroRoutingModule,
    SharedModuleModule
  ]
})
export class PomodoroModule { }
