import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { TestContext } from '@utilities/tests.configure.spec';
import { setup } from '@app/utilities/tests.configure.spec';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowComponent } from './window.component';

describe('WindowComponent', () => {

  setup();

  beforeEach(function(this: TestContext<WindowComponent, WindowComponent>) {
    this.create(WindowComponent, WindowComponent, [], [ DclWrapperComponent ]);
  });

  it('should be created', function(this: TestContext<WindowComponent, WindowComponent>) {
    expect(this.hostComponent).toBeTruthy();
  });
});
