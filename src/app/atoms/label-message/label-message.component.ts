import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-message',
  templateUrl: './label-message.component.html',
})
export class LabelMessageComponent {
  @Input() message: string;

  constructor() {}
}
