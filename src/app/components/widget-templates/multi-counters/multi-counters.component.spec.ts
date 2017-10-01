import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCountersComponent } from './multi-counters.component';

describe('DoubleCountersComponent', () => {
  let component: MultiCountersComponent;
  let fixture: ComponentFixture<MultiCountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiCountersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
