import { ComponentStore } from '@services/component-store';
import { PermissionManagerService } from '@services/permission-manager.service';
import { LogService } from '@services/log.service';
import { UserContextService } from '@services/user-context.service';
import { DynamicMsg } from '@defs/dynamic-msg';
import { Size } from '@defs/size';
import { ComponentDef } from '@defs/component-def';
import { InputDefGroup } from '@defs/input-def-group';
import { InputDef } from '@defs/input-def';
import { Component, OnInit, Type, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import * as Utils from '@utilities/utils';
import ArrayStore from 'devextreme/data/array_store';
import { WindowWidgetDef } from '@defs/window-widget-def';

let compScope;
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

  permissionOptions: Object;

  constructor(private _userContext: UserContextService, private _resolver: ComponentFactoryResolver, private _log: LogService,
    private _permissionManager: PermissionManagerService, private _compStore: ComponentStore) {
    this.updatingTemplate = new ComponentDef(undefined, undefined, new Size('2', '1'), undefined);
    compScope = this;
    const dataSource = new ArrayStore({
        data: this._permissionManager.getAllowedPermissions(),
    });

    this.permissionOptions = {
      'dataSource': dataSource,
      'acceptCustomValue': true,
      'onCustomItemCreating': function(args) {
          const newValue = args.text,
          component = args.component,
          currentItems = component.option('items');
          currentItems.unshift(newValue);
          component.option('items', currentItems);
          compScope._permissionManager.addPermission(newValue);
          return newValue;
      }
    };

  }

  ngOnInit() {
  }

  onWidgetTemplateSelect(event) {
    if (Utils.isUndefined(event.value)) {
      return;
    }
    this.updatingTemplate = new ComponentDef(undefined, event.value, new Size('2', '1'), new DynamicMsg());
    this.loadInputTypes(event.value);
  }

  loadInputTypes(compName: string)  {

    console.log('Component name:', compName);
    const comp: Type<Component> = this._compStore.findComponentByName(compName);
    if (Utils.isUndefined(comp)) {
      return;
    }

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
    this.selectedInputs.forEach( (val) => {
      val.inputDefList.forEach( val2 => {
        if (val2.dataType === 'Object' || val2.dataType === 'Array') {
          try {

            if (val2.group === undefined) {
              this.updatingTemplate.inputs[val2.leafName] = JSON.parse(this.updatingTemplate.inputs[val2.leafName]);
            } else {
              this.updatingTemplate.inputs[val2.group][val2.leafName] = JSON.parse(this.updatingTemplate.inputs[val2.group][val2.leafName]);
            }
          } catch (e) {
              this._log.printError('Failed to convert to JSON', e);
          }
        }
      });
    });
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
      case 'Select':
        return 'dxSelectBox';
      case 'Array':
        return 'dxTextArea';
    }
    return 'dxTextBox';
  }

  isPrimitive(dataType: string) {
    switch (dataType) {
      case 'String':
      case 'Number':
      case 'Date':
      case 'Boolean':
      case 'Array':
        return true;
    }

    return false;
  }

  private genWindowWidgetDefs(widgetDefs: Array<ComponentDef>) {

    const lst = [];
    widgetDefs.forEach( el => {
      lst.push(new WindowWidgetDef(el.id, el.size));
    });

    return lst;
  }

  handleSpecialType(propName: string, info: string, inputs: Array<InputDefGroup>) {
    if (info === 'WIDGET_TEMPLATES') {
      const dataSource = new ArrayStore({
          data: this.genWindowWidgetDefs(this._userContext.widgetTemplateInsts),
          key: 'id'
      });

      const options = { 'dataSource': dataSource, 'displayExpr': 'id'};
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
          array.push(new InputDef(para, subInfo.name, propName, undefined));
        }
    }
    if (array.length > 0) {
      inputs.push(new InputDefGroup(Utils.toTitleStr(propName), array));
    }
  }

  clearAdd() {
    this.updatingTemplate = new ComponentDef(undefined, undefined, new Size('2', '1'), undefined);
    this.selectedInputs.splice(0, this.selectedInputs.length);
  }

  toTitleStr(str: string) {
    return Utils.toTitleStr(str);
  }
}
