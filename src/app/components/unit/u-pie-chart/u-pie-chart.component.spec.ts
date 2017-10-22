import { TpDepModule } from '@modules/tp-dep.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UPieChartComponent } from './u-pie-chart.component';

describe('UPieChartComponent', () => {
  let component: UPieChartComponent;
  let fixture: ComponentFixture<UPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UPieChartComponent ],
      imports: [ TpDepModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
