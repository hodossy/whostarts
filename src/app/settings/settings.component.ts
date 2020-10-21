import { Component, OnDestroy } from '@angular/core';
import { SettingsService } from './settings.service';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnDestroy {
  version = environment.version;

  constructor(
    public settings: SettingsService
  ) { }

  ngOnDestroy() {
    this.settings.saveSettings();
  }

}
