import { PopupDriverService } from '@services/popup-driver.service';
import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { TpDepModule } from '@modules/tp-dep.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UPopupComponent } from './u-popup.component';

describe('UPopupComponent', () => {
  let component: UPopupComponent;
  let fixture: ComponentFixture<UPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ PopupDriverService ],
      declarations: [ UPopupComponent, DclWrapperComponent ],
      imports: [ TpDepModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
