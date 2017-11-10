import { SystemInfoComponent } from '@components/system-info/system-info.component';
import { PermissionManagerService } from '@services/permission-manager.service';
import { ComponentStore } from '@services/component-store';
import { TemplateCreatorComponent } from './components/template-creator/template-creator.component';
import { UserPreferencesComponent } from './components/user-preferences/user-preferences.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BaseTemplateComponent } from '@components/base-template.component';
import { WidgetTemplateComponent } from '@components/widget-template.component';
import { PushChannelService } from '@services/push-channel.service';
import { RefreshService } from '@services/refresh.service';
import { serviceQueryProvider } from '@services/service-query.provider';
import { IntervalService } from '@services/interval.service';
import { FocusDirective } from '@directives/focus.directive';
import { TpDepModule } from '@modules/tp-dep.module';
import { HttpService } from '@services/http.service';
import { LogService } from '@services/log.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from '@components/unit/search-box/search-box.component';
import { BgCounterComponent } from '@components/unit/bg-counter/bg-counter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from '@components/main/main.component';
import { UGuageComponent } from '@components/unit/u-guage/u-guage.component';
import { UTableComponent } from '@components/unit/u-table/u-table.component';
import { USparklineComponent } from '@components/unit/u-sparkline/u-sparkline.component';
import { USplineComponent } from '@components/unit/u-spline/u-spline.component';
import { UTextComponent } from '@components/unit/u-text/u-text.component';
import { CounterSparklineComponent } from '@components/widget-templates/counter-sparkline/counter-sparkline.component';
import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { WindowComponent } from '@components/window/window.component';
import { UIconBtnComponent } from '@components/unit/u-icon-btn/u-icon-btn.component';
import { StartMenuComponent } from '@components/start-menu/start-menu.component';
import { UserContextService } from '@services/user-context.service';
import { UPopupComponent } from '@components/unit/u-popup/u-popup.component';
import { UFormComponent } from '@components/unit/u-form/u-form.component';
import { PopupDriverService } from '@services/popup-driver.service';
import { ThemeStoreService } from '@services/theme-store.service';
import { CounterGuageComponent } from '@components/widget-templates/counter-guage/counter-guage.component';
import { RealtimeSplineComponent } from '@components/widget-templates/realtime-spline/realtime-spline.component';
import { AdvanceQueryTableComponent } from '@components/widget-templates/advance-query-table/advance-query-table.component';
import { MultiCountersComponent } from '@components/widget-templates/multi-counters/multi-counters.component';
import { UPieChartComponent } from '@components/unit/u-pie-chart/u-pie-chart.component';
import { ResizeService } from '@services/resize.service';
import { TooltipDirective } from 'ng2-tooltip-directive/components';

/**
 * Main app module
 */
@NgModule({
  declarations: [
    BgCounterComponent,
    SearchBoxComponent,
    UGuageComponent,
    FocusDirective,
    UTableComponent,
    USparklineComponent,
    USplineComponent,
    UTextComponent,
    CounterSparklineComponent,
    BaseTemplateComponent,
    WidgetTemplateComponent,
    DclWrapperComponent,
    MainComponent,
    UIconBtnComponent,
    StartMenuComponent,
    UPopupComponent,
    UFormComponent,
    UserPreferencesComponent,
    TemplateCreatorComponent,
    WindowComponent,
    CounterGuageComponent,
    RealtimeSplineComponent,
    AdvanceQueryTableComponent,
    MultiCountersComponent,
    UPieChartComponent,
    SystemInfoComponent,
    TooltipDirective
  ],
  entryComponents: [
    CounterSparklineComponent,
    CounterGuageComponent,
    WindowComponent,
    StartMenuComponent,
    UTextComponent,
    UserPreferencesComponent,
    TemplateCreatorComponent,
    RealtimeSplineComponent,
    AdvanceQueryTableComponent,
    MultiCountersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    TpDepModule
  ],
  providers: [
        LogService,
        HttpService,
        IntervalService,
        RefreshService,
        ComponentStore,
        PushChannelService,
        serviceQueryProvider,
        UserContextService,
        PopupDriverService,
        ThemeStoreService,
        PermissionManagerService,
        ResizeService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
