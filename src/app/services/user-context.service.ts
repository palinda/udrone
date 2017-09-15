import { ThemeStoreService } from './theme-store.service';
import { Theme } from '@defs/theme';
import { PreferenceDef } from '@defs/preference-def';
import { DashboardContainerComponent } from '@components/container-templates/dashboard-container/dashboard-container.component';
import { CounterSparklineComponent } from '@components/widget-templates/counter-sparkline/counter-sparkline.component';
import { Size } from '@defs/size';
import { Entry } from '@defs/entry';
import { ComponentDef } from '@defs/component-def';
import { DynamicMsg } from '@defs/dynamic-msg';
import { UMap } from '@utilities/umap';
import { Injectable } from '@angular/core';
import { Query } from '@app/defs/query';

@Injectable()
export class UserContextService {

  containerComponantInsts: Array<ComponentDef> = [];
  userPreference: PreferenceDef;

  constructor(private _themeStore: ThemeStoreService) {
    this.userPreference = new PreferenceDef();
    this.loadProfile();
  }


  private loadProfile() {
    this.userPreference.theme = this._themeStore.supportedThemes[0];

    this.containerComponantInsts.push(this.createMockContainer('Business Dashboard', 'Business Dashboard', 'dx-icon-globe'));
    this.containerComponantInsts.push(this.createMockContainer('Compliance Dashboard', 'Compliance Dashboard', 'dx-icon-group'));
    this.containerComponantInsts.push(this.createMockContainer('පරිශීලක විමසුම', 'Normal Query', 'dx-icon-user'));
  }


  private createMockContainer(heading: string, shortname: string, icon: string) {
    const countQuery = new Query<DynamicMsg>('res/orderCount', new DynamicMsg());
    const sparkQuery = new Query<DynamicMsg>('res/orderCountHist', new DynamicMsg(new Entry('limit', 5)));

    const compDefList = [
        new ComponentDef(CounterSparklineComponent, new Size('2', '1'),
          new DynamicMsg(new Entry('heading', 'Order Count'), new Entry('countQuery', countQuery),
          new Entry('sparkQuery', sparkQuery), new Entry('id', 'test1'))),
          new ComponentDef(CounterSparklineComponent, new Size('2', '1'),
          new DynamicMsg(new Entry('heading', 'Trade Count'), new Entry('countQuery', countQuery),
          new Entry('sparkQuery', sparkQuery), new Entry('id', 'test2')))
      ];

      return new ComponentDef(DashboardContainerComponent, new Size('100', '100'),
      new DynamicMsg(new Entry('componentDefList', compDefList),
      new Entry('heading', heading), new Entry('shortname', shortname), new Entry('icon', icon), new Entry('id', 'cont_' + heading)));
  }

}
