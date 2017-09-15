import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USplineComponent } from './u-spline.component';

describe('USplineComponent', () => {
  let component: USplineComponent;
  let fixture: ComponentFixture<USplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
