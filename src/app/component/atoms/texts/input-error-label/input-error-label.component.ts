import { Component, Input } from '@angular/core';
import { FormErrorI } from 'src/app/interfaces/FormError';

@Component({
  selector: 'app-input-error-label',
  templateUrl: './input-error-label.component.html',
})
export class InputErrorLabelComponent {
  @Input() errorData: FormErrorI;
  constructor() {}
}
