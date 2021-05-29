import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatch(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const password1 = form.get('password').value;
    const password2 = form.get('passwordMatch').value;
    if (password1 === password2) {
      return null;
    }
    return { passwordMatch: { value: false } };
  };
}
