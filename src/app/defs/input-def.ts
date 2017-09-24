export class InputDef {
    private _name: string;
    constructor(private _leafName: string, private _dataType: string, private _group: string, private _options: Object) {
        if (this._group !== undefined) {
            this._name = this._group + '.' + this._leafName;
        } else {
            this._name = this._leafName;
        }
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

    public get leafName() {
        return this._leafName;
    }

    public get options() {
        return this._options;
    }
}
