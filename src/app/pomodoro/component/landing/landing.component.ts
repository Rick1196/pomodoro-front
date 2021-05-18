import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ClockState } from '../clock/ClockState';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  public clockStateEvent: Subject<ClockState> = new Subject();
  constructor() { }

  public playClock(): void {
    this.clockStateEvent.next({ state: 'PLAY' });
  }

  public pauseClock(): void {
    this.clockStateEvent.next({ state: 'PAUSE' });
  }

  public stopClock(): void {
    this.clockStateEvent.next({ state: 'NONE' });
  }

  public resumeClock(): void{
    this.clockStateEvent.next({state: 'RESUME'});
  }

  ngOnInit(): void {
  }

}
