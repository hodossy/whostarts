import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-indicator',
  templateUrl: './color-indicator.component.html',
  styleUrls: ['./color-indicator.component.scss']
})
export class ColorIndicatorComponent {
  @Input() color: string;
  @Input() highlight: boolean;

  onClick(event: any) {
    this.highlight = !this.highlight;
  }
}
