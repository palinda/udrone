import { Type } from '@angular/core';
import { DynamicMsg } from '@defs/dynamic-msg';
export class ListType {
    constructor(private _type: Type<any>, private _filter: DynamicMsg) {
    }
}
