import { Component, Inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BehaviorSubject, Subscription, timer } from 'rxjs';

import { Point, distance, shuffleArray } from './utils';
import { PlayerIndicator, INDICATOR_RADIUS } from './player-indicator';
import { ColorChoice } from './colors';
import { SettingsService, SettingsComponent } from './settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  finished = false;
  countdownSubscription: Subscription;
  timer: BehaviorSubject<number> = new BehaviorSubject(0);
  players: Array<PlayerIndicator> = [];

  constructor(
    private _bottomSheet: MatBottomSheet,
    public settings: SettingsService,
    @Inject(INDICATOR_RADIUS) private radius: number
  ) {}

  onPress(event: any) {
    if(event.pointerType !== "touch" && !this.finished) {
      return;
    }
    this.addPlayer(event.center);
  }

  onPressUp(event: any) {
    if (event.pointerType !== "touch" && !this.finished) {
      return;
    }
    this.removePlayer(event.center);
  }

  addPlayer(center: Point, id: number) {
    const playerIndex = this.findPlayer(center);
    if (playerIndex === -1 ) {
      this.players.push({ id, center });
    }
    if (this.players.length > 1) {
      this.startCountdown();
    }
  }

  removePlayer(id: number) {
    this.players = this.players.filter(player => player.id !== id);
    if (this.players.length > 1) {
      this.startCountdown();
    } else {
      this.stopCountdown();
    }
  }

  findPlayer(at: Point): number {
    return this.players.findIndex((player) => {
      return distance(player.center, at) < this.radius;
    });
  }

  getNextId(): number {
    return Math.max(-1, ...this.players.map(player => player.id)) + 1
  }

  onClick(event: MouseEvent) {
    if ( this.finished ) return;
    const center = { x: event.clientX, y: event.clientY };
    const playerIndex = this.findPlayer(center);
    const id = this.getNextId();
    if (playerIndex === -1) {
      this.addPlayer(center, id);
    } else {
      this.removePlayer(this.players[playerIndex].id);
    }
  }

  startCountdown() {
    if ( this.countdownSubscription ) {
      this.countdownSubscription.unsubscribe();
    }

    this.countdownSubscription = timer(0, 1000).subscribe((val) => {
      const remaining = this.settings.countdown - val;
      if (remaining > 0) {
        this.timer.next(remaining);
      } else {
        this.finished = true;
        this.randomize()
        this.countdownSubscription.unsubscribe();
      }
    });
  }

  stopCountdown() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
      this.timer.next(0);
    }
  }

  randomize() {
    this.players = shuffleArray<PlayerIndicator>(this.players);
    if(this.settings.order) {
      this.players.map((player, order) => {
        player.assignedOrder = order + 1;
      });
    }
    if(this.settings.chooseColor) {
      const colors = shuffleArray<ColorChoice>(this.settings.colors.filter(color=> color.selected));
      this.players.map((player, idx) => {
        player.assignedColor = colors[idx].color;
      });
    }
  }

  reset(event: any) {
    event.stopPropagation();
    this.timer.next(0);
    this.players = [];
    this.finished = false;
  }

  openSettings() {
    this._bottomSheet.open(
      SettingsComponent,
      { panelClass: "app-background" }
    );
  }
}
