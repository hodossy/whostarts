import { Component, Input, HostBinding, OnInit, InjectionToken, Inject } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Point } from '../utils';

export interface PlayerIndicator {
  center: Point;
  assignedOrder?: number;
  assignedColor?: string;
}

export const INDICATOR_RADIUS = new InjectionToken<number>('Indicator radius', {
  providedIn: 'root',
  factory: () => 25
});

@Component({
  selector: 'app-player-indicator',
  templateUrl: './player-indicator.component.html',
  styleUrls: ['./player-indicator.component.scss']
})
export class PlayerIndicatorComponent implements OnInit {
  @Input() player: PlayerIndicator;

  @HostBinding('style') style: SafeStyle;

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(INDICATOR_RADIUS) private radius: number
  ) {}

  ngOnInit() {
    const styleString = `width: ${this.radius * 2}px; height:  ${this.radius * 2}px; line-height: ${this.radius * 2 - 4}px; border-radius: ${this.radius}px; top: ${this.player.center.y}px; left: ${this.player.center.x}px`
    this.style = this.sanitizer.bypassSecurityTrustStyle(styleString);
  }
}
