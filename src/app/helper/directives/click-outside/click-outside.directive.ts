import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  @Output() appClickOutside = new EventEmitter<void>();
  @Input() excludedIds: Array<string> = [];
  constructor(private elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
    const excludedElements = this.excludedIds.map((id) => {
      return document.getElementById(id);
    });
    let clickedInside = this.elementRef.nativeElement.contains(target);
    if (clickedInside === false) {
      excludedElements.forEach((element: HTMLElement) => {
        clickedInside = element.contains(target);
      });
    }
    if (!clickedInside) {
      this.appClickOutside.emit();
    }
  }
}
