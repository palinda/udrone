import { TableQuery } from '@components/unit/u-table/table-query';
import { LogService } from '@services/log.service';
import { QueryTemplateComponent } from '@components/query-template.component';
import { DynamicMsg } from '@defs/dynamic-msg';
import { TrackType } from '@defs/track-type';
import { ColumnOptions } from '@defs/column-options';
import { Component, OnInit, Input } from '@angular/core';
import { TableOptions } from '@components/unit/u-table/u-table.component';
import { Query } from '@defs/query';

@Component({
  selector: 'app-advance-query-table',
  templateUrl: './advance-query-table.component.html',
  styleUrls: ['./advance-query-table.component.scss']
})
export class AdvanceQueryTableComponent extends QueryTemplateComponent implements OnInit {

  @TrackType(Array)
  @Input()  colOptions: Array<ColumnOptions>;

  @TrackType(Query)
  @Input() query: Query<TableQuery>;

  tableOptions: TableOptions;

  constructor(logService: LogService) {
    super(logService);
  }

  ngOnInit() {
    this.tableOptions = new TableOptions(this.colOptions, this.query);
  }

}
