import { UserContextService } from '@services/user-context.service';
import { DynamicMsg } from '@defs/dynamic-msg';
import { Size } from '@defs/size';
import { ComponentDef } from '@defs/component-def';
import { InputDefGroup } from '@defs/input-def-group';
import { InputDef } from '@defs/input-def';
import { Component, OnInit, Type, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import * as Utils from '@utilities/utils';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-template-creator',
  templateUrl: './template-creator.component.html',
  styleUrls: ['./template-creator.component.scss']
})
export class TemplateCreatorComponent implements OnInit {

  @Input() templateDefs: Type<Component>[];

  @Input() saveCB: (def: ComponentDef) => void;

  validationGroup = Utils.getRandomInt(0, 100);
  selectedInputs: Array<InputDefGroup> = new Array();
  updatingTemplate: ComponentDef;

  @ViewChild('dummy', {read: ViewContainerRef}) dummy;

  constructor(private _userContext: UserContextService, private _resolver: ComponentFactoryResolver) {
    this.updatingTemplate = new ComponentDef(undefined, undefined, undefined, undefined);
  }

  ngOnInit() {
  }

  onWidgetTemplateSelect(event) {
    this.updatingTemplate = new ComponentDef(undefined, event.value, new Size('2', '1'), new DynamicMsg());
    this.loadInputTypes(event.value);
  }

  loadInputTypes(comp: Type<Component>)  {
    this.selectedInputs = [];

    const factory = this._resolver.resolveComponentFactory(comp);
    const dummyComp = this.dummy.createComponent(factory);
    for (const key in factory.inputs) {
      if (factory.inputs.hasOwnProperty(key)) {
        const info = Reflect.getMetadata('design:type', dummyComp.instance, factory.inputs[key].propName);

        if (this.isPrimitive(info.name)) {
          this.selectedInputs.push(new InputDefGroup(undefined, [new InputDef(factory.inputs[key].propName, info.name, undefined,
            undefined)]));
        } else if (!this.handleSpecialType(factory.inputs[key].propName, info, this.selectedInputs)) {
          this.handleObjectTypes(info, factory.inputs[key].propName, this.selectedInputs);
        }

      }
    }
    this.dummy.clear();
  }

  onAddWidgetTemplate ($event) {
    $event.preventDefault();
    this.updatingTemplate.id = this.updatingTemplate.inputs['componentID'];
    this.saveCB(this.updatingTemplate);
    this.clearAdd();
  }

  getEditorType (dataType: string) {
    switch (dataType) {
      case 'String':
        return 'dxTextBox';
      case 'Number':
        return 'dxNumberBox';
      case 'Date':
        return 'dxDateBox';
      case 'Object':
        return 'dxTextArea';
      case 'MultiSelect':
        return 'dxTagBox';
    }
    return 'dxTextBox';
  }

  isPrimitive(dataType: string) {
    switch (dataType) {
      case 'String':
      case 'Number':
      case 'Date':
      case 'Boolean':
        return true;
    }

    return false;
  }

  handleSpecialType(propName: string, info: string, inputs: Array<InputDefGroup>) {
    if (info === 'WIDGET_TEMPLATES') {
      const dataSource = new ArrayStore({
          data: this._userContext.widgetTemplateInsts,
          key: 'id'
      });

      const options = { 'dataSource': dataSource, 'displayExpr': 'name'};
      this.selectedInputs.push(new InputDefGroup(undefined, [new InputDef(propName, 'MultiSelect', undefined, options)]));
      return true;
    }

    return false;
  }

  handleObjectTypes(info, propName: string, inputs: Array<InputDefGroup>) {
    const inst = new info;
    const array = [];
    this.updatingTemplate.inputs[propName] = {};
    for (const para in inst) {
        if (inst.hasOwnProperty(para)) {
          const subInfo = Reflect.getMetadata('design:type', inst, para);
          array.push(new InputDef(propName + '.' + para, subInfo.name, propName, undefined));
        }
    }
    if (array.length > 0) {
      inputs.push(new InputDefGroup(Utils.toTitleStr(propName), array));
    }
  }

  clearAdd() {
    this.updatingTemplate = new ComponentDef(undefined, undefined, undefined, undefined);
    this.selectedInputs.splice(0, this.selectedInputs.length);
  }
}
