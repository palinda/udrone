import * as Utils from '@utilities/utils';
import { TableQuery } from '@components/unit/u-table/table-query';
import { LogService } from '@services/log.service';
import { QueryTemplateComponent } from '@components/query-template.component';
import { DynamicMsg } from '@defs/dynamic-msg';
import { TrackType } from '@defs/track-type';
import { ColumnOptions } from '@defs/column-options';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TableOptions, UTableComponent } from '@components/unit/u-table/u-table.component';
import { Query } from '@defs/query';

@Component({
  selector: 'app-advance-query-table',
  templateUrl: './advance-query-table.component.html',
  styleUrls: ['./advance-query-table.component.scss']
})
export class AdvanceQueryTableComponent extends QueryTemplateComponent implements OnInit {

  static key = 'AdvanceQueryTableComponent';

  @TrackType(Array)
  @Input()  colOptions: Array<ColumnOptions>;

  @TrackType(Query)
  @Input() query: Query<TableQuery>;

  queryCopy: Query<TableQuery>;

  tableOptions: TableOptions;
  @ViewChild(UTableComponent) utable: UTableComponent;

  constructor(logService: LogService) {
    super(logService);
  }

  ngOnInit() {
    this.queryCopy = new Query<TableQuery>(this.query.path, Utils.deepCopy(this.query.params));
    this.tableOptions = new TableOptions(this.colOptions, this.queryCopy);
  }

  onFilterQuery(queryStr: string) {
    this.queryCopy.params.filterString = queryStr;
    this.utable.refresh();
  }

}
