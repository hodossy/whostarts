import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-indicator',
  templateUrl: './color-indicator.component.html',
  styleUrls: ['./color-indicator.component.scss']
})
export class ColorIndicatorComponent implements OnInit {
  @Input() color: string;
  @Input() highlight: string;

  ngOnInit() {
  }

}
