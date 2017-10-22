import { setup } from '@app/utilities/tests.configure.spec';
import { TestContext } from '@utilities/tests.configure.spec';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemInfoComponent } from './system-info.component';

describe('SystemInfoComponent', () => {
  setup();

    beforeEach(function(this: TestContext<SystemInfoComponent, SystemInfoComponent>) {
        this.create(SystemInfoComponent, SystemInfoComponent);
    });

    it('should be created', function(this: TestContext<SystemInfoComponent, SystemInfoComponent>) {
      expect(this.hostComponent).toBeTruthy();
    });
});
