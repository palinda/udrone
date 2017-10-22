import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { TestContext } from '@utilities/tests.configure';
import { setup } from '@app/utilities/tests.configure';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContainerComponent } from './dashboard-container.component';

describe('DashboardContainerComponent', () => {

  setup();

  beforeEach(function(this: TestContext<DashboardContainerComponent, DashboardContainerComponent>) {
    this.create(DashboardContainerComponent, DashboardContainerComponent, [], [ DclWrapperComponent ]);
  });

  it('should be created', function(this: TestContext<DashboardContainerComponent, DashboardContainerComponent>) {
    expect(this.hostComponent).toBeTruthy();
  });
});
