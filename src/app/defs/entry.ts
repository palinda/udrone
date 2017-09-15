export class Entry {

  constructor(private _key: string, private _value: Object) {
  }

  get key(): string {
    return this._key;
  }

  get value(): Object {
    return this._value;
  }
}
