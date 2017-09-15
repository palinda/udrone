import { Operators } from '@defs/operators.enum';

export class Filter {
    constructor(private key: String, private value: Object, private operator: Operators) {
    }

    public get $key() {
        return this.key;
    }

    public get $value() {
        return this.value;
    }

    public get $operator() {
        return this.operator;
    }
}
