import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGuageComponent } from './counter-guage.component';

describe('CounterGuageComponent', () => {
  let component: CounterGuageComponent;
  let fixture: ComponentFixture<CounterGuageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterGuageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterGuageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
