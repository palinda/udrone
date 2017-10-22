import { FormsModule } from '@angular/forms';
import { ThemeStoreService } from '@services/theme-store.service';
import { ComponentStore } from '@services/component-store';
import { PermissionManagerService } from '@services/permission-manager.service';
import { UserContextService } from '@services/user-context.service';
import { RefreshService } from './../services/refresh.service';
import { LogService } from '@services/log.service';
import { SERVICE_QUERY } from '@services/service-query.provider';
import { MockLogService } from '@mock/log-service.mock';
import { ServiceQueryMock } from '@mock/service-query.mock';
import { MockIntervalService } from '@mock/interval-service.mock';
import { IntervalService } from '@services/interval.service';
import { TpDepModule } from '@modules/tp-dep.module';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';

export interface TestContext<T, H> {
    fixture: ComponentFixture<H>;
    hostComponent: H;
    hostElement: any;
    testedDirective: T;
    testedElement: any;
    mockIntervalService: MockIntervalService;
    mockServiceQuery: ServiceQueryMock;
    create(testedType: Type<T>, hostType: Type<H>, providers?: any[], declarations?: any[], init?: () => void): void;
}

export function setup(): void {
    beforeEach(function<T, H>(this: TestContext<T, H>) {
        this.create = (testedType: Type<T>, hostType: Type<H>, providers: any[] = [], declarations: any[] = [], init: () => void) => {

            this.mockIntervalService = new MockIntervalService();
            this.mockServiceQuery = new ServiceQueryMock();
            declarations = declarations.concat([testedType, hostType]);
            providers = providers.concat([
                { provide: IntervalService, useValue: this.mockIntervalService },
                { provide: SERVICE_QUERY, useValue: this.mockServiceQuery},
                { provide: LogService, useValue: new MockLogService() },
                PermissionManagerService,
                UserContextService,
                ComponentStore,
                ThemeStoreService
            ]);

            TestBed.configureTestingModule({
                imports: [ TpDepModule, FormsModule],
                declarations: declarations,
                providers: providers
            });
            this.fixture = TestBed.createComponent(hostType);
            this.hostComponent = this.fixture.componentInstance;
            this.hostElement = this.fixture.nativeElement;
            if (init !== undefined) {
                init();
            }

            if (testedType.name !== hostType.name) {
                const testedDebugElement = this.fixture.debugElement.query(By.directive(testedType));
                this.testedDirective = testedDebugElement.injector.get(testedType);
                this.testedElement = testedDebugElement.nativeElement;
            }
        };
    });
    afterEach(function<T, H>(this: TestContext<T, H>) {
        if (this.fixture) {
            this.fixture.destroy();
        }
    });
}
