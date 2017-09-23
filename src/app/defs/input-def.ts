export class InputDef {
    constructor(private _name: string, private _dataType: string, private _group: string, private _options: Object) {
    }

    public get name() {
        return this._name;
    }

    public get dataType() {
        return this._dataType;
    }

    public get group() {
        return this._group;
    }

    public get options() {
        return this._options;
    }
}
