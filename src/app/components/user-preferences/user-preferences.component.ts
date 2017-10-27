import { ContainerTemplateComponent } from '@components/container-template.component';
import { ComponentStore } from './../../services/component-store';
import { DynamicMsg } from '@defs/dynamic-msg';
import { Size } from '@app/defs/size';
import { ComponentDef } from './../../defs/component-def';
import { WidgetTemplateComponent } from '@components/widget-template.component';
import { CounterSparklineComponent} from '@components/widget-templates/counter-sparkline/counter-sparkline.component';
import { UserContextService } from '@services/user-context.service';
import { PreferenceDef } from '@defs/preference-def';
import { ThemeStoreService } from '@services/theme-store.service';
import { Component, OnInit, Type, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import DxThemes from 'devextreme/ui/themes';
import {} from 'reflect-metadata';
import { InputDef } from '@defs/input-def';
import { InputDefGroup } from '@defs/input-def-group';
import * as Utils from '@utilities/utils';

let cmpScope;

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.scss']
})

export class UserPreferencesComponent implements OnInit, OnDestroy {

  static key = 'UserPreferencesComponent';

  themeStore: ThemeStoreService;
  userContext: UserContextService;
  widgetTemplateDefs: Type<Component>[];
  containerTemplateDefs: Type<Component>[];

  selectedIndex = 0;

  tabs = [
    {'title': 'General'},
    {'title': 'Widget Templates'},
    {'title': 'Query Templates'},
    {'title': 'Containers'}
  ];

  constructor(_themeStore: ThemeStoreService, _userContext: UserContextService, private _componentStore: ComponentStore) {
    this.themeStore = _themeStore;
    this.userContext = _userContext;
    this.widgetTemplateDefs = [];
    this.containerTemplateDefs = [];
    this.loadComponents();
    cmpScope = this;
  }

  ngOnInit() {
  }

  public onThemeChanged (event) {
    DxThemes.current(event.value.id);
  }

  loadComponents() {

    console.log(JSON.stringify(this._componentStore.componentsMap));
    this._componentStore.componentsMap.forEach( (key, val) => {
      console.log(val['type'], val['key']);
        if (val['type'] === 'WidgetTemplateComponent') {
          this.widgetTemplateDefs.push(val);
        } else if (val['type'] === 'ContainerTemplateComponent') {
          this.containerTemplateDefs.push(val);
        }
      });
  }

  ngOnDestroy() {

  }

  widgetSave(def: ComponentDef) {
    if (Utils.isUndefined(def)) {
      return;
    }
    cmpScope.userContext.addWidgetTemplate(def, (data, err) => {
      if (Utils.isUndefined(err)) {
        Utils.notifyPop('Successfully added widget template', 'success');
      } else {
        Utils.notifyPop('Failed to add widget template: Error: ' + err, 'error');
      }
    });
  }

  containerSave(def: ComponentDef) {

    if (Utils.isUndefined(def)) {
      return;
    }

    cmpScope.userContext.addContainerTemplate(def, (data, err) => {
      if (Utils.isUndefined(err)) {
        Utils.notifyPop('Successfully added container template', 'success');
      } else {
        Utils.notifyPop('Failed to add container template: Error: ' + err, 'error');
      }
    });
  }

  querySave(def: ComponentDef) {
    cmpScope.userContext.addQueryTemplate(def, (data, err) => {
      if (Utils.isUndefined(err)) {
        Utils.notifyPop('Successfully added query template', 'success');
      } else {
        Utils.notifyPop('Failed to add query template: Error: ' + err, 'error');
      }
    });
  }

}
