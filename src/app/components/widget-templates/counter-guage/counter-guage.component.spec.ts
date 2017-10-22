import { TestContext } from '@utilities/tests.configure.spec';
import { ServiceQueryMock } from '@mock/service-query.mock';
import { CountResp } from '@defs/count-resp';
import { DynamicMsg } from '@defs/dynamic-msg';
import { Size } from '@defs/size';
import { ComponentDef } from '@defs/component-def';
import { MockLogService } from '@mock/log-service.mock';
import { LogService } from '@services/log.service';
import { RefreshService } from '@services/refresh.service';
import { SERVICE_QUERY } from '@services/service-query.provider';
import { MockIntervalService } from '@mock/interval-service.mock';
import { IntervalService } from '@services/interval.service';
import { BgCounterComponent } from '@components/unit/bg-counter/bg-counter.component';
import { UGuageComponent, GaugeOptions } from '@components/unit/u-guage/u-guage.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TpDepModule } from '@modules/tp-dep.module';
import { CounterGuageComponent } from './counter-guage.component';
import { Query } from '@defs/query';
import { setup } from '@app/utilities/tests.configure.spec';

describe('CounterGuageComponent', () => {

  setup();
  const count = 1;
  const resp = new CountResp(count);
  const query = new Query('count', new DynamicMsg());

  beforeEach(function(this: TestContext<BgCounterComponent, CounterGuageComponent>) {
      this.create(BgCounterComponent, CounterGuageComponent, [ RefreshService ], [ UGuageComponent ], () => {
        this.mockServiceQuery.addMockQuery(query, resp);
        this.hostComponent.componentID = 'test_1';
        this.hostComponent.refreshInterval = 1;
        this.hostComponent.componentDef = new ComponentDef('test_1', 'Test', new Size('2', '2'), new DynamicMsg());
        this.hostComponent.guageOptions = new GaugeOptions('Profit', 20, '$', undefined, 0, 100, 10);
      });
  });

  it('should be created and success query', function(this: TestContext<BgCounterComponent, CounterGuageComponent>) {
    this.hostComponent.countQuery = query;
    expect(this.hostComponent).toBeTruthy();
    this.fixture.detectChanges();
    this.mockIntervalService.tick();
    this.mockIntervalService.tick();
    this.mockIntervalService.tick();
    this.mockIntervalService.tick();
    this.fixture.detectChanges();
    expect(this.hostComponent.count.max).toEqual(count);
    expect(this.hostComponent.count.min).toEqual(count);
    expect(this.hostComponent.count.mean).toEqual(count);
    this.fixture.detectChanges();
  });

  it('should be created and error query', function(this: TestContext<BgCounterComponent, CounterGuageComponent>) {
    this.hostComponent.countQuery = new Query<DynamicMsg>('res/orderCountErrr', new DynamicMsg());
    expect(this.hostComponent).toBeTruthy();
    this.fixture.detectChanges();
    this.mockIntervalService.tick();
    this.mockIntervalService.tick();
    this.mockIntervalService.tick();
    this.mockIntervalService.tick();
    expect(this.hostComponent.count.max).toEqual(0);
    expect(this.hostComponent.count.min).toEqual(0);
    expect(this.hostComponent.count.mean).toEqual(0);
    this.fixture.detectChanges();
  });
});
