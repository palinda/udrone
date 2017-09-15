/**
 * Table query response msg
 */
export class TableResponse {
    constructor(private total: number, private totalFilter: number, private data: Object[]) {
    }

    public get $total(): number {
        return this.total;
    }

    public get $totalFilter(): number {
        return this.totalFilter;
    }

    public get $data(): Object[] {
        return this.data;
    }
}
