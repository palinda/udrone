import { FocusDirective } from '@directives/focus.directive';
import { SearchBoxComponent } from '@components/unit/search-box/search-box.component';
import { UTableComponent } from '@components/unit/u-table/u-table.component';
import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { TestContext } from '@utilities/tests.configure.spec';
import { setup } from '@app/utilities/tests.configure.spec';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceQueryTableComponent } from './advance-query-table.component';

describe('AdvanceQueryTableComponent', () => {

    setup();

    beforeEach(function(this: TestContext<AdvanceQueryTableComponent, AdvanceQueryTableComponent>) {
      this.create(AdvanceQueryTableComponent, AdvanceQueryTableComponent, [],
        [ DclWrapperComponent, UTableComponent, SearchBoxComponent, FocusDirective ]);
    });

    it('should be created', function(this: TestContext<AdvanceQueryTableComponent, AdvanceQueryTableComponent>) {
      expect(this.hostComponent).toBeTruthy();
    });
  });
