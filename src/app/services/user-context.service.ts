import { PermissionManagerService } from './permission-manager.service';
import { UserInfo } from '@defs/user-info';
import { Decoder } from './decoder';
import * as Utils from '@utilities/utils';
import * as Constants from '@defs/constants';
import { GLOBAL_REPO_UPLOAD_PATH, WINDOW_TEMPLATE_TAG, WIDGET_TEMPLATE_TAG } from '@defs/constants';
import { element } from 'protractor';
import { RequestOptions, Headers } from '@angular/http';
import { HttpService } from '@services/http.service';
import { LogService } from './log.service';
import { IServiceQuery } from '@services/service-query.interface';
import { SERVICE_QUERY } from './service-query.provider';
import { ThemeStoreService } from './theme-store.service';
import { Theme } from '@defs/theme';
import { PreferenceDef } from '@defs/preference-def';
import { WindowComponent } from '@components/window/window.component';
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
  windowInsts: Array<ComponentDef> = [];
  windowTemplateInstsMap: UMap<string, ComponentDef> = new UMap<string, ComponentDef>();
  userPreference: PreferenceDef;
  userInfo: UserInfo;

  constructor(private _themeStore: ThemeStoreService, @Inject(SERVICE_QUERY) private _serviceQuery: IServiceQuery,
  private _logService: LogService, private _permissionService: PermissionManagerService) {
    this.userPreference = new PreferenceDef();
    this.userInfo = new UserInfo('Test User', 'admin');
    this.loadProfile();
  }


  private loadProfile() {
    this.userPreference.theme = this._themeStore.supportedThemes[0];

    this._serviceQuery.query(new Query<RepoDef>(Constants.GLOBAL_REPO_DOWNLOAD_PATH, undefined))
    .map(res => Decoder.decode(RepoDef, res as Object[])).subscribe(
        (data: RepoDef) => {

          if (!Utils.isUndefined(data.widgetTemplate)) {
            data.widgetTemplate.forEach(el => {
              this.addWidgetDef(Decoder.decode(ComponentDef, el));
            });
          }
          if (!Utils.isUndefined(data.windowTemplate)) {
            data.windowTemplate.forEach(el => {
              this.addWindowDef(Decoder.decode(ComponentDef, el));
            });
          }
        },
        (err) => {
          this._logService.printError('Global repo file load fail');
        }
    );
  }

  public addWidgetTemplate(widgetDef: ComponentDef, cb: (data: Object, err: Error) => void) {

    const copy = widgetDef;
    this._serviceQuery.query(new Query<ComponentDef>(Constants.GLOBAL_REPO_UPLOAD_PATH + '/' + Constants.WIDGET_TEMPLATE_TAG, copy))
    .subscribe(
      (resp) => {
        this.addWidgetDef(widgetDef);
        cb(widgetDef, undefined);
      },
      (err) => {
        cb(undefined, err);
      }
    );
  }

  public addWindowTemplate(windowDef: ComponentDef, cb: (data: Object, err: Error) => void) {
    const copy = windowDef;
    this._serviceQuery.query(new Query<ComponentDef>(Constants.GLOBAL_REPO_UPLOAD_PATH + '/' + Constants.WINDOW_TEMPLATE_TAG, copy))
    .subscribe(
      (resp) => {
        this.addWindowDef(windowDef);
        cb(windowDef, undefined);
      },
      (err) => {
        cb(undefined, err);
      }
    );
  }


  public findWidgetDef(id: string) {
    return this.widgetTemplateInstsMap.get(id);
  }

  public findWindowDef(id: string) {
    return this.windowTemplateInstsMap.get(id);
  }

  public addWidgetDef(def: ComponentDef) {
    if (!this.findWidgetDef(def.id)) {
      this.widgetTemplateInsts.push(def);
    }
    this.widgetTemplateInstsMap.put(def.id, def);
  }

  public addWindowDef(def: ComponentDef) {
    if (!this.findWindowDef(def.id)) {
      this.windowInsts.push(def);
    }
    this.windowTemplateInstsMap.put(def.id, def);
  }
}
