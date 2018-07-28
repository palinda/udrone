import { DataType } from '@defs/data-type.enum';
import { TrackType } from '@defs/track-type';

export class FormDef {

    dataType: DataType;

    @TrackType(String)
    key: String;

    @TrackType(String)
    label: String;

    constructor(_key: String, _label: String, _dataType: DataType) {
        this.key = _key;
        this.label = _label;
        this.dataType = _dataType;
    }

}
