import { ComponentStore } from './../../services/component-store';
import { ComponentDef } from '@defs/component-def';
import {
  ChangeDetectorRef,
  OnDestroy,
  AfterViewInit,
  OnChanges,
  ComponentRef,
  Input,
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';

@Component({
  selector: 'app-dcl-wrapper',
  template: `
    <div #target></div>
  `
})
export class DclWrapperComponent implements OnChanges, AfterViewInit, OnDestroy {

  @ViewChild('target', {read: ViewContainerRef}) target;
  @Input() componentDef: ComponentDef;
  cmpRef: ComponentRef<any>;
  private isViewInitialized = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdRef: ChangeDetectorRef, 
    private _compStore: ComponentStore) {}

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    if (!this._compStore.contains(this.componentDef.name)) {
      return;
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(this._compStore.findComponentByName(this.componentDef.name));
    this.target.clear();
    this.cmpRef = this.target.createComponent(factory);

    this.componentDef.inputs.forEach((key, val) => {
      this.cmpRef.instance[key] = val;
    });
    this.cdRef.detectChanges();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

}
