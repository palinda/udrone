import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USparklineComponent } from './u-sparkline.component';

describe('USparklineComponent', () => {
  let component: USparklineComponent;
  let fixture: ComponentFixture<USparklineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USparklineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USparklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
