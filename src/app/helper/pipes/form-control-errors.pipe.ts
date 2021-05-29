import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'formControlErrors',
})
export class FormControlErrorsPipe implements PipeTransform {
  transform(value: FormControl): unknown {
    if (value) {
      const errorKeys = Object.keys(value.errors);
      return errorKeys.length > 0 ? errorKeys[0] : '';
    } else {
      return '';
    }
  }
}
