import { Component, Input } from '@angular/core';
import { ColorChoice } from '..';

@Component({
  selector: 'app-color-indicator',
  templateUrl: './color-indicator.component.html',
  styleUrls: ['./color-indicator.component.scss']
})
export class ColorIndicatorComponent {
  @Input('color') choice!: ColorChoice;

  onClick(_: MouseEvent) {
    this.choice.selected = !this.choice.selected;
  }
}
