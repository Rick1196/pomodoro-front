import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormatter',
  pure: false,
})
export class TimeFormatterPipe implements PipeTransform {
  transform(time: Array<number>, timeToTransform: Array<number>): string {
    const hours = timeToTransform[0].toString().padStart(2, '0');
    const minutes = timeToTransform[1].toString().padStart(2, '0');
    const seconds = timeToTransform[2].toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
}
