import { Component } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timer: Observable<number> = EMPTY;
}
