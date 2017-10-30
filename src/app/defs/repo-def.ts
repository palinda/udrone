import { ComponentDef } from '@defs/component-def';
import { UMsg } from './umsg';
import * as Constants from '@defs/constants';
import { Entry } from '@defs/entry';
import { DynamicMsg } from '@defs/dynamic-msg';
import { Type , Exclude} from 'class-transformer';

export class RepoDef extends UMsg {

    @Type(() => ComponentDef)
    widgetTemplate: ComponentDef[];

    @Type(() => ComponentDef)
    windowTemplate: ComponentDef[];


    constructor(widgetTemplate: ComponentDef[], windowTemplate: ComponentDef[]) {
        super();
        this.windowTemplate = windowTemplate;
        this.widgetTemplate = widgetTemplate;
    }

}
