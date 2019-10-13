import { Component, OnInit, Input } from '@angular/core';
import { ColorChoice } from '../colors';

export interface Settings {
  order: boolean;
  chooseColor: boolean;
  colors: Array<ColorChoice>;
  countdown: number;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() settings: Settings;

  ngOnInit() {
  }

}
