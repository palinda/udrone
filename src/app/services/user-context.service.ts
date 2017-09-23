import * as Utils from '@utilities/utils';
import * as Constants from '@defs/constants';
import { GLOBAL_REPO_UPLOAD_PATH, CONTAINER_TEMPLATE_TAG, WIDGET_TEMPLATE_TAG, QUERY_TEMPLATE_TAG } from './../defs/constants';
import { element } from 'protractor';
import { RequestOptions, Headers } from '@angular/http';
import { HttpService } from '@services/http.service';
import { LogService } from './log.service';
import { IServiceQuery } from '@services/service-query.interface';
import { SERVICE_QUERY } from './service-query.provider';
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
import { Injectable, Inject, ComponentFactoryResolver, Type, Component } from '@angular/core';
import { Query } from '@defs/query';
import { RepoDef } from '@defs/repo-def';

@Injectable()
export class UserContextService {

  allComponents: Array<Type<Component>>;
  componentsMap: UMap<string, Type<Component>>;
  widgetTemplateInsts: Array<ComponentDef> = [];
  containerComponantInsts: Array<ComponentDef> = [];
  queryComponantInsts: Array<ComponentDef> = [];
  userPreference: PreferenceDef;

  constructor(private _themeStore: ThemeStoreService, @Inject(SERVICE_QUERY) private _serviceQuery: IServiceQuery,
  private _logService: LogService, private _httpService: HttpService, private _resolver: ComponentFactoryResolver) {
    this.userPreference = new PreferenceDef();
    this.componentsMap = new UMap<string, Type<Component>>();
    this.allComponents = Array.from<Type<Component>>(this._resolver['_factories'].keys());
    this.allComponents.forEach( element => {
      this.componentsMap.put(element.name, element);
    });
    this.loadProfile();
  }


  private loadProfile() {
    this.userPreference.theme = this._themeStore.supportedThemes[0];

    this._serviceQuery.query(new Query<RepoDef>(Constants.GLOBAL_REPO_DOWNLOAD_PATH, undefined)).subscribe(
        (data: RepoDef) => {
          this.loadTemplateForTag(this.widgetTemplateInsts, data[Constants.WIDGET_TEMPLATE_TAG]);
          this.loadTemplateForTag(this.queryComponantInsts, data[Constants.QUERY_TEMPLATE_TAG]);
          this.loadTemplateForTag(this.containerComponantInsts, data[Constants.CONTAINER_TEMPLATE_TAG]);
        },
        (err) => {
          this._logService.printError('Global repo file load fail');
        }
    );

    // this.containerComponantInsts.push(this.createMockContainer('Business Dashboard', 'Business Dashboard', 'dx-icon-globe'));
    // this.containerComponantInsts.push(this.createMockContainer('Compliance Dashboard', 'Compliance Dashboard', 'dx-icon-group'));
    // this.containerComponantInsts.push(this.createMockContainer('පරිශීලක විමසුම', 'Normal Query', 'dx-icon-user'));
  }

  private loadTemplateForTag(dataStore: Array<ComponentDef>, data: Object) {
    if (Utils.isUndefined(data)) {
      return;
    }

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        dataStore.push(this.decodeToComponent(data[key]));
      }
    }
  }

  public decodeToComponent(component: ComponentDef) {
    const compName = this.componentsMap.get(component['_name']);
    if (compName === undefined) {
      this._logService.printError('Unknown component found in repo file:', component.name);
      return undefined;
    }

    component.type = compName;
    return component;
  }

  public addContainerTemplate(containerDef: ComponentDef, cb: (data: Object, err: Error) => void) {
    const copy = containerDef;
    this._serviceQuery.query(new Query<ComponentDef>(Constants.GLOBAL_REPO_UPLOAD_PATH + '/' + Constants.CONTAINER_TEMPLATE_TAG, copy))
    .subscribe(
      (resp) => {
        this.containerComponantInsts.push(containerDef);
        cb(containerDef, undefined);
      },
      (err) => {
        cb(undefined, err);
      }
    );
  }

  public addWidgetTemplate(widgetDef: ComponentDef, cb: (data: Object, err: Error) => void) {
    const copy = widgetDef;
    this._serviceQuery.query(new Query<ComponentDef>(Constants.GLOBAL_REPO_UPLOAD_PATH + '/' + Constants.WIDGET_TEMPLATE_TAG, copy))
    .subscribe(
      (resp) => {
        this.widgetTemplateInsts.push(widgetDef);
        cb(widgetDef, undefined);
      },
      (err) => {
        cb(undefined, err);
      }
    );
  }


  // private createMockContainer(heading: string, shortname: string, icon: string) {
  //   const countQuery = new Query<DynamicMsg>('res/orderCount', new DynamicMsg());
  //   const sparkQuery = new Query<DynamicMsg>('res/orderCountHist', new DynamicMsg(new Entry('limit', 5)));

  //   const compDefList = [
  //       new ComponentDef('test1', CounterSparklineComponent, new Size('2', '1'),
  //         new DynamicMsg(new Entry('heading', 'Order Count'), new Entry('countQuery', countQuery),
  //         new Entry('sparkQuery', sparkQuery), new Entry('id', 'test1'))),
  //         new ComponentDef('test2', CounterSparklineComponent, new Size('2', '1'),
  //         new DynamicMsg(new Entry('heading', 'Trade Count'), new Entry('countQuery', countQuery),
  //         new Entry('sparkQuery', sparkQuery), new Entry('id', 'test2')))
  //     ];

  //     return new ComponentDef('cont_' + heading, DashboardContainerComponent, new Size('100', '100'),
  //     new DynamicMsg(new Entry('componentDefList', compDefList),
  //     new Entry('heading', heading), new Entry('shortname', shortname), new Entry('icon', icon), new Entry('id', 'cont_' + heading)));
  // }

}
