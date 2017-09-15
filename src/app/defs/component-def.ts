import { DynamicMsg } from '@defs/dynamic-msg';
import { BaseTemplateComponent } from '@components/base-template.component';
import { Component, Type } from '@angular/core';
import { Size } from './size';

export class ComponentDef {
    constructor(private _type: Type<any>, private _size: Size, private _inputs: DynamicMsg) {
    }

    public get type() {
        return this._type;
    }

    public get inputs(): DynamicMsg {
        return this._inputs;
    }

    public get size(): Size {
        return this._size;
    }
}
