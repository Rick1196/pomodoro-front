import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormatter',
  pure: false
})
export class TimeFormatterPipe implements PipeTransform {
  transform(time: number, timeToTransform: number): string {
    const hours = parseInt(Math.floor(timeToTransform / 3600) + '', 10).toString().padStart(2, '0');
    const minutes = parseInt(Math.floor(((timeToTransform % 3600)) / 60) + '', 10).toString().padStart(2, '0');
    const seconds = (((timeToTransform % 3600)) % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
}
