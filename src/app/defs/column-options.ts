import { Type } from 'class-transformer';
import { PermissionType } from '@defs/permission-type';
import { NameField } from '@defs/name-field';
import { Query } from '@defs/query';
import { DataType } from '@defs/data-type.enum';
import { Sort } from '@defs/sort';

export class ColumnOptions extends NameField {

    dataType: DataType;

    @Type(() => Query)
    query: Query<any>;

    visibleCol = true;
    editable = false;
    visible = true;
    defaultCol = false;
    filterable = true;

    @Type(() => Sort)
    defaultSort: Sort;

    @Type(() => PermissionType)
    permission: PermissionType;

    constructor(_key: string, _name: string, _datatype: DataType, _query: Query<any>, _visibleCol: boolean,
        _editable: boolean, _visible: boolean, _defaultCol: boolean, _defaultSort: Sort, _filterable: boolean,
        _permission: PermissionType
    ) {
        super(_key, _name);
        this.dataType = _datatype;
        this.query  = _query;
        this.visibleCol = _visibleCol;
        this.editable = _editable;
        this.visible = _visible;
        this.defaultCol = _defaultCol;
        this.filterable = _filterable;
        this.defaultSort = _defaultSort;
        this.permission = _permission;
    }
}
