import { InputDef } from './input-def';
export class InputDefGroup {
    constructor(private _group: string, private _inputDefList: InputDef[]) {
    }

    public get group() {
        return this._group;
    }

    public get inputDefList() {
        return this._inputDefList;
    }
}
