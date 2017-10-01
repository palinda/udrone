/**
 * Table query response msg
 */
export class TableResponse {
    constructor(public total: number, public totalFilter: number, public data: Object[]) {
    }

}
