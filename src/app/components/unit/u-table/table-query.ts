import { Filter } from '@defs/filter';
import { Sort } from '@defs/sort';
import { UMsg } from '@defs/umsg';
/**
 * Table Query request msg
 */
export class TableQuery extends UMsg {
    constructor(public limit: number, public offset: number, public sorts: Array<Sort>, public filters: Array<Filter>) {
        super();
    }

    public addSort(sort: Sort) {
        this.sorts.push(sort);
    }

    public addFilter(filter: Filter) {
        this.filters.push(filter);
    }
}
