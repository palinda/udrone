import { Theme } from '@defs/theme';
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeStoreService {

  private _supportedThemes: Array<Theme> = [];

  constructor() {
    this._supportedThemes =
      [ new Theme('generic.light', 'Light'),
        new Theme('generic.dark', 'Dark'),
        new Theme('android5.light', 'Android5 Light'),
        new Theme('ios7.default', 'Ios7 Default'),
        new Theme('win10.black', 'Win10 Black'),
        new Theme('win10.white', 'Win10 White'),
        new Theme('generic.light.compact', 'Light Compact'),
        new Theme('generic.dark.compact', 'Dark Compact'),
        new Theme('generic.contrast', 'Contrast'),
        new Theme('generic.contrast.compact', 'Contrast Compact')
      ];
  }


  public get supportedThemes(): Array<Theme>  {
    return this._supportedThemes;
  }

  public set supportedThemes(value: Array<Theme> ) {
    this._supportedThemes = value;
  }

}
