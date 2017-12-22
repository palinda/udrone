import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTemplateComponent } from './unit-template.component';

describe('UnitTemplateComponent', () => {
  let component: UnitTemplateComponent;
  let fixture: ComponentFixture<UnitTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
