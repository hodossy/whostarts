import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerIndicatorComponent } from './player-indicator.component';

fdescribe('PlayerIndicatorComponent', () => {
  let component: PlayerIndicatorComponent;
  let fixture: ComponentFixture<PlayerIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.player = {center: {x: 150, y: 150}, assignedColor: 'red', assignedOrder: 2}
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
