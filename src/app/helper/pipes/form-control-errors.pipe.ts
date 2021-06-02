import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormErrorI } from 'src/app/interfaces/FormError';
import {
  extractErrorKeys,
  selectExtractValidationErrorStrategy,
} from '../functions/extract-form-validator-data/strategies';

@Pipe({
  name: 'formControlErrors',
  pure: false,
})
export class FormControlErrorsPipe implements PipeTransform {
  transform(value: FormControl): FormErrorI | null {
    if (value !== null && value !== undefined && value.errors) {
      const errorKeys = extractErrorKeys(value);
      if (errorKeys[0]) {
        return selectExtractValidationErrorStrategy(errorKeys[0], value);
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
