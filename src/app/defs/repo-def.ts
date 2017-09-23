import { QUERY_TEMPLATE_TAG } from './constants';
import * as Constants from '@defs/constants';
import { Entry } from '@defs/entry';
import { DynamicMsg } from '@defs/dynamic-msg';
import { ComponentDef } from './component-def';

export class RepoDef extends DynamicMsg {
    constructor() {
        super(new Entry(Constants.WIDGET_TEMPLATE_TAG, {}), new Entry(Constants.WIDGET_TEMPLATE_TAG, {}), 
        new Entry(Constants.QUERY_TEMPLATE_TAG, {}));
    }
}
