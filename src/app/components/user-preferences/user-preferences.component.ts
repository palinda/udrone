import { UserContextService } from './../../services/user-context.service';
import { PreferenceDef } from '@defs/preference-def';
import { ThemeStoreService } from './../../services/theme-store.service';
import { Component, OnInit } from '@angular/core';
import DxThemes from 'devextreme/ui/themes';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.scss']
})
export class UserPreferencesComponent implements OnInit {

  themeStore: ThemeStoreService;
  preference: PreferenceDef;

  tabs = [
    {'title': 'General'},
    {'title': 'Containers'}
  ];

  constructor(_themeStore: ThemeStoreService, _userContext: UserContextService) {
    this.themeStore = _themeStore;
    this.preference = _userContext.userPreference;
  }

  ngOnInit() {
  }

  public onThemeChanged (event) {
    DxThemes.current(event.value);
  }

}
