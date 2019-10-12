import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

import { colorToRGBA, contrast } from './utils';

@Directive({
  selector: '[appContrast]'
})
export class ContrastDirective implements OnChanges {
  @HostBinding('style.color') hostColor: string;
  @Input('backgroundColor') hostBackgroundColor: string;

  ngOnChanges() {
    if(this.hostBackgroundColor) {
      const background = colorToRGBA(this.hostBackgroundColor);
      const contrastToWhite = contrast([255, 255, 255], background);
      const contrastToBlack = contrast([0, 0, 0], background);
      this.hostColor = contrastToWhite > contrastToBlack ? 'white' : 'black';
    }
  }
}
