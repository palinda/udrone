import {GridsterItem, GridsterConfig} from 'angular-gridster2';
import { Size } from '@defs/size';

export interface UGridItem {
    data: Object;
    config: GridsterItem;
}

export class GridHelper {

    private _col = 1;
    constructor(private _options: GridsterConfig) {
        this._options = {
            gridType: 'fixed',
            compactType: 'none',
            itemChangeCallback: undefined,
            itemResizeCallback: undefined,
            itemInitCallback: undefined,
            itemRemovedCallback: undefined,
            margin: 15,
            outerMargin: true,
            mobileBreakpoint: 640,
            minCols: 1,
            maxCols: 100,
            minRows: 1,
            maxRows: 100,
            maxItemCols: 100,
            minItemCols: 1,
            maxItemRows: 100,
            minItemRows: 1,
            maxItemArea: 2500,
            minItemArea: 1,
            defaultItemCols: 1,
            defaultItemRows: 1,
            fixedColWidth: 115,
            fixedRowHeight: 115,
            keepFixedHeightInMobile: false,
            keepFixedWidthInMobile: false,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            enableEmptyCellClick: false,
            enableEmptyCellContextMenu: false,
            enableEmptyCellDrop: false,
            enableEmptyCellDrag: false,
            emptyCellClickCallback: undefined,
            emptyCellContextMenuCallback: undefined,
            emptyCellDropCallback: undefined,
            emptyCellDragCallback: undefined,
            emptyCellDragMaxCols: 50,
            emptyCellDragMaxRows: 50,
            draggable: {
              delayStart: 0,
              enabled: true,
              ignoreContentClass: 'gridster-item-content',
              ignoreContent: false,
              dragHandleClass: 'drag-handler',
              stop: undefined
            },
            resizable: {
              delayStart: 0,
              enabled: true,
              stop: undefined,
              handles: {
                s: true,
                e: true,
                n: true,
                w: true,
                se: true,
                ne: true,
                sw: true,
                nw: true
              }
            },
            api: {
              resize: undefined,
              optionsChanged: undefined,
              getNextPossiblePosition: undefined,
            },
            swap: false,
            pushItems: true,
            disablePushOnDrag: false,
            disablePushOnResize: false,
            pushDirections: {north: true, east: true, south: true, west: true},
            pushResizeItems: false,
            displayGrid: 'onDrag&Resize',
            disableWindowResize: false
          };
    }

    public generateDefaultItemConfig(size: Size): GridsterItem {
        return {'cols': parseInt(size.width, 10),
        'rows': parseInt(size.height, 10)};
    }

    public get options() {
        return this._options;
    }

    public createGridItem(item: Object, size: Size): UGridItem {
        return {
            'data': item,
            'config': this.generateDefaultItemConfig(size)
        };
    }

}
