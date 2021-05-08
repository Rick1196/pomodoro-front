import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { finalize, take } from 'rxjs/operators';
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  @Input() seconds: number;
  public time: number;
  constructor() {
    this.seconds = 60;
    this.time = this.seconds;
    const numbers = interval(1000);
    const takeSeconds = numbers.pipe(take(this.seconds), finalize(this.showAlert));
    takeSeconds.subscribe(x => {
      this.time = (this.seconds - x) - 1;
    });
  }

  showAlert(): void {
    console.log('Time ends');
  }

  ngOnInit(): void {
  }

}
