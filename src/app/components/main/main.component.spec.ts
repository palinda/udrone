import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { PermissionManagerService } from '@services/permission-manager.service';
import { ThemeStoreService } from '@services/theme-store.service';
import { UserContextService } from '@services/user-context.service';
import { ComponentStore } from '@services/component-store';
import { PopupDriverService } from '@services/popup-driver.service';
import { SystemInfoComponent } from '@components/system-info/system-info.component';
import { UIconBtnComponent } from '@components/unit/u-icon-btn/u-icon-btn.component';
import { UPopupComponent } from '@components/unit/u-popup/u-popup.component';
import { TestContext } from '@utilities/tests.configure.spec';
import { setup } from '@app/utilities/tests.configure.spec';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {

  setup();

  beforeEach(function(this: TestContext<MainComponent, MainComponent>){
    this.create(MainComponent, MainComponent,
      [ PopupDriverService, ComponentStore, UserContextService, PermissionManagerService, ThemeStoreService ],
      [ UPopupComponent, UIconBtnComponent, SystemInfoComponent, DclWrapperComponent ]);
  });

  it('should be created', function(this: TestContext<MainComponent, MainComponent>) {
    expect(this.hostComponent).toBeTruthy();
  });
});
