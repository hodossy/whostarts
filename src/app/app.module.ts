import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { PlayerIndicatorComponent } from './player-indicator/player-indicator.component';
import { ContrastDirective } from './contrast.directive';
import { SettingsComponent } from './settings/settings.component';
import { ColorIndicatorComponent } from './colors/color-indicator/color-indicator.component';
import { ColorSelectionComponent } from './colors/color-selection/color-selection.component';
import { ColorPickerComponent } from './colors/color-picker/color-picker.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PlayerIndicatorComponent,
    ContrastDirective,
    SettingsComponent,
    ColorIndicatorComponent,
    ColorSelectionComponent,
    ColorPickerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, scope: '/whostarts' }),
  ],
  entryComponents: [
    SettingsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
