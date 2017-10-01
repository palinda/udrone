import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeSplineComponent } from './realtime-spline.component';

describe('RealtimeSplineComponent', () => {
  let component: RealtimeSplineComponent;
  let fixture: ComponentFixture<RealtimeSplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeSplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeSplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
