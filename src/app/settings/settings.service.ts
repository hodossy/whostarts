import { Injectable, InjectionToken, Inject } from '@angular/core';
import { ColorChoice } from '../colors';

export interface Settings {
  order: boolean;
  chooseColor: boolean;
  colors: Array<ColorChoice>;
  countdown: number;
}

export const DEFAULT_SETTINGS = new InjectionToken<Settings>('Default settings configuration', {
  providedIn: 'root',
  factory: () => {
    return {
      order: true,
      chooseColor: true,
      countdown: 3,
      colors: [
        { color: 'white', selected: true },
        { color: 'blue', selected: true },
        { color: 'green', selected: true },
        { color: 'yellow', selected: true },
        { color: 'orange', selected: true },
        { color: 'red', selected: true },
        { color: 'maroon', selected: true },
        { color: 'gray', selected: true },
        { color: 'black', selected: true },
        {
          color: `conic-gradient(white 40deg,
                  blue 40deg 80deg,
                  green 80deg 120deg,
                  yellow 120deg 160deg,
                  orange 160deg 200deg,
                  red 200deg 240deg,
                  maroon 240deg 280deg,
                  gray 280deg 320deg,
                  black 320deg 360deg)`,
          selected: true
        },
      ]
    }
  }
})

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  order: boolean;
  chooseColor: boolean;
  colors: Array<ColorChoice>;
  private _countdown: number;

  constructor(
    @Inject(DEFAULT_SETTINGS) _default: Settings
  ) {
    this.order = _default.order;
    this.chooseColor = _default.chooseColor;
    this.countdown = _default.countdown;
    this.colors = _default.colors;
  }

  get countdown() {
    return this._countdown;
  }

  set countdown(val: number) {
    if (val && val > 3) {
      this._countdown = val;
    } else {
      this._countdown = 3;
    }
  }
}
