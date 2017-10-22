import { SERVICE_QUERY } from '@services/service-query.provider';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TpDepModule} from '@modules/tp-dep.module';
import { UTableComponent } from './u-table.component';

describe('UTableComponent', () => {
  let component: UTableComponent;
  let fixture: ComponentFixture<UTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: SERVICE_QUERY, useValue: this.mockServiceQuery}
      ],
      declarations: [ UTableComponent ],
      imports: [ TpDepModule ]
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
