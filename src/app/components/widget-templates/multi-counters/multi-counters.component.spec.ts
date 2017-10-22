import { RefreshService } from '@services/refresh.service';
import { UTextComponent } from '@components/unit/u-text/u-text.component';
import { BgCounterComponent } from '@components/unit/bg-counter/bg-counter.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCountersComponent } from './multi-counters.component';
import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { TemplateCreatorComponent } from '@components/template-creator/template-creator.component';
import { setup } from '@app/utilities/tests.configure';
import { TestContext } from '@utilities/tests.configure';

describe('MultiCountersComponent', () => {
  setup();

  beforeEach(function(this: TestContext<MultiCountersComponent, MultiCountersComponent>) {
      this.create(MultiCountersComponent, MultiCountersComponent,
        [ RefreshService ],
        [ DclWrapperComponent, BgCounterComponent, UTextComponent]);
  });

  it('should be created', function(this: TestContext<MultiCountersComponent, MultiCountersComponent>) {
    expect(this.hostComponent).toBeTruthy();
  });
});

