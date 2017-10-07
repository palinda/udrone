import { MultiCountersComponent } from './../components/widget-templates/multi-counters/multi-counters.component';
import { UMap } from '@utilities/umap';
import { Component, Type, ComponentFactoryResolver, Inject, Injectable } from '@angular/core';

@Injectable()
export class ComponentStore {
    allComponents: Array<any>;
    componentsMap: UMap<string, Type<Component>> = new UMap<string, Type<Component>>();

    constructor(private _resolver: ComponentFactoryResolver) {
        this.allComponents = Array.from<any>(_resolver['_factories'].keys());
        this.allComponents.forEach( element => {
            if (element !== undefined) {
                this.componentsMap.put(element['key'], element);
            }
        });
    }

    findComponentByName(name: string): Type<Component> {
        return this.componentsMap.get(name);
    }

    contains(name: string): boolean {
        console.log(JSON.stringify(this.componentsMap));
        return this.componentsMap.contains(name);
    }
}
