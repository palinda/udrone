import { Pos } from '@defs/pos';
import { Size } from '@defs/size';
import { Type } from 'class-transformer';

export class WindowWidgetDef {

    componentDefID: string;

    @Type(() => Pos)
    position: Pos = new Pos(undefined, undefined);

    @Type(() => Size)
    size: Size;

    constructor(_componentDefID: string, _size: Size) {
        this.componentDefID = _componentDefID;
        this.size = _size;
    }
}
