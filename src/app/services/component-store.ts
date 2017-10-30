import { UMap } from '@utilities/umap';
import { Component, Type, ComponentFactoryResolver, Inject, Injectable } from '@angular/core';

@Injectable()
export class ComponentStore {
    allComponents: Array<any>;
    componentsMap: UMap<string, Type<Component>> = new UMap<string, Type<Component>>();

    widgetTemplateDefs: Type<Component>[] = [];
    windowDefs: Type<Component>[] = [];

    constructor(private _resolver: ComponentFactoryResolver) {
        this.allComponents = Array.from<any>(_resolver['_factories'].keys());
        this.allComponents.forEach( element => {
            if (element !== undefined) {
                this.componentsMap.put(element['key'], element);
                this.categarizeComponent(element);
            }
        });
    }

    findComponentByName(name: string): Type<Component> {
        return this.componentsMap.get(name);
    }

    contains(name: string): boolean {
        return this.componentsMap.contains(name);
    }

    private categarizeComponent(val: Type<Component>) {
        if (val['type'] === 'WidgetTemplateComponent') {
            this.widgetTemplateDefs.push(val);
        } else if (val['type'] === 'WindowComponent') {
            this.windowDefs.push(val);
        }
    }
}
