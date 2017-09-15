import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UTableComponent } from './u-table.component';

describe('UTableComponent', () => {
  let component: UTableComponent;
  let fixture: ComponentFixture<UTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
