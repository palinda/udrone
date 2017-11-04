import { WidgetTemplateComponent } from '@components/widget-template.component';
import * as Utils from '@utilities/utils';
import { TableQuery } from '@components/unit/u-table/table-query';
import { LogService } from '@services/log.service';
import { DynamicMsg } from '@defs/dynamic-msg';
import { TrackType } from '@defs/track-type';
import { ColumnOptions } from '@defs/column-options';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TableOptions, UTableComponent } from '@components/unit/u-table/u-table.component';
import { Query } from '@defs/query';
import { Size } from '@app/defs/size';
import { ResizeService } from '@app/services/resize.service';

@Component({
  selector: 'app-advance-query-table',
  templateUrl: './advance-query-table.component.html',
  styleUrls: ['./advance-query-table.component.scss']
})
export class AdvanceQueryTableComponent extends WidgetTemplateComponent implements OnInit {

  static key = 'AdvanceQueryTableComponent';

  @TrackType(Array)
  @Input()  colOptions: Array<ColumnOptions>;

  @TrackType(Query)
  @Input() query: Query<TableQuery>;

  queryCopy: Query<TableQuery>;

  tableOptions: TableOptions;
  @ViewChild(UTableComponent) utable: UTableComponent;

  constructor(logService: LogService, resizeService: ResizeService) {
    super(logService, resizeService);
  }

  ngOnInit() {
    this.queryCopy = new Query<TableQuery>(this.query.path, Utils.deepCopy(this.query.params));
    this.tableOptions = new TableOptions(this.componentDef.size.toPixel(100, 100).height, this.colOptions, this.queryCopy);

    this.subscribeForResize((size: Size) => {
      this.tableOptions.$height = size.toPixel(100, 100).height;
    });
  }

  onFilterQuery(queryStr: string) {
    this.queryCopy.params.filterString = queryStr;
    this.utable.refresh();
  }

}
