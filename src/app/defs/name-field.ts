import { UMsg } from '@defs/umsg';
export class NameField extends UMsg {

    constructor(private key: string, private name: string) {
        super();
    }

    public get $key(): string {
        return this.key;
    }

    public get $name(): string {
        return this.name;
    }
}
