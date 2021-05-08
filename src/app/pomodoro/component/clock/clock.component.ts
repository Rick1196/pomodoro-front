import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Subject } from 'rxjs/internal/Subject';
import { finalize, take, takeUntil } from 'rxjs/operators';
import { secondsToFullTime } from 'src/app/helper/functions/Time';
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
})
export class ClockComponent implements OnInit, AfterViewInit {
  @Input() seconds: number;
  public time: Array<number>;
  protected secondsIndicatorElement: ElementRef;
  protected minutesIndicatorElement: ElementRef;
  protected hoursIndicatorElement: ElementRef;
  protected stopClock: Subject<void> = new Subject();
  @ViewChild('secondsIndicator', { read: ElementRef, static: false }) set secondsIndicator(content: ElementRef) {
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

  constructor() {
    this.seconds = 120;
    this.time = [0, 0, 0];
  }

  protected setHandsPositions(hours: number, minutes: number, seconds: number): void {
    this.secondsIndicatorElement.nativeElement.style.transform = `rotateZ(calc(6deg * ${seconds}))`;
    this.minutesIndicatorElement.nativeElement.style.transform = `rotateZ(calc(6deg * ${minutes}))`;
    this.hoursIndicatorElement.nativeElement.style.transform = `rotateZ(calc(6deg * ${hours}))`;
  }

  protected timeEnded(): void {
    this.timerStateManager();
  }

  protected timerStateManager(): void {
    if (this.seconds === 0) {
      this.setHandsPositions(0, 0, 0);
      console.log('Time ends');
    }
  }


  protected timerSubscription(): void {
    const numbers = interval(1000);
    const takeSeconds = numbers.pipe(take(this.seconds), takeUntil(this.stopClock));
    takeSeconds.subscribe({
      next: (x: number) => {
        this.time = secondsToFullTime((this.seconds - x) - 1);
        this.setHandsPositions(this.time[0], this.time[1], ((x + 1)));
      },
      complete: () => {
        this.timeEnded();
      }
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setHandsPositions(0, 0, 0);
  }

}
