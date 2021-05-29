import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PomodoroRoutingModule } from './pomodoro-routing.module';
import { LandingComponent } from './component/landing/landing.component';
import { ClockComponent } from './component/clock/clock.component';
import { SharedModule } from '../shared-module/shared.module';


@NgModule({
  declarations: [
    LandingComponent,
    ClockComponent,
  ],
  imports: [
    CommonModule,
    PomodoroRoutingModule,
    SharedModule,
  ],
})
export class PomodoroModule { }
