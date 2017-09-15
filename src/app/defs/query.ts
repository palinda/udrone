import { UMsg } from './umsg';

export class Query <T extends UMsg> {
    constructor(private _path: string, private _params: T) {
    }

    public get path(): string {
        return this._path;
    }

    public get params(): T {
        return this._params;
    }
}
