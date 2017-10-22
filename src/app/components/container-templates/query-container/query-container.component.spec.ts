import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { TestContext, setup } from '@utilities/tests.configure.spec';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryContainerComponent } from './query-container.component';

describe('QueryContainerComponent', () => {

    setup();

    beforeEach(function(this: TestContext<QueryContainerComponent, QueryContainerComponent>) {
      this.create(QueryContainerComponent, QueryContainerComponent, [], [ DclWrapperComponent ]);
    });

    it('should be created', function(this: TestContext<QueryContainerComponent, QueryContainerComponent>) {
      expect(this.hostComponent).toBeTruthy();
    });
  });
