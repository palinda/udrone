export class Action {

  constructor(private _name: string, private _isDefualt: boolean, private _cb: (action) => any, private _type: string,
    private _closeOnSelect: boolean) {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get isDefualt(): boolean {
    return this._isDefualt;
  }

  get closeOnSelect(): boolean {
    return this._closeOnSelect;
  }

  set isDefualt(value: boolean) {
    this._isDefualt = value;
  }

  set closeOnSelect(value: boolean) {
    this._closeOnSelect = value;
  }

  get cb(): (action) => any {
    return this._cb;
  }

  set cb(value: (action) => any) {
    this._cb = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}
