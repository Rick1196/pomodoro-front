import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidatePassword {
  static validate(control: AbstractControl): ValidationErrors | null {
    if (control) {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      if (password !== confirmPassword) {
        const error = { notMatch: true };
        return error;
      }
    }
    return null;
  }
}
