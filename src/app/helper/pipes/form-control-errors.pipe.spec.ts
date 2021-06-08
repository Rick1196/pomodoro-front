import { FormControl, Validators } from '@angular/forms';
import { FormErrorI } from 'src/app/interfaces/FormError';
import { FormControlErrorsPipe } from './form-control-errors.pipe';

describe('FormControlErrorsPipe', () => {
  it('create an instance', () => {
    const pipe = new FormControlErrorsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the key and value from an  error in a max validation', () => {
    const pipe = new FormControlErrorsPipe();
    const form = new FormControl(1234566, [
      Validators.required,
      Validators.max(21),
    ]);
    const errorValue: FormErrorI = pipe.transform(form);
    const testError: FormErrorI = {
      errorCode: 'max',
      value: '21',
    };
    expect(errorValue).toEqual(testError);
  });

  it('should return the key and value from an  error in a min validation', () => {
    const pipe = new FormControlErrorsPipe();
    const form = new FormControl(21, [
      Validators.required,
      Validators.min(1234566),
    ]);
    const errorValue: FormErrorI = pipe.transform(form);
    const testError: FormErrorI = {
      errorCode: 'min',
      value: '1234566',
    };
    expect(errorValue).toEqual(testError);
  });

  it('should return null on a valid form', () => {
    const pipe = new FormControlErrorsPipe();
    const form = new FormControl('ipnqsVlmrq', [
      Validators.required,
      Validators.minLength(9),
    ]);
    const errorValue: FormErrorI = pipe.transform(form);
    const testError: FormErrorI = null;
    expect(errorValue).toEqual(testError);
  });

  it('should return the key and value from an  error in a minLength validation', () => {
    const pipe = new FormControlErrorsPipe();
    const form = new FormControl('r', [
      Validators.required,
      Validators.minLength(2),
    ]);
    const errorValue: FormErrorI = pipe.transform(form);
    const testError: FormErrorI = {
      errorCode: 'minlength',
      value: '2',
    };
    expect(errorValue).toEqual(testError);
  });

  it('should return the key and value from an  error in a maxLength validation', () => {
    const pipe = new FormControlErrorsPipe();
    const form = new FormControl('xJFQcTdXzolnZVXW', [
      Validators.required,
      Validators.maxLength(15),
    ]);
    const errorValue: FormErrorI = pipe.transform(form);
    const testError: FormErrorI = {
      errorCode: 'maxlength',
      value: '15',
    };
    expect(errorValue).toEqual(testError);
  });

  it('should return the key and value from an  error in a required validation', () => {
    const pipe = new FormControlErrorsPipe();
    const form = new FormControl(null, [
      Validators.required,
    ]);
    const errorValue: FormErrorI = pipe.transform(form);
    const testError: FormErrorI = {
      errorCode: 'required',
      value: null,
    };
    expect(errorValue).toEqual(testError);
  });
});
