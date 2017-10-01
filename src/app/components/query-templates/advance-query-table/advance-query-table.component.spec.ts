import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceQueryTableComponent } from './advance-query-table.component';

describe('AdvanceQueryTableComponent', () => {
  let component: AdvanceQueryTableComponent;
  let fixture: ComponentFixture<AdvanceQueryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceQueryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceQueryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
