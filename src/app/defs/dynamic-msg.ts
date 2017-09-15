import { Entry } from './entry';
import { UMsg } from './umsg';
export class DynamicMsg extends UMsg {

    constructor(...args: Entry[]) {
        super();
        args.forEach( (arg) => {
            this.setValue(arg.key, arg.value);
        });
    }
    public setValue(key: string, val: Object) {
        this[key] = val;
    }

    public getValue(key: string): Object {
        return this[key];
    }

    public forEach(callbackfn: (key: string, value: Object) => any): void {
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                callbackfn(key, this[key]);
            }
        }
    }
}
