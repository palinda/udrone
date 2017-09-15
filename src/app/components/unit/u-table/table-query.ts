import { Filter } from '@defs/filter';
import { Sort } from '@defs/sort';
import { UMsg } from '@defs/umsg';
/**
 * Table Query request msg
 */
export class TableQuery extends UMsg {
    constructor(private limit: number, private offset: number, private sorts: Array<Sort>, private filters: Array<Filter>) {
        super();
    }

    public get $limit(): number{
        return this.limit;
    }

    public get $offset(): number {
        return this.offset;
    }

    public get $sorts(): Array<Sort> {
        return this.sorts;
    }

    public get $filters(): Array<Filter> {
        return this.filters;
    }

    public set $limit(limit: number) {
        this.limit = limit;
    }

    public set $offset(offset: number) {
        this.offset = offset;
    }

    public addSort(sort: Sort) {
        this.sorts.push(sort);
    }

    public addFilter(filter: Filter) {
        this.filters.push(filter);
    }
}
