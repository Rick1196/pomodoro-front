import { FormControl } from '@angular/forms';

export interface BasicInputFieldI {
  name: string;
  id: string;
  autocomplete: string;
  formControl: FormControl;
  class: string;
  placeholder: string;
  type: string;
}
