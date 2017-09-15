import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UTextComponent } from './u-text.component';

describe('UTextComponent', () => {
  let component: UTextComponent;
  let fixture: ComponentFixture<UTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
