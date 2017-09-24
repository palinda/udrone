import { Decoder } from './decoder';
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
import { Injectable, Inject, Type, Component } from '@angular/core';
import { Query } from '@defs/query';
import { RepoDef } from '@defs/repo-def';

@Injectable()
export class UserContextService {

  widgetTemplateInsts: Array<ComponentDef> = [];
  widgetTemplateInstsMap: UMap<string, ComponentDef> = new UMap<string, ComponentDef>();
  containerComponantInsts: Array<ComponentDef> = [];
  queryComponantInsts: Array<ComponentDef> = [];
  userPreference: PreferenceDef;

  constructor(private _themeStore: ThemeStoreService, @Inject(SERVICE_QUERY) private _serviceQuery: IServiceQuery,
  private _logService: LogService, private _httpService: HttpService) {
    this.userPreference = new PreferenceDef();
    this.loadProfile();
  }


  private loadProfile() {
    this.userPreference.theme = this._themeStore.supportedThemes[0];

    this._serviceQuery.query(new Query<RepoDef>(Constants.GLOBAL_REPO_DOWNLOAD_PATH, undefined))
    .map(res => Decoder.decode(RepoDef, res as Object[])).subscribe(
        (data: RepoDef) => {
          data.widgetTemplate.forEach(el => {
            this.widgetTemplateInsts.push(Decoder.decode(ComponentDef, el));
            this.widgetTemplateInstsMap.put(el.id, el);
          });
          // this.widgetTemplateInsts.push.apply(this.widgetTemplateInsts, data.widgetTemplate);
          this.queryComponantInsts.push.apply(this.queryComponantInsts, data.queryTemplate);
          // this.containerComponantInsts.push.apply(this.containerComponantInsts, data.containerTemplate);
          data.containerTemplate.forEach(el => {
            this.containerComponantInsts.push(Decoder.decode(ComponentDef, el));
          });
        },
        (err) => {
          this._logService.printError('Global repo file load fail');
        }
    );
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

  public findWidgetDef(id: string) {
    return this.widgetTemplateInstsMap.get(id);
  }
}
