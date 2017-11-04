import {UMap} from '@utilities/umap';
import {GridsterItem, GridsterConfig} from 'angular-gridster2';
import { Size } from '@defs/size';
import { BASE_SIZE, GRID_GAP } from '@defs/constants';
import { ComponentDef } from '@app/defs/component-def';
import { Pos } from '@app/defs/pos';

export interface UGridItem {
    data: Object;
    config: GridsterItem;
}

export class GridHelper {

    private _col = 1;
    private updatedItems: UMap<string, ComponentDef> = new UMap<string, ComponentDef>();

    public options: GridsterConfig;
    constructor(resizeCB: (item, itemComponent) => void, movedCB: (item, itemComponent) => void) {
        this.options = {
            gridType: 'fixed',
            compactType: 'none',
            itemChangeCallback: movedCB,
            itemResizeCallback: resizeCB,
            itemInitCallback: undefined,
            itemRemovedCallback: undefined,
            margin: GRID_GAP,
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
            fixedColWidth: BASE_SIZE + GRID_GAP,
            fixedRowHeight: BASE_SIZE + GRID_GAP,
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
              enabled: false,
              ignoreContentClass: 'gridster-item-content',
              ignoreContent: false,
              dragHandleClass: 'drag-handler',
              stop: undefined
            },
            resizable: {
              delayStart: 0,
              enabled: false,
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

    public generateDefaultItemConfig(item: ComponentDef): GridsterItem {
        return {
            'cols': parseInt(item.size.width, 10),
            'rows': parseInt(item.size.height, 10),
            'x': (item.position === undefined ? undefined : item.position.x),
            'y': (item.position === undefined ? undefined : item.position.y),
            'obj': item};
    }

    public createGridItem(item: ComponentDef, size: Size): UGridItem {
        return {
            'data': item,
            'config': this.generateDefaultItemConfig(item)
        };
    }

    public addUpdatedItem(item, itemComponent) {
        const def: ComponentDef = item['obj'];
        if (def) {
            def.position = new Pos(itemComponent.$item['x'], itemComponent.$item['y']);
            def.size = new Size(itemComponent.$item['cols'], itemComponent.$item['rows']);
            this.updatedItems.put(def.id, def);
        }
    }

    public getUpdates(): UMap<string, ComponentDef> {
        return this.updatedItems;
    }

    public clearUpdates() {
        this.updatedItems.clear();
    }
}
