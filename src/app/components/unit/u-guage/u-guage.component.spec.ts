import { TpDepModule } from '@modules/tp-dep.module';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UGuageComponent, GaugeData } from './u-guage.component';

describe('UGuageComponent', () => {
  let component: UGuageComponent;
  let fixture: ComponentFixture<UGuageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TpDepModule],
      declarations: [ UGuageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UGuageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should value updated', () => {
    component.value = new GaugeData(50, 60, 40);
    fixture.detectChanges();
  });

});
