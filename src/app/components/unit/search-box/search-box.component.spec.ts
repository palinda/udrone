import { FocusDirective } from '@directives/focus.directive';
import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from './search-box.component';
import { setup } from '@app/utilities/tests.configure';
import { TestContext } from '@utilities/tests.configure';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('SearchBoxComponent', () => {
  setup();

  beforeEach(function(this: TestContext<SearchBoxComponent, SearchBoxComponent>) {
      this.create(SearchBoxComponent, SearchBoxComponent, [], [ FocusDirective ]);
  });

  it('should be created', function(this: TestContext<SearchBoxComponent, SearchBoxComponent>) {
    expect(this.hostComponent).toBeTruthy();
  });
});
