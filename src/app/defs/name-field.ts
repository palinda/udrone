import { UMsg } from '@defs/umsg';
export class NameField extends UMsg {

    key: string;
    name: string;

    constructor(key: string, name: string) {
        super();
        this.key = key;
        this.name = name;
    }
}
