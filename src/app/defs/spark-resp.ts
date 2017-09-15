import {Entry} from '@defs/entry';
import {ResponseMsg} from '@defs/response-msg';

export class SparkResp extends ResponseMsg {
  constructor(private _data: Array<Entry>) {
    super();
  }

  get data(): Array<Entry> {
    return this._data;
  }
}
