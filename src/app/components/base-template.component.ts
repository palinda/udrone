import { ComponentDef } from '@defs/component-def';
import { TrackType } from '@defs/track-type';
import { LogService } from '@services/log.service';
import { Component, Input, OnDestroy } from '@angular/core';
import { PermissionType } from '@defs/permission-type';
import { Type } from 'class-transformer';
import { ResizeService } from '@services/resize.service';
import { Size } from '@defs/size';

@Component({
  selector: 'app-query-widget',
  template: `
  `,
  styles: []
})
export class BaseTemplateComponent implements OnDestroy {

  @TrackType(String)
  @Input()componentID: string;

  public componentDef: ComponentDef;

  constructor(protected logService: LogService, protected resizeService?: ResizeService) {
  }

  ngOnDestroy(): void {
    if (this.resizeService) {
      this.resizeService.unsubsribe(this.componentID);
    }
  }

  protected subscribeForResize(cb: (size: Size) => void) {
    if (this.resizeService) {
      this.resizeService.subsribe(this.componentID, cb);
    }
  }

  protected calcFontSize(size: Size, ratio: number) {
    const pixSize = size.toPixel(ratio, ratio);
    return Math.min(parseInt(pixSize.width, 10), parseInt(pixSize.height, 10));
  }
}
