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
    containerTemplate: ComponentDef[];

    @Type(() => ComponentDef)
    queryTemplate: ComponentDef[];


    constructor(widgetTemplate: ComponentDef[], queryTemplate: ComponentDef[], containerTemplate: ComponentDef[]) {
        super();
        this.containerTemplate = containerTemplate;
        this.queryTemplate = queryTemplate;
        this.widgetTemplate = widgetTemplate;
    }

}
