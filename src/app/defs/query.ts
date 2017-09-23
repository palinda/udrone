import { TrackType } from '@app/defs/track-type';
import { UMsg } from './umsg';

export class Query <T extends UMsg> {

    @TrackType(String)
    private _path: string;

    @TrackType(Object)
    private _params: T;

    constructor(_path: string, _params: T) {
        this._path = _path;
        this._params = _params;
    }

    public get path(): string {
        return this._path;
    }

    public get params(): T {
        return this._params;
    }
}
