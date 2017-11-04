import { PermissionType } from '@defs/permission-type';
import { Type } from 'class-transformer';
import { UMsg } from '@defs/umsg';
import { DynamicMsg } from '@defs/dynamic-msg';
import { BaseTemplateComponent } from '@components/base-template.component';
import { Component } from '@angular/core';
import { Size } from './size';
import { Pos } from './pos';

export class ComponentDef extends UMsg {

    id: string;
    name: string;

    @Type(() => Size)
    size: Size;

    @Type(() => DynamicMsg)
    inputs: DynamicMsg;

    @Type(() => PermissionType)
    permissions: PermissionType = new PermissionType([]);

    position: Pos;

    constructor(id: string, name: string, size: Size, inputs: DynamicMsg) {
        super();
        this.id = id;
        this.size = size;
        this.inputs = inputs;
        this.name = name;
    }

}
