import { TimeUtils } from './../../utilities/time-utils';
import { IntervalService } from '@services/interval.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-info',
  template: `
  <div class="pull-right" id="info-widget">
    <div class="row">ustocktest</div>
    <div class="h-seperator"></div>
    <div class="row">{{timestr}}</div>
  </div>
  `,
  styles: [`
    #info-widget {
      width: 150px;
      height: 100%;
      background-color: #6d6d78;
      color: white;
      text-align: center;
    }

    .row {
      line-height: 28px;
    }
`]
})
export class SystemInfoComponent implements OnInit {

  timestr: string;
  constructor(private _intervalService: IntervalService) { }

  ngOnInit() {
    this.setTimeStr();
    this._intervalService.setInterval( () => {
      this.setTimeStr();
    }, 1);
  }

  setTimeStr() {
    this.timestr = TimeUtils.currentTime('MM/DD/YYYY hh:mm:ss');
  }
}
