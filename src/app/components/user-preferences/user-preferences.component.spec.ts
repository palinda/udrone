import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { TemplateCreatorComponent } from '@components/template-creator/template-creator.component';
import { setup } from '@app/utilities/tests.configure.spec';
import { TestContext } from '@utilities/tests.configure.spec';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreferencesComponent } from './user-preferences.component';

describe('UserPreferencesComponent', () => {
  setup();

  beforeEach(function(this: TestContext<UserPreferencesComponent, UserPreferencesComponent>) {
      this.create(UserPreferencesComponent, UserPreferencesComponent, [], [ TemplateCreatorComponent, DclWrapperComponent]);
  });

  it('should be created', function(this: TestContext<UserPreferencesComponent, UserPreferencesComponent>) {
    expect(this.hostComponent).toBeTruthy();
  });
});

