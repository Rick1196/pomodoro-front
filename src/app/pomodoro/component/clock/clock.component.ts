import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EMPTY } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { merge } from 'rxjs/internal/observable/merge';
import { Subject } from 'rxjs/internal/Subject';
import {
  mapTo,
  scan,
  startWith,
  switchMap,
  takeUntil,
  takeWhile,
} from 'rxjs/operators';
import { secondsToFullTime } from 'src/app/helper/functions/Time';
import { ClockState } from './ClockState';
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
})
export class ClockComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() seconds: number;
  @Input() stateChangeEvent: Subject<ClockState> = new Subject();
  public time: Array<number>;
  protected secondsIndicatorElement: ElementRef;
  protected minutesIndicatorElement: ElementRef;
  protected hoursIndicatorElement: ElementRef;
  protected stopClock: Subject<void> = new Subject();
  protected endSubscriptions: Subject<void> = new Subject();
  protected secondsStateValue: number;
  protected pauseEvent: Subject<boolean> = new Subject();
  protected playEvent: Subject<boolean> = new Subject();

  @ViewChild('secondsIndicator', { read: ElementRef, static: false })
  set secondsIndicator(content: ElementRef) {
    if (content) {
      this.secondsIndicatorElement = content;
    }
  }
  @ViewChild('minutesIndicator') set minutesIndicator(content: ElementRef) {
    if (content) {
      this.minutesIndicatorElement = content;
    }
  }
  @ViewChild('hoursIndicator') set hoursIndicator(content: ElementRef) {
    if (content) {
      this.hoursIndicatorElement = content;
    }
  }

  /**
   * constructor Method class
   */
  constructor() {
    this.seconds = 120;
    this.time = [0, 0, 0];
  }

  /**
   * Set hands clock position passing
   * @param {number} hours
   * @param {number} minutes
   * @param {number} seconds
   */
  protected setHandsPositions(
    hours: number,
    minutes: number,
    seconds: number
  ): void {
    this.secondsIndicatorElement.nativeElement.style.transform = `rotateZ(calc(6deg * ${seconds}))`;
    this.minutesIndicatorElement.nativeElement.style.transform = `rotateZ(calc(6deg * ${minutes}))`;
    this.hoursIndicatorElement.nativeElement.style.transform = `rotateZ(calc(6deg * ${hours}))`;
  }

  /**
   * Actions to execute when time subscription completes
   */
  protected timerSubscriptionCompleted(timeLastValue: Array<number>): void {
    if (timeLastValue === [0, 0, 0]) {
      this.stateChangeEvent.next({ state: 'NONE' });
    }
  }

  /**
   * Set hand indicators to initial position
   */
  protected manageNoneState(): void {
    this.stopClock.next();
    this.setHandsPositions(0, 0, 0);
    this.time = [0, 0, 0];
    this.secondsStateValue = 0;
  }

  protected managePlayState(): void {
    this.playEvent.next(true);
    this.timerSubscription();
  }

  protected manageResumeState(): void {
    this.playEvent.next(true);
  }

  protected managePauseState(): void {
    // this.stopClock.next();
    this.pauseEvent.next(false);
    console.log(
      'Clock component -- secondsStateValue on pause',
      this.secondsStateValue
    );
  }

  protected timerStateManager(state: ClockState): void {
    switch (state.state) {
      case 'NONE':
        this.manageNoneState();
        break;
      case 'PAUSE':
        this.managePauseState();
        break;
      case 'PLAY':
        this.managePlayState();
        break;
      case 'RESUME':
        this.manageResumeState();
        break;
    }
  }

  protected subscribeToStateChanges(): void {
    this.stateChangeEvent.pipe(takeUntil(this.endSubscriptions)).subscribe({
      next: (state: ClockState) => {
        this.timerStateManager(state);
        console.log(
          'Clock component -- clock state change subscription',
          state
        );
      },
      error: (err) => {
        console.error(
          'Clock component -- error on clock state change subscription',
          err
        );
      },
    });
  }

  /**
   * Starts timer subscription
   */
  protected timerSubscription(): void {
    const numbers = interval(1000).pipe(mapTo(1));
    merge(this.pauseEvent, this.playEvent)
      .pipe(
        startWith(true),
        switchMap((tickValue) => (tickValue ? numbers : EMPTY)),
        scan((acc, curr) => {
          this.secondsStateValue = curr ? curr + acc : acc;
          return curr ? curr + acc : acc;
        }, this.secondsStateValue - 1),
        takeWhile((v) => v <= this.seconds),
        takeUntil(this.stopClock)
      )
      .subscribe({
        next: (tickValue: number) => {
          if (tickValue !== null && tickValue !== undefined) {
            this.time = secondsToFullTime(this.seconds - tickValue);
            this.setHandsPositions(this.time[0], this.time[1], tickValue);
            console.log('count down: ', tickValue);
          }
        },
        error: (err) => console.log(err),
        complete: () => {
          console.log('Completed', this.time);
          this.timerSubscriptionCompleted(this.time);
        },
      });
  }

  ngOnInit(): void {
    this.secondsStateValue = 0;
    this.subscribeToStateChanges();
  }

  ngAfterViewInit(): void {
    this.setHandsPositions(0, 0, 0);
  }

  ngOnDestroy(): void {
    this.endSubscriptions.next();
  }
}
