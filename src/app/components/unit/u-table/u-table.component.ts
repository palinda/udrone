import { DxDataGridComponent } from 'devextreme-angular';
import { Sort } from '@defs/sort';
import { UMsg } from '@defs/umsg';
import { Query } from '@defs/query';
import { ColumnOptions } from '@defs/column-options';
import { IServiceQuery } from '@services/service-query.interface';
import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { SERVICE_QUERY } from '@services/service-query.provider';
import { Filter } from '@defs/filter';
import { TableQuery } from './table-query';
import { TableResponse } from './table-response';

/**
 * Table input options
 */
export class TableOptions {
    constructor(private height: string, private columnOptions: Array<ColumnOptions>, private query: Query<TableQuery>) {
    }

    /**
     * Get function for column options
     */
    public get $columnOptions(): Array<ColumnOptions> {
        return this.columnOptions;
    }

    /**
     * Get table data query
     */
    public get $query() {
        return this.query;
    }

    public get $height() {
        return this.height;
    }

    public set $height(height: string) {
        this.height = height;
    }
}

/**
 * Temparory variable to store component scope
 */
let cmpScope;

/**
 * Ajax support table model
 */
@Component({
  selector: 'app-u-table',
  templateUrl: './u-table.component.html',
  styleUrls: ['./u-table.component.scss']
})
export class UTableComponent implements OnInit {

    @Input() tableOptions: TableOptions = new TableOptions('100%', [], undefined);

    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

    dataSource: any = {};

    constructor(@Inject(SERVICE_QUERY) private serviceQuery: IServiceQuery) {

        this.dataSource.store = new CustomStore({
            load: function (loadOptions) {

                const query = cmpScope.tableOptions.$query;
                const params: TableQuery = query.params;
                params.limit = loadOptions.take;
                params.offset = loadOptions.skip;

                if (loadOptions.sort) {
                    TableQuery.addSort(params, new Sort(loadOptions.sort[0].selector, loadOptions.sort[0].desc));
                }

                return serviceQuery.query<TableResponse>(query)
                    .toPromise()
                    .then(response => {
                        console.log(response);
                        return {
                            data: response.data,
                            totalCount: response.total
                        };
                    })
                    .catch(error => {
                        throw new Error('Data Loading Error');
                    }
                );
            }
        });
    }

    ngOnInit() {
        cmpScope = this;
    }

    refresh() {
        this.dataGrid.instance.refresh();
    }
}
