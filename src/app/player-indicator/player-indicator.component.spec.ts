import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContrastDirective } from '../contrast.directive';
import { PlayerIndicatorComponent, INDICATOR_RADIUS } from './player-indicator.component';

fdescribe('PlayerIndicatorComponent', () => {
  let component: PlayerIndicatorComponent;
  let fixture: ComponentFixture<PlayerIndicatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrastDirective, PlayerIndicatorComponent ],
      providers: [
        { provide: INDICATOR_RADIUS, useValue: 10 }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerIndicatorComponent);
    component = fixture.componentInstance;
    component.player = {center: {x: 150, y: 150}, assignedColor: 'red', assignedOrder: 2}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign proper styles to host', () => {
    const expectedStyles = {
      'width': '20px',
      'height': '20px',
      'line-height': '16px',
      'border-radius': '10px',
      'top': '150px',
      'left': '150px',
    }
    expect(fixture.debugElement.styles).toEqual(expectedStyles);
  });
});
