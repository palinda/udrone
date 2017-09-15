import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UPopupComponent } from './u-popup.component';

describe('UPopupComponent', () => {
  let component: UPopupComponent;
  let fixture: ComponentFixture<UPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UPopupComponent ]
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
