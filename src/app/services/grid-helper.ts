import { Size } from '@defs/size';
import { NgGridItemConfig, NgGridConfig } from 'angular2-grid';

export class GridHelper {
    private _col = 1;
    constructor(private _options: NgGridConfig) {
    }

    public generateDefaultItemConfig(size: Size): NgGridItemConfig {
        return { 'dragHandle': '.handle', 'col': this._col++, 'row': 1, 'sizex': parseInt(size.width, 10),
        'sizey': parseInt(size.height, 10) };
    }

    public get options() {
        return this._options;
    }

    public createGridItem(item: Object, size: Size) {
        return {
            'data': item,
            'config': this.generateDefaultItemConfig(size)
        };
    }
}
