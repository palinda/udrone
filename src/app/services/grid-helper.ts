import {UMap} from '@utilities/umap';
import {GridsterItem, GridsterConfig} from 'angular-gridster2';
import { Size } from '@defs/size';
import { BASE_SIZE, GRID_GAP } from '@defs/constants';
import { ComponentDef } from '@defs/component-def';
import { Pos } from '@defs/pos';
import { WindowWidgetDef } from '@defs/window-widget-def';
import * as Utils from '@utilities/utils';

export interface UGridItem {
    data: Object;
    config: GridsterItem;
}

export class GridHelper {

    private _col = 1;
    private updatedItems: UMap<string, WindowWidgetDef> = new UMap<string, WindowWidgetDef>();
    private originalItems: UMap<string, WindowWidgetDef> = new UMap<string, WindowWidgetDef>();

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
            keepFixedHeightInMobile: true,
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

    public generateDefaultItemConfig(item: ComponentDef, windowWidget: WindowWidgetDef): GridsterItem {

        let size;
        let pos;
        if (!windowWidget.size) {
            size = item.size;
        } else {
            size = windowWidget.size;
        }

        if (windowWidget.position) {
            pos = windowWidget.position;
        } else {
            pos = new Pos(undefined, undefined);
        }

        return {
            'cols': parseInt(size.width, 10),
            'rows': parseInt(size.height, 10),
            'x': pos.x,
            'y': pos.y,
            'windowWidget': windowWidget
        };
    }

    public createGridItem(item: ComponentDef, windowWidget: WindowWidgetDef): UGridItem {
        return {
            'data': item,
            'config': this.generateDefaultItemConfig(item, windowWidget)
        };
    }

    public addUpdatedItem(item, itemComponent): WindowWidgetDef {
        const def: WindowWidgetDef = item['windowWidget'];
        if (def) {
            // if (!this.originalItems.contains(def.componentDefID)) {
            //     this.originalItems.put(def.componentDefID, Utils.deepCopy(def));
            // }
            def.position = new Pos(itemComponent.$item['x'], itemComponent.$item['y']);
            def.size = new Size(itemComponent.$item['cols'], itemComponent.$item['rows']);
            this.updatedItems.put(def.componentDefID, def);

            return def;
        }
        return undefined;
    }

    public resetToOriginals(list: Array<WindowWidgetDef>, gridlist: Array<UGridItem>) {
        for (const key in list) {
            if (list.hasOwnProperty(key)) {
              if (this.originalItems.contains(list[key].componentDefID)) {
                const original = this.originalItems.get(list[key].componentDefID);
                list[key].position = original.position;
                list[key].size = original.size;
              }
            }
        }

        for (const key in gridlist) {
            if (gridlist.hasOwnProperty(key)) {
                const config = gridlist[key].config;
              if (this.originalItems.contains(config['windowWidget'].componentDefID)) {
                const original = this.originalItems.get(config['windowWidget'].componentDefID);
                gridlist[key].config['cols'] = parseInt(original.size.width, 10);
                gridlist[key].config['rows'] = parseInt(original.size.height, 10);
                gridlist[key].config['x'] = original.position.x;
                gridlist[key].config['y'] = original.position.y;
              }
            }
        }
    }

    public getUpdates(): UMap<string, WindowWidgetDef> {
        return this.updatedItems;
    }

    public getOriginals(): UMap<string, WindowWidgetDef> {
        return this.originalItems;
    }

    public clearUpdates() {
        this.updatedItems.clear();
        this.originalItems.clear();
    }
}
