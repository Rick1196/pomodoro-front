import { ClickOutsideDirective } from './click-outside.directive';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

describe('ClickOutsideDirective', () => {
  let spectator: SpectatorDirective<ClickOutsideDirective>;
  const createDirective = createDirectiveFactory(ClickOutsideDirective);
  beforeEach(() => {
    spectator = createDirective(`<div appClickOutside>Testing Highlight Directive</div>`);
  });
  it('should create an instance', () => {
    spectator.dispatchMouseEvent(spectator.element, 'mouseover');
  });
});
