import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { IntervalService } from '@services/interval.service';
import { MockIntervalService } from '@mock/interval-service.mock';
import { Observable } from 'rxjs/Rx';
/* tslint:disable:no-unused-variable */
import { By } from '@angular/platform-browser';
import { DebugElement, SimpleChange } from '@angular/core';

import { BgCounterComponent } from './bg-counter.component';

describe('BgCounterComponent', () => {
  let component: BgCounterComponent;
  let fixture: ComponentFixture<BgCounterComponent>;
  let debugElement: DebugElement;
  const firstValue = 2;
  const secondValue = 1;

  let mockIntervalService: MockIntervalService;

  beforeEach(async(() => {
    mockIntervalService = new MockIntervalService();

    TestBed.overrideComponent( BgCounterComponent,
      {
        set : {
          providers: [ MockIntervalService ]
      }
    });

    TestBed.configureTestingModule({
      declarations: [ BgCounterComponent ],
      providers: [
        { provide: IntervalService, useValue: mockIntervalService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgCounterComponent);
    component = fixture.componentInstance;

    debugElement  = fixture.debugElement.query(By.css('.bg-counter')); // find hero element
    component.value = firstValue;
    component.interval = 2;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update values', () => {
    component.ngOnChanges({'value': new SimpleChange(0, firstValue, true)});
    fixture.detectChanges();
    mockIntervalService.tick();
    mockIntervalService.tick();
    mockIntervalService.tick();
    fixture.detectChanges();
    expect(debugElement.nativeElement.textContent.replace(/\s/g, '')).toBe(firstValue + '', 'First value compare');

    component.ngOnChanges({'value': new SimpleChange(0, secondValue, false)});
    fixture.detectChanges();
    mockIntervalService.tick();
    fixture.detectChanges();
    expect(debugElement.nativeElement.textContent.replace(/\s/g, '')).toBe(secondValue + '', 'Second value compare');

    component.ngOnChanges({'value': new SimpleChange(0, undefined, false)});
    fixture.detectChanges();
    mockIntervalService.tick();
    fixture.detectChanges();
    expect(debugElement.nativeElement.textContent.replace(/\s/g, '')).toBe(0 + '', 'Undefined current value compare');

    component.ngOnChanges({'value': undefined});
    fixture.detectChanges();
    mockIntervalService.tick();
    fixture.detectChanges();
    expect(debugElement.nativeElement.textContent.replace(/\s/g, '')).toBe(0 + '', 'Undefined value compare');

  });

  it('should update styles', () => {
    component.color = 'white';
    component.size = 40;
    component.ngOnChanges({'size': new SimpleChange(0, component.size, true)});
    component.ngOnChanges({'color': new SimpleChange(0, component.color, true)});
    fixture.detectChanges();
    expect(debugElement.styles['color']).toBe('white', 'color check');
    expect(debugElement.styles['font-size']).toBe('40px', 'size check');
  });

});
