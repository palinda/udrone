import { setup } from '@app/utilities/tests.configure';
import { TestContext } from '@utilities/tests.configure';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCreatorComponent } from './template-creator.component';

describe('TemplateCreatorComponent', () => {
  setup();

  beforeEach(function(this: TestContext<TemplateCreatorComponent, TemplateCreatorComponent>) {
      this.create(TemplateCreatorComponent, TemplateCreatorComponent);
  });

  it('should be created', function(this: TestContext<TemplateCreatorComponent, TemplateCreatorComponent>) {
    expect(this.hostComponent).toBeTruthy();
  });
});
