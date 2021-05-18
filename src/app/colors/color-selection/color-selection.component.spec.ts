import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ColorSelectionComponent } from './color-selection.component';

describe('ColorSelectionComponent', () => {
  let component: ColorSelectionComponent;
  let fixture: ComponentFixture<ColorSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow a new color placeholder', () => {
    expect(component.canAdd()).toBeTruthy();
  });

  it('should not allow more color placeholders', () => {
    component.addNewColor();
    expect(component.canAdd()).toBeFalsy();
  });

  it('should add a new color placeholder', () => {
    component.addNewColor();
    expect(component.colors.length).toEqual(1);
  });

});
