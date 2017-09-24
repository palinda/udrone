import { TrackType } from '@app/defs/track-type';
import { UMsg } from './umsg';

export class Query <T extends UMsg> {

    @TrackType(String)
    path: string;

    @TrackType(Object)
    params: T;

    constructor(_path: string, _params: T) {
        this.path = _path;
        this.params = _params;
    }

}
