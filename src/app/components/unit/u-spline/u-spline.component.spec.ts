import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TpDepModule} from '@modules/tp-dep.module';
import { USplineComponent } from './u-spline.component';

describe('USplineComponent', () => {
  let component: USplineComponent;
  let fixture: ComponentFixture<USplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USplineComponent ],
      imports: [ TpDepModule ]
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
