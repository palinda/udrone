import { PermissionType } from '@defs/permission-type';
import { NameField } from '@defs/name-field';
import { Query } from '@defs/query';
import { DataType } from '@defs/data-type.enum';
import { Sort } from '@defs/sort';

export class ColumnOptions extends NameField {

    constructor(key: string, name: string, private datatype: DataType, private query: Query<any>, private visibleCol: boolean,
        private editable, private visible: boolean, private defaultCol: boolean, private defaultSort: Sort, private filterable: boolean,
        private permission: PermissionType
    ) {
        super(key, name);
    }

    public get $datatype(): DataType {
        return this.datatype;
    }

    public get $query(): Query<any> {
        return this.query;
    }

    public get $visibleCol(): boolean {
        return this.visibleCol;
    }

    public get $editable(): boolean {
        return this.editable;
    }

    public get $visible(): boolean {
        return this.visible;
    }

    public get $defaultCol(): boolean {
        return this.defaultCol;
    }

    public get $defaultSort(): Sort {
        return this.defaultSort;
    }

    public get $filterable(): boolean {
        return this.filterable;
    }

    public get $permission(): PermissionType {
        return this.permission;
    }
}
