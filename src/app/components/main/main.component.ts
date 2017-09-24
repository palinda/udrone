import { ComponentStore } from '@services/component-store';
import { UserPreferencesComponent } from '@components/user-preferences/user-preferences.component';
import { Action } from '@defs/action';
import { Entry } from '@defs/entry';
import { Size } from '@defs/size';
import { UTextComponent } from '@components/unit/u-text/u-text.component';
import { PopupOptions } from '@components/unit/u-popup/u-popup.component';
import { PopupDriverService } from '@services/popup-driver.service';
import { UMap } from '@utilities/umap';
import { ComponentDef } from '@defs/component-def';
import { DynamicMsg } from '@defs/dynamic-msg';
import { StartMenuComponent } from '@components/start-menu/start-menu.component';
import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, ChangeDetectorRef, ComponentRef,
  OnChanges, AfterViewInit, OnDestroy, Type, Renderer
} from '@angular/core';
import * as Utils from '@utilities/utils';
import { AppComponent } from '@app/app/app.component';


@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit, OnDestroy {

  activeTitle: string;

  @ViewChild('mainbody', {read: ViewContainerRef}) mainbody;

  private _minimizedComponents: Array<ComponentRef<Component>>;
  minimizedDefs: Array<ComponentDef>;
  private _startMenuRef: ComponentRef<Component>;
  private _activeComponent: ComponentRef<Component>;
  activeComponentDef: ComponentDef;
  activeIndex = -1;
  private _isViewInitialized = false;
  private _isComponentMaximized = false;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private _cdRef: ChangeDetectorRef, public _renderer: Renderer,
    private _popupDriver: PopupDriverService, private _compStore: ComponentStore) {
    this.minimizedDefs = [];
    this._minimizedComponents = [];
  }

  createComponent(componentType: Type<any>, inputs: DynamicMsg) {

      if (!this._isViewInitialized) {
        return;
      }

      if (this._activeComponent !== undefined) {
        this._renderer.setElementStyle(this._activeComponent.location.nativeElement, 'display', 'none');
      }

      const factory = this._componentFactoryResolver.resolveComponentFactory(componentType);
      const compRef = this.mainbody.createComponent(factory);

      inputs.forEach((key, val) => {
        compRef.instance[key] = val;
      });

      this._activeComponent = compRef;
      this._cdRef.detectChanges();
      return compRef;
    }

    onMinimizeComponent() {
      if (this.activeIndex === 0) {
        this.onStartMenuOpen();
      } else {
        this.openExistingComponent(this._minimizedComponents[this.activeIndex - 1], this.minimizedDefs[this.activeIndex - 1]);
      }
      this.activeIndex--;
    }

    onCloseComponent() {
      this.onMinimizeComponent();
      this._minimizedComponents.splice(this.activeIndex + 1, 1);
      this.minimizedDefs.splice(this.activeIndex + 1, 1);
    }

    ngAfterViewInit() {
      this._isViewInitialized = true;
      this.onStartMenuOpen();
    }

    ngOnDestroy() {
      this.mainbody.clear();
    }

    onStartMenuOpen() {
      if (Utils.isUndefined(this._startMenuRef)) {
        this._startMenuRef = this.createComponent(StartMenuComponent, new DynamicMsg());
        this._startMenuRef.instance['onSelectContainer'].subscribe( def => {
          if (def instanceof ComponentDef) {
            if (!this._compStore.contains(def.name)) {
              return;
            }
            this.createComponent(this._compStore.findComponentByName(def.name), def.inputs);
            this.activeComponentDef = def;
            this._isComponentMaximized = false;
            this.activeTitle = def.inputs['shortname'];
            this.activeIndex = this.minimizedDefs.length;
            this.minimizedDefs.push(this.activeComponentDef);
            this._minimizedComponents.push(this._activeComponent);
            this._activeComponent.instance['onMinimize'].subscribe((comp) => {
              this.onMinimizeComponent();
            });
            this._activeComponent.instance['onClose'].subscribe((comp) => {
              this.onCloseComponent();
            });
          }
        });
      } else {
        this.openExistingComponent(this._startMenuRef, undefined);
      }
      this.activeTitle = undefined;
      this.activeIndex = -1;
    }

    private openExistingComponent(newComponent: ComponentRef<Component>, newComponentDef: ComponentDef) {
      if (this._activeComponent !== undefined) {
        this._renderer.setElementStyle(this._activeComponent.location.nativeElement, 'display', 'none');
      }
      this._renderer.setElementStyle(newComponent.location.nativeElement, 'display', 'block');
      this.activeComponentDef = newComponentDef;
      this._activeComponent = newComponent;
      if (!Utils.isUndefined(newComponentDef)) {
        this.activeTitle = newComponentDef.inputs['shortname'];
      }
    }

    maximizeComponent(index: number, newComponentDef: ComponentDef) {
      this.openExistingComponent(this._minimizedComponents[index], newComponentDef);
      this.activeIndex = index;
      this._isComponentMaximized = true;
    }

    openPreferencesWnd() {
      const options = new PopupOptions('User Preferences');
      options.size = new Size('60%', '80%');
      this._popupDriver.openPopup(options, new ComponentDef('UserPreferencesComponent', 'UserPreferencesComponent',
        new Size('300', '300'), new DynamicMsg()), [
          new Action('Close', false, (action) => {}, 'normal', true)
      ]);
    }

}
