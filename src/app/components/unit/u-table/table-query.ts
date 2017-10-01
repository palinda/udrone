import { Filter } from '@defs/filter';
import { Sort } from '@defs/sort';
import { UMsg } from '@defs/umsg';
/**
 * Table Query request msg
 */
export class TableQuery extends UMsg {
    constructor(public limit: number, public offset: number, public sorts: Array<Sort>, public filters: Array<Filter>,
        public filterString: string) {
        super();
    }

    public static addSort(query: TableQuery, sort: Sort) {
        if (query.sorts  === undefined) {
            query.sorts = [];
        } else {
            const index = query.sorts.findIndex(item => item.field === sort.field);
            if (index >= 0) {
                query.sorts.splice(index, 1);
            }
        }
        query.sorts.push(sort);
    }

    public static addFilter(query: TableQuery, filter: Filter) {
        if (query.filters  === undefined) {
            query.filters = [];
        }
        query.filters.push(filter);
    }
}
