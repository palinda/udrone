import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UFormComponent } from './u-form.component';

describe('UFormComponent', () => {
  let component: UFormComponent;
  let fixture: ComponentFixture<UFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
