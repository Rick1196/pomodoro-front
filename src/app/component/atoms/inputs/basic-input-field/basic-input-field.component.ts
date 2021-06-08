import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasicInputFieldI } from 'src/app/interfaces/inputs/BasicInputFieldI';

@Component({
  selector: 'app-basic-input-field',
  templateUrl: './basic-input-field.component.html',
})
export class BasicInputFieldComponent implements OnInit {
  @Input() inputProperties: BasicInputFieldI;
  public displayMessage: boolean;
  @Input() formGroup: FormGroup;
  @Input() containerClass: string;
  constructor() {}
  ngOnInit(): void {
    this.formGroup.get(this.inputProperties.name).valueChanges.subscribe({
      next: (_) => {
        this.displayMessage = this.formGroup.get(
            this.inputProperties.name,
        ).dirty;
      },
      error: (error) => {
        console.error('Basic input filed, status subscription', error);
      },
    });
  }
}
