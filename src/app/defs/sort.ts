export class Sort {
    constructor(private field: string, private isDesc: boolean) {
    }

    public get $field() {
        return this.field;
    }

    public get $isDesc() {
        return this.isDesc;
    }
}
