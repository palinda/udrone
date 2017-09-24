import { UMap } from '@utilities/umap';
import { Component, Type, ComponentFactoryResolver, Inject } from '@angular/core';

export class ComponentStore {
    allComponents: Array<Type<Component>>;
    componentsMap: UMap<string, Type<Component>> = new UMap<string, Type<Component>>();

    constructor(@Inject(ComponentFactoryResolver) _resolver: ComponentFactoryResolver) {
        this.allComponents = Array.from<Type<Component>>(_resolver['_factories'].keys());
        this.allComponents.forEach( element => {
          this.componentsMap.put(element.name, element);
        });
    }

    findComponentByName(name: string): Type<Component> {
        return this.componentsMap.get(name);
    }

    contains(name: string): boolean {
        return this.componentsMap.contains(name);
    }
}
