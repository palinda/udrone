import { RefreshService } from '@services/refresh.service';
import { USparklineComponent } from '@components/unit/u-sparkline/u-sparkline.component';
import { BgCounterComponent } from '@components/unit/bg-counter/bg-counter.component';
import { UTextComponent } from '@components/unit/u-text/u-text.component';
import { CounterSparklineComponent } from './counter-sparkline.component';
import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { TemplateCreatorComponent } from '@components/template-creator/template-creator.component';
import { setup } from '@app/utilities/tests.configure';
import { TestContext } from '@utilities/tests.configure';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('CounterSparklineComponent', () => {
  setup();

  beforeEach(function(this: TestContext<CounterSparklineComponent, CounterSparklineComponent>) {
      this.create(CounterSparklineComponent, CounterSparklineComponent, [ RefreshService ],
        [ DclWrapperComponent, UTextComponent, BgCounterComponent, USparklineComponent]);
  });

  it('should be created', function(this: TestContext<CounterSparklineComponent, CounterSparklineComponent>) {
    expect(this.hostComponent).toBeTruthy();
  });
});
