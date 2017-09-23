import { TemplateCreatorComponent } from './components/template-creator/template-creator.component';
import { UserPreferencesComponent } from './components/user-preferences/user-preferences.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BaseTemplateComponent } from '@components/base-template.component';
import { QueryTemplateComponent } from '@components/query-template.component';
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
import { AppComponent } from './app/app.component';
import { UGuageComponent } from '@components/unit/u-guage/u-guage.component';
import { UTableComponent } from '@components/unit/u-table/u-table.component';
import { USparklineComponent } from '@components/unit/u-sparkline/u-sparkline.component';
import { USplineComponent } from '@components/unit/u-spline/u-spline.component';
import { UTextComponent } from '@components/unit/u-text/u-text.component';
import { CounterSparklineComponent } from '@components/widget-templates/counter-sparkline/counter-sparkline.component';
import { DclWrapperComponent } from '@components/dcl-wrapper/dcl-wrapper.component';
import { DashboardContainerComponent } from '@components/container-templates/dashboard-container/dashboard-container.component';
import { UIconBtnComponent } from '@components/unit/u-icon-btn/u-icon-btn.component';
import { StartMenuComponent } from '@components/start-menu/start-menu.component';
import { UserContextService } from '@services/user-context.service';
import { UPopupComponent } from '@components/unit/u-popup/u-popup.component';
import { UFormComponent } from '@components/unit/u-form/u-form.component';
import { PopupDriverService } from '@services/popup-driver.service';
import { ThemeStoreService } from '@services/theme-store.service';

/**
 * Main app module
 */
@NgModule({
  declarations: [
    AppComponent,
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
    QueryTemplateComponent,
    DclWrapperComponent,
    DashboardContainerComponent,
    MainComponent,
    UIconBtnComponent,
    StartMenuComponent,
    UPopupComponent,
    UFormComponent,
    UserPreferencesComponent,
    TemplateCreatorComponent
  ],
  entryComponents: [
    CounterSparklineComponent,
    DashboardContainerComponent,
    StartMenuComponent,
    UTextComponent,
    UserPreferencesComponent,
    TemplateCreatorComponent
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
        PushChannelService,
        serviceQueryProvider,
        UserContextService,
        PopupDriverService,
        ThemeStoreService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
