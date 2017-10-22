import { RefreshService } from '@services/refresh.service';
import { USplineComponent } from '@components/unit/u-spline/u-spline.component';
import { RealtimeSplineComponent } from './realtime-spline.component';

import { UTextComponent } from '@components/unit/u-text/u-text.component';
import { BgCounterComponent } from '@components/unit/bg-counter/bg-counter.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { TemplateCreatorComponent } from '@components/template-creator/template-creator.component';
import { setup } from '@app/utilities/tests.configure.spec';
import { TestContext } from '@utilities/tests.configure.spec';

describe('RealtimeSplineComponent', () => {
  setup();

  beforeEach(function(this: TestContext<RealtimeSplineComponent, RealtimeSplineComponent>) {
      this.create(RealtimeSplineComponent, RealtimeSplineComponent, [ RefreshService ], [ USplineComponent ]);
  });

  it('should be created', function(this: TestContext<RealtimeSplineComponent, RealtimeSplineComponent>) {
    expect(this.hostComponent).toBeTruthy();
  });
});

