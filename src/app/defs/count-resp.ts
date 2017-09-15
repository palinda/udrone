import {ResponseMsg} from '@defs/response-msg';

export class CountResp extends ResponseMsg {

    constructor(private _count: number) {
        super();
    }

    get count(): number {
    return this._count;
    }
}
