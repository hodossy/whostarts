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
        {color: 'red', selected: true},
        {color: 'green', selected: true},
        {color: 'blue', selected: true},
        {color: 'black', selected: true},
        {color: 'brown', selected: true},
        {color: 'yellow', selected: true},
        {color: 'gray', selected: true},
        {color: 'white', selected: true},
        {color: 'orange', selected: true},
      ]
  }}
})

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  order: boolean;
  chooseColor: boolean;
  colors: Array<ColorChoice>;
  countdown: number;

  constructor(
    @Inject(DEFAULT_SETTINGS) _default: Settings
  ) {
    this.order = _default.order;
    this.chooseColor = _default.chooseColor;
    this.countdown = _default.countdown;
    this.colors = _default.colors;
  }
}
