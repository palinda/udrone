import { Theme } from './theme';

export class PreferenceDef {
    private _theme: Theme;

    public get theme() {
        return this._theme;
    }

    public set theme(_theme: Theme) {
        this._theme = _theme;
    }
}
