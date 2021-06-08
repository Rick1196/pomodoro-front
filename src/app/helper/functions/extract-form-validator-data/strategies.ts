import { FormControl } from '@angular/forms';
import { FormErrorI } from 'src/app/interfaces/FormError';

export function extractLengthValidatorsData(
    formControl: FormControl,
): FormErrorI {
  const errorKeys = extractErrorKeys(formControl);
  const errorData: FormErrorI = {
    errorCode: errorKeys[0],
    value: String(formControl.errors[errorKeys[0]].requiredLength),
  };
  return errorData;
}

export function extractLimitedValueValidatorsData(
    formControl: FormControl,
): FormErrorI {
  const errorKeys = extractErrorKeys(formControl);
  const errorObject = formControl.errors[errorKeys[0]];
  const errorData: FormErrorI = {
    errorCode: errorKeys[0],
    value: String(errorObject[errorKeys[0]]),
  };
  return errorData;
}

export function extractGenericValidatorsData(
    formControl: FormControl,
): FormErrorI {
  const errorKeys = extractErrorKeys(formControl);
  const errorData: FormErrorI = {
    errorCode: errorKeys[0],
    value: null,
  };
  return errorData;
}

export function extractErrorKeys(
    formControl: FormControl,
): Array<string> | null | undefined {
  const errorKeys = Object.keys(formControl.errors);
  return errorKeys;
}

export function selectExtractValidationErrorStrategy(
    errorKey: string,
    formControl: FormControl,
): FormErrorI {
  switch (errorKey) {
    case 'max':
    case 'min':
      return extractLimitedValueValidatorsData(formControl);
    case 'minlength':
    case 'maxlength':
      return extractLengthValidatorsData(formControl);
    default:
      return extractGenericValidatorsData(formControl);
      break;
  }
}
