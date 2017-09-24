import {Entry} from '@defs/entry';
import {ResponseMsg} from '@defs/response-msg';

export class SparkResp extends ResponseMsg {

  data: Array<Entry>;
  constructor(data: Array<Entry>) {
    super();
    this.data = data;
  }
}
