import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ColorIndicatorComponent } from './color-indicator.component';

describe('ColorIndicatorComponent', () => {
  let component: ColorIndicatorComponent;
  let fixture: ComponentFixture<ColorIndicatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
