import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'formControlErrors',
  pure: false,
})
export class FormControlErrorsPipe implements PipeTransform {
  transform(value: FormControl): unknown {
    if ((value !== null && value !== undefined) && (value.errors)) {
      const errorKeys = Object.keys(value.errors);
      return errorKeys.length > 0 ? ('formErrors.'+errorKeys[0]) : '';
    } else {
      return '';
    }
  }
}
