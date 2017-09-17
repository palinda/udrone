import {
  CounterSparklineComponent,
  CounterSparklineTemplateDef
} from '@components/widget-templates/counter-sparkline/counter-sparkline.component';
import { WidgetTemplateDef } from './../query-template.component';
import { UserContextService } from '@services/user-context.service';
import { PreferenceDef } from '@defs/preference-def';
import { ThemeStoreService } from '@services/theme-store.service';
import { Component, OnInit, ComponentFactoryResolver, Type } from '@angular/core';
import DxThemes from 'devextreme/ui/themes';
import {} from 'reflect-metadata';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.scss']
})
export class UserPreferencesComponent implements OnInit {

  themeStore: ThemeStoreService;
  userContext: UserContextService;
  widgetTemplateDefs: Type<WidgetTemplateDef>[];

  selectedIndex = 0;

  tabs = [
    {'title': 'General'},
    {'title': 'Widget Templates'},
    {'title': 'Query Templates'},
    {'title': 'Containers'}
  ];

  constructor(_themeStore: ThemeStoreService, _userContext: UserContextService, private _resolver: ComponentFactoryResolver) {
    this.themeStore = _themeStore;
    this.userContext = _userContext;
    const x = Reflect.getMetadata('annotations', CounterSparklineComponent);
    const y = Reflect.getMetadata('parameters', CounterSparklineComponent);
    const z = Reflect.getMetadata('propMetadata', CounterSparklineComponent);
    const info = Reflect.getMetadata('design:type', new CounterSparklineTemplateDef(), 'countQuery');
  }

  ngOnInit() {
  }

  public onThemeChanged (event) {
    DxThemes.current(event.value.id);
  }

}
