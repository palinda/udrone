import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIconBtnComponent } from './u-icon-btn.component';

describe('UIconBtnComponent', () => {
  let component: UIconBtnComponent;
  let fixture: ComponentFixture<UIconBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIconBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIconBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
