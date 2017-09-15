import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSparklineComponent } from './counter-sparkline.component';

describe('CounterSparklineComponent', () => {
  let component: CounterSparklineComponent;
  let fixture: ComponentFixture<CounterSparklineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterSparklineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSparklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
