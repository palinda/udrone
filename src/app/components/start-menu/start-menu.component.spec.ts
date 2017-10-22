import { UIconBtnComponent } from '@components/unit/u-icon-btn/u-icon-btn.component';
import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { TestContext } from '@utilities/tests.configure';
import { setup } from '@app/utilities/tests.configure';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMenuComponent } from './start-menu.component';

describe('StartMenuComponent', () => {

    setup();

    beforeEach(function(this: TestContext<StartMenuComponent, StartMenuComponent>) {
      this.create(StartMenuComponent, StartMenuComponent, [], [ UIconBtnComponent, DclWrapperComponent ]);
    });

    it('should be created', function(this: TestContext<StartMenuComponent, StartMenuComponent>) {
      expect(this.hostComponent).toBeTruthy();
    });
  });
