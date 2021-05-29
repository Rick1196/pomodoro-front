import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasicInputFieldI } from 'src/app/interfaces/inputs/BasicInputFieldI';

@Component({
  selector: 'app-basic-input-field',
  templateUrl: './basic-input-field.component.html',
})
export class BasicInputFieldComponent {
  @Input() inputProperties: BasicInputFieldI;
  @Input() displayMessage: boolean;
  @Input() formGroup: FormGroup;
  @Input() containerClass: string;
  constructor() {}
}
