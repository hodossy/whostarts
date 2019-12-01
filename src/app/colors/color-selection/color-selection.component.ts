import { Component, Input } from '@angular/core';

export interface ColorChoice {
  color: string;
  selected: boolean;
}

@Component({
  selector: 'app-color-selection',
  templateUrl: './color-selection.component.html',
  styleUrls: ['./color-selection.component.scss']
})
export class ColorSelectionComponent {
  @Input() colors: Array<ColorChoice> = [];

  addNewColor(): void {
    if(this.canAdd()) {
      this.colors.push({ color: undefined, selected: false });
    }
  }

  canAdd(): boolean {
    // TODO: remove false when color selection is implemented
    return false && (this.colors.length === 0 || this.colors[this.colors.length - 1].color != undefined);
  }

  openChooseColor() {
    throw Error('Color selection is not implemented yet.');
  }

}
