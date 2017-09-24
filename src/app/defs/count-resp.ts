import {ResponseMsg} from '@defs/response-msg';

export class CountResp extends ResponseMsg {

    count: number;
    constructor(count: number) {
        super();
        this.count = count;
    }
}
