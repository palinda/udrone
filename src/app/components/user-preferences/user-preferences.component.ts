import { ComponentStore } from './../../services/component-store';
import { DynamicMsg } from '@defs/dynamic-msg';
import { Size } from '@app/defs/size';
import { ComponentDef } from './../../defs/component-def';
import { QueryTemplateComponent } from '@components/query-template.component';
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

  themeStore: ThemeStoreService;
  userContext: UserContextService;
  widgetTemplateDefs: Type<Component>[];
  queryTemplateDefs: Type<Component>[];
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
    this.queryTemplateDefs = [];
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

    this._componentStore.allComponents.forEach( val => {
        if (val['__proto__'].name === 'WidgetTemplateComponent') {
          this.widgetTemplateDefs.push(val);
        } else if (val['__proto__'].name === 'QueryTemplateComponent') {
          this.queryTemplateDefs.push(val);
        } else if (val['__proto__'].name === 'ContainerTemplateComponent') {
          this.containerTemplateDefs.push(val);
        }
      });
  }

  ngOnDestroy() {

  }

  widgetSave(def: ComponentDef) {
    cmpScope.userContext.addWidgetTemplate(def, (data, err) => {
      if (Utils.isUndefined(err)) {
        Utils.notifyPop('Successfully added widget template', 'success');
      } else {
        Utils.notifyPop('Failed to add widget template: Error: ' + err, 'error');
      }
    });
  }

  containerSave(def: ComponentDef) {
    cmpScope.userContext.addContainerTemplate(def, (data, err) => {
      if (Utils.isUndefined(err)) {
        Utils.notifyPop('Successfully added container template', 'success');
      } else {
        Utils.notifyPop('Failed to add container template: Error: ' + err, 'error');
      }
    });
  }

}
