import { UGuageComponent } from '@components/unit/u-guage/u-guage.component';
import { MockIntervalService } from '@mock/interval-service.mock';
import { TpDepModule } from '@modules/tp-dep.module';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let mockIntervalService: MockIntervalService;

  beforeEach(async(() => {

    mockIntervalService = new MockIntervalService();

        TestBed.overrideComponent( AppComponent,
          {
            set : {
              providers: [ MockIntervalService ]
          }
        });

    TestBed.configureTestingModule({
      imports: [ TpDepModule ],
      declarations: [
        AppComponent,
        UGuageComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
