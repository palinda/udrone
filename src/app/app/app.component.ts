import { CounterSparklineComponent } from '@components/widget-templates/counter-sparkline/counter-sparkline.component';
import { ComponentDef } from './../defs/component-def';
import { Size } from '@defs/size';
import { SparkLinkOptions } from '@components/unit/u-sparkline/u-sparkline.component';
import { Entry } from '@defs/entry';
import { DynamicMsg } from '@defs/dynamic-msg';
import * as utils from '@utilities/utils';
import { SplineOptions, Series } from './../components/unit/u-spline/u-spline.component';
import { TableQuery } from '@components/unit/u-table/table-query';
import { Query } from './../defs/query';
import { Sort } from '@defs/sort';
import { DataType } from '@defs/data-type.enum';
import { ColumnOptions } from './../defs/column-options';
import { TableOptions } from './../components/unit/u-table/u-table.component';
import { IntervalService } from '@services/interval.service';
import { GaugeData, GaugeOptions } from '@components/unit/u-guage/u-guage.component';
import { Component, OnInit } from '@angular/core';
import DxThemes from 'devextreme/ui/themes';
import { Theme } from '@defs/theme';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // title = 'app';
  // colOptions: Array<ColumnOptions> = [];
  // randomData: Array<Object> = [];
  // sparkData = [];

  // tableOptions: TableOptions;
  // splineOptions = new SplineOptions('Annual Income');
  // count = 0;
  // counter = 0;

  // value = new GaugeData(50, 60, 70);
  // guageOptions = new GaugeOptions('Profit', 20, '$', undefined, 0, 100, 10);

  // styles: Object;


  ngOnInit(): void {
  }

  constructor(private intervalService: IntervalService) {

    // this.splineOptions.series = [
    //   new Series('Primary', 'value')
    // ];

    // const interval = this.intervalService.setInterval(() => {
    //   const val = utils.getRandomInt(0, 100);
    //   this.value = new GaugeData(val, val, val);

    //   this.sparkData = [
    //     {'key': 'name_' + 1, 'value': utils.getRandomInt(0, 100)},
    //     {'key': 'name_' + 2, 'value': utils.getRandomInt(0, 100)},
    //     {'key': 'name_' + 3, 'value': utils.getRandomInt(0, 100)},
    //     {'key': 'name_' + 4, 'value': utils.getRandomInt(0, 100)},
    //     {'key': 'name_' + 5, 'value': utils.getRandomInt(0, 100)},
    //     {'key': 'name_' + 6, 'value': utils.getRandomInt(0, 100)},
    //     {'key': 'name_' + 7, 'value': utils.getRandomInt(0, 100)}
    // ];

    // this.randomData.push({'key': 'name_' + this.count, 'value': utils.getRandomInt(70, 100)});
    // this.count++;
    // if (this.randomData.length > 10) {
    //   this.randomData.shift();
    // }

    // if (this.count > 20) {
    //   intervalService.clearInterval(interval);
    // }

    // this.counter += utils.getRandomInt(0, 30);

    // }, 1000);

    // this.colOptions.push(new ColumnOptions('name', 'Name', DataType.string, undefined, true, false, true,
    // true, new Sort('name', true), true, undefined));
    // this.colOptions.push(new ColumnOptions('val1', 'Value 1', DataType.string, undefined, true, false, true,
    // true, new Sort('val1', true), true, undefined));
    // this.colOptions.push(new ColumnOptions('val2', 'Value 2', DataType.string, undefined, true, false, true,
    // true, new Sort('val2', true), true, undefined));
    // this.colOptions.push(new ColumnOptions('val3', 'Value 3', DataType.string, undefined, true, false, true,
    // true, new Sort('val3', true), true, undefined));
    // this.colOptions.push(new ColumnOptions('val4', 'Value 4', DataType.number, undefined, true, false, true,
    // true, new Sort('val4', true), true, undefined));

    // this.tableOptions = new TableOptions(this.colOptions, new Query('test', new TableQuery(10, 0, [], [])));

    // this.styles = { 'font-size' : '20px', 'color': 'gray'};
  }



}
