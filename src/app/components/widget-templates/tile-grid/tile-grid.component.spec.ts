import { UIconBtnComponent } from '@components/unit/u-icon-btn/u-icon-btn.component';
import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { TestContext } from '@utilities/tests.configure.spec';
import { setup } from '@app/utilities/tests.configure.spec';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileGridComponent } from './tile-grid.component';

describe('TileGridComponent', () => {
  setup();

  beforeEach(function(this: TestContext<TileGridComponent, TileGridComponent>) {
    this.create(TileGridComponent, TileGridComponent, [], [ UIconBtnComponent, DclWrapperComponent ]);
  });

  it('should be created', function(this: TestContext<TileGridComponent, TileGridComponent>) {
    expect(this.hostComponent).toBeTruthy();
  });
});
