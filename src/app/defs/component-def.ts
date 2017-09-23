import { UMsg } from '@defs/umsg';
import { DynamicMsg } from '@defs/dynamic-msg';
import { BaseTemplateComponent } from '@components/base-template.component';
import { Component, Type } from '@angular/core';
import { Size } from './size';

export class ComponentDef extends UMsg {

    private _name: string;
    constructor(private _id: string, private _type: Type<any>, private _size: Size, private _inputs: DynamicMsg) {
        super();
        this.setName();
    }

    public get id() {
        return this._id;
    }

    public get type() {
        return this._type;
    }

    public get name() {
        return this._name;
    }

    public get inputs(): DynamicMsg {
        return this._inputs;
    }

    public get size(): Size {
        return this._size;
    }

    public set type(_type: Type<any>) {
        this._type = _type;
        this.setName();
    }

    private setName() {
        this._name = this._type !== undefined ? this._type.name : undefined;
    }

    public set inputs(_inputs: DynamicMsg) {
        this._inputs = _inputs;
    }

    public set size(_size: Size) {
        this._size = _size;
    }

    public set id(_id: string) {
        this._id = _id;
    }
}
