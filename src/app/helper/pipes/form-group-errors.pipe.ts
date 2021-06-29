import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'formGroupErrors',
  pure: true,
})
export class FormGroupErrorsPipe implements PipeTransform {
  transform(value: FormGroup): unknown {
    console.log('Form group pipe', value);
    if (value !== null && value !== undefined && value.errors) {
      const errorKeys = Object.keys(value.errors);
      return errorKeys.length > 0 ? ('formErrors.'+errorKeys[0]) : '';
    } else {
      return '';
    }
  }
}
