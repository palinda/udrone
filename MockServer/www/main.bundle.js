webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_container_template_component__ = __webpack_require__("../../../../../src/app/components/container-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_permission_manager_service__ = __webpack_require__("../../../../../src/app/services/permission-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_component_store__ = __webpack_require__("../../../../../src/app/services/component-store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_template_creator_template_creator_component__ = __webpack_require__("../../../../../src/app/components/template-creator/template-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_preferences_user_preferences_component__ = __webpack_require__("../../../../../src/app/components/user-preferences/user-preferences.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_template_component__ = __webpack_require__("../../../../../src/app/components/base-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_query_template_component__ = __webpack_require__("../../../../../src/app/components/query-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_widget_template_component__ = __webpack_require__("../../../../../src/app/components/widget-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_push_channel_service__ = __webpack_require__("../../../../../src/app/services/push-channel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_refresh_service__ = __webpack_require__("../../../../../src/app/services/refresh.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_service_query_provider__ = __webpack_require__("../../../../../src/app/services/service-query.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_interval_service__ = __webpack_require__("../../../../../src/app/services/interval.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_focus_directive__ = __webpack_require__("../../../../../src/app/directives/focus.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_tp_dep_module__ = __webpack_require__("../../../../../src/app/modules/tp-dep.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_unit_search_box_search_box_component__ = __webpack_require__("../../../../../src/app/components/unit/search-box/search-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_unit_bg_counter_bg_counter_component__ = __webpack_require__("../../../../../src/app/components/unit/bg-counter/bg-counter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_app_component__ = __webpack_require__("../../../../../src/app/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_unit_u_guage_u_guage_component__ = __webpack_require__("../../../../../src/app/components/unit/u-guage/u-guage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_unit_u_table_u_table_component__ = __webpack_require__("../../../../../src/app/components/unit/u-table/u-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_unit_u_sparkline_u_sparkline_component__ = __webpack_require__("../../../../../src/app/components/unit/u-sparkline/u-sparkline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_unit_u_spline_u_spline_component__ = __webpack_require__("../../../../../src/app/components/unit/u-spline/u-spline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_unit_u_text_u_text_component__ = __webpack_require__("../../../../../src/app/components/unit/u-text/u-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_templates_counter_sparkline_counter_sparkline_component__ = __webpack_require__("../../../../../src/app/components/widget-templates/counter-sparkline/counter-sparkline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_dcl_wrapper_dcl_wrapper_component__ = __webpack_require__("../../../../../src/app/components/dcl-wrapper/dcl-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_container_templates_dashboard_container_dashboard_container_component__ = __webpack_require__("../../../../../src/app/components/container-templates/dashboard-container/dashboard-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_unit_u_icon_btn_u_icon_btn_component__ = __webpack_require__("../../../../../src/app/components/unit/u-icon-btn/u-icon-btn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_start_menu_start_menu_component__ = __webpack_require__("../../../../../src/app/components/start-menu/start-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_user_context_service__ = __webpack_require__("../../../../../src/app/services/user-context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_unit_u_popup_u_popup_component__ = __webpack_require__("../../../../../src/app/components/unit/u-popup/u-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_unit_u_form_u_form_component__ = __webpack_require__("../../../../../src/app/components/unit/u-form/u-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_popup_driver_service__ = __webpack_require__("../../../../../src/app/services/popup-driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_theme_store_service__ = __webpack_require__("../../../../../src/app/services/theme-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_widget_templates_counter_guage_counter_guage_component__ = __webpack_require__("../../../../../src/app/components/widget-templates/counter-guage/counter-guage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_widget_templates_realtime_spline_realtime_spline_component__ = __webpack_require__("../../../../../src/app/components/widget-templates/realtime-spline/realtime-spline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_query_templates_advance_query_table_advance_query_table_component__ = __webpack_require__("../../../../../src/app/components/query-templates/advance-query-table/advance-query-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_container_templates_query_container_query_container_component__ = __webpack_require__("../../../../../src/app/components/container-templates/query-container/query-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_widget_templates_multi_counters_multi_counters_component__ = __webpack_require__("../../../../../src/app/components/widget-templates/multi-counters/multi-counters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_unit_u_pie_chart_u_pie_chart_component__ = __webpack_require__("../../../../../src/app/components/unit/u-pie-chart/u-pie-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_system_info_system_info_component__ = __webpack_require__("../../../../../src/app/components/system-info/system-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































/**
 * Main app module
 */
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_22__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_24__app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_unit_bg_counter_bg_counter_component__["a" /* BgCounterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_unit_search_box_search_box_component__["a" /* SearchBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_unit_u_guage_u_guage_component__["c" /* UGuageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__directives_focus_directive__["a" /* FocusDirective */],
            __WEBPACK_IMPORTED_MODULE_26__components_unit_u_table_u_table_component__["b" /* UTableComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_unit_u_sparkline_u_sparkline_component__["b" /* USparklineComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_unit_u_spline_u_spline_component__["b" /* USplineComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_unit_u_text_u_text_component__["a" /* UTextComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_templates_counter_sparkline_counter_sparkline_component__["a" /* CounterSparklineComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_base_template_component__["a" /* BaseTemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_widget_template_component__["a" /* WidgetTemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_query_template_component__["a" /* QueryTemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_dcl_wrapper_dcl_wrapper_component__["a" /* DclWrapperComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_container_templates_dashboard_container_dashboard_container_component__["a" /* DashboardContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_unit_u_icon_btn_u_icon_btn_component__["a" /* UIconBtnComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_start_menu_start_menu_component__["a" /* StartMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_unit_u_popup_u_popup_component__["b" /* UPopupComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_unit_u_form_u_form_component__["a" /* UFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_user_preferences_user_preferences_component__["a" /* UserPreferencesComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_template_creator_template_creator_component__["a" /* TemplateCreatorComponent */],
            __WEBPACK_IMPORTED_MODULE_0__components_container_template_component__["a" /* ContainerTemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_widget_templates_counter_guage_counter_guage_component__["a" /* CounterGuageComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_widget_templates_realtime_spline_realtime_spline_component__["a" /* RealtimeSplineComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_query_templates_advance_query_table_advance_query_table_component__["a" /* AdvanceQueryTableComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_container_templates_query_container_query_container_component__["a" /* QueryContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_widget_templates_multi_counters_multi_counters_component__["a" /* MultiCountersComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_unit_u_pie_chart_u_pie_chart_component__["a" /* UPieChartComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_system_info_system_info_component__["a" /* SystemInfoComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_30__components_widget_templates_counter_sparkline_counter_sparkline_component__["a" /* CounterSparklineComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_widget_templates_counter_guage_counter_guage_component__["a" /* CounterGuageComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_container_templates_dashboard_container_dashboard_container_component__["a" /* DashboardContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_0__components_container_template_component__["a" /* ContainerTemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_start_menu_start_menu_component__["a" /* StartMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_unit_u_text_u_text_component__["a" /* UTextComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_user_preferences_user_preferences_component__["a" /* UserPreferencesComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_template_creator_template_creator_component__["a" /* TemplateCreatorComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_widget_templates_realtime_spline_realtime_spline_component__["a" /* RealtimeSplineComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_query_templates_advance_query_table_advance_query_table_component__["a" /* AdvanceQueryTableComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_container_templates_query_container_query_container_component__["a" /* QueryContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_widget_templates_multi_counters_multi_counters_component__["a" /* MultiCountersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_17__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_14__modules_tp_dep_module__["a" /* TpDepModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__services_log_service__["a" /* LogService */],
            __WEBPACK_IMPORTED_MODULE_15__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_12__services_interval_service__["a" /* IntervalService */],
            __WEBPACK_IMPORTED_MODULE_10__services_refresh_service__["a" /* RefreshService */],
            __WEBPACK_IMPORTED_MODULE_2__services_component_store__["a" /* ComponentStore */],
            __WEBPACK_IMPORTED_MODULE_9__services_push_channel_service__["a" /* PushChannelService */],
            __WEBPACK_IMPORTED_MODULE_11__services_service_query_provider__["b" /* serviceQueryProvider */],
            __WEBPACK_IMPORTED_MODULE_35__services_user_context_service__["a" /* UserContextService */],
            __WEBPACK_IMPORTED_MODULE_38__services_popup_driver_service__["a" /* PopupDriverService */],
            __WEBPACK_IMPORTED_MODULE_39__services_theme_store_service__["a" /* ThemeStoreService */],
            __WEBPACK_IMPORTED_MODULE_1__services_permission_manager_service__["a" /* PermissionManagerService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_23__components_main_main_component__["a" /* MainComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n\n    <!-- <app-dashboard-container [componentDefList]=\"compDefList\"></app-dashboard-container> -->\n    <!-- <dx-tile-view class=\"dx-tile-content\" direction=\"vertical\">\n        <dxi-item [widthRatio]=\"2\" [heightRatio]=\"1\">\n            <app-counter-sparkline heading=\"Order Count\" [countQuery]=\"countQuery\" [sparkQuery]=\"sparkQuery\" id=\"test1\"></app-counter-sparkline>\n        </dxi-item>\n        <dxi-item [widthRatio]=\"2\" [heightRatio]=\"1\">\n            <app-counter-sparkline heading=\"Trade Count\" [countQuery]=\"countQuery\" [sparkQuery]=\"sparkQuery\" id=\"test1\"></app-counter-sparkline>\n        </dxi-item>\n        <dxi-item [widthRatio]=\"2\" [heightRatio]=\"1\">\n            <app-counter-sparkline heading=\"Open Count\" [countQuery]=\"countQuery\" [sparkQuery]=\"sparkQuery\" id=\"test1\"></app-counter-sparkline>\n        </dxi-item>\n        <dxi-item [widthRatio]=\"2\" [heightRatio]=\"1\">\n            <app-counter-sparkline heading=\"Report Count\" [countQuery]=\"countQuery\" [sparkQuery]=\"sparkQuery\" id=\"test1\"></app-counter-sparkline>\n        </dxi-item>\n    </dx-tile-view> -->\n\n\n    <!-- <app-u-guage [value]=\"value\" [options]=\"guageOptions\"></app-u-guage>\n    <app-u-table [tableOptions]=\"tableOptions\"></app-u-table>\n\n    <div style=\"width:250px; border: 1px solid gray;padding: 20px 20px;\">\n        <app-u-sparkline [data]=\"sparkData\"></app-u-sparkline>\n    </div>\n\n    <app-u-spline [data]=\"randomData\" [options]=\"splineOptions\"></app-u-spline>\n\n    <app-u-text [text]=\"2017/01/01\" [styles]=\"styles\"></app-u-text>\n\n    <app-bg-counter [value]=\"counter\"></app-bg-counter> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_interval_service__ = __webpack_require__("../../../../../src/app/services/interval.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(intervalService) {
        // this.splineOptions.series = [
        //   new Series('Primary', 'value')
        // ];
        this.intervalService = intervalService;
        // const interval = this.intervalService.setInterval(() => {
        //   const val = utils.getRandomInt(0, 100);
        //   this.value = new GaugeData(val, val, val);
        //   this.sparkData = [
        //     {'key': 'name_' + 1, 'value': utils.getRandomInt(0, 100)},
        //     {'key': 'name_' + 2, 'value': utils.getRandomInt(0, 100)},
        //     {'key': 'name_' + 3, 'value': utils.getRandomInt(0, 100)},
        //     {'key': 'name_' + 4, 'value': utils.getRandomInt(0, 100)},
        //     {'key': 'name_' + 5, 'value': utils.getRandomInt(0, 100)},
        //     {'key': 'name_' + 6, 'value': utils.getRandomInt(0, 100)},
        //     {'key': 'name_' + 7, 'value': utils.getRandomInt(0, 100)}
        // ];
        // this.randomData.push({'key': 'name_' + this.count, 'value': utils.getRandomInt(70, 100)});
        // this.count++;
        // if (this.randomData.length > 10) {
        //   this.randomData.shift();
        // }
        // if (this.count > 20) {
        //   intervalService.clearInterval(interval);
        // }
        // this.counter += utils.getRandomInt(0, 30);
        // }, 1000);
        // this.colOptions.push(new ColumnOptions('name', 'Name', DataType.string, undefined, true, false, true,
        // true, new Sort('name', true), true, undefined));
        // this.colOptions.push(new ColumnOptions('val1', 'Value 1', DataType.string, undefined, true, false, true,
        // true, new Sort('val1', true), true, undefined));
        // this.colOptions.push(new ColumnOptions('val2', 'Value 2', DataType.string, undefined, true, false, true,
        // true, new Sort('val2', true), true, undefined));
        // this.colOptions.push(new ColumnOptions('val3', 'Value 3', DataType.string, undefined, true, false, true,
        // true, new Sort('val3', true), true, undefined));
        // this.colOptions.push(new ColumnOptions('val4', 'Value 4', DataType.number, undefined, true, false, true,
        // true, new Sort('val4', true), true, undefined));
        // this.tableOptions = new TableOptions(this.colOptions, new Query('test', new TableQuery(10, 0, [], [])));
        // this.styles = { 'font-size' : '20px', 'color': 'gray'};
    }
    // title = 'app';
    // colOptions: Array<ColumnOptions> = [];
    // randomData: Array<Object> = [];
    // sparkData = [];
    // tableOptions: TableOptions;
    // splineOptions = new SplineOptions('Annual Income');
    // count = 0;
    // counter = 0;
    // value = new GaugeData(50, 60, 70);
    // guageOptions = new GaugeOptions('Profit', 20, '$', undefined, 0, 100, 10);
    // styles: Object;
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-root1',
        template: __webpack_require__("../../../../../src/app/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_interval_service__["a" /* IntervalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_interval_service__["a" /* IntervalService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/base-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseTemplateComponent = (function () {
    function BaseTemplateComponent(logService) {
        this.logService = logService;
    }
    return BaseTemplateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__defs_track_type__["a" /* TrackType */])(String),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], BaseTemplateComponent.prototype, "componentID", void 0);
BaseTemplateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-query-widget',
        template: "\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */]) === "function" && _a || Object])
], BaseTemplateComponent);

var _a;
//# sourceMappingURL=base-template.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/container-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerTemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_template_component__ = __webpack_require__("../../../../../src/app/components/base-template.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContainerTemplateComponent = (function (_super) {
    __extends(ContainerTemplateComponent, _super);
    function ContainerTemplateComponent(logService) {
        var _this = _super.call(this, logService) || this;
        /**
       * Window close event emitter
      */
        _this.onClose = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        /**
         * Window minimize event emitter
         */
        _this.onMinimize = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        return _this;
    }
    ContainerTemplateComponent.prototype.onCloseComponent = function () {
        this.onClose.emit(this);
    };
    ContainerTemplateComponent.prototype.onMinimizeComponent = function () {
        this.onMinimize.emit(this);
    };
    return ContainerTemplateComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_template_component__["a" /* BaseTemplateComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__app_defs_track_type__["a" /* TrackType */])(String),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], ContainerTemplateComponent.prototype, "heading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__app_defs_track_type__["a" /* TrackType */])(String),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], ContainerTemplateComponent.prototype, "shortname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__app_defs_track_type__["a" /* TrackType */])(String),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], ContainerTemplateComponent.prototype, "icon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ContainerTemplateComponent.prototype, "onClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ContainerTemplateComponent.prototype, "onMinimize", void 0);
ContainerTemplateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-query-widget',
        template: "\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */]) === "function" && _c || Object])
], ContainerTemplateComponent);

var _a, _b, _c;
//# sourceMappingURL=container-template.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/container-templates/dashboard-container/dashboard-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dx-clearfix\">\n    <div class=\"icon-vertical_align_bottom mini-btn pointer\" (click)=\"onMinimizeComponent()\"></div>\n    <div class=\"icon-close close-btn pointer\" (click)=\"onCloseComponent()\"></div>\n    <dx-tile-view class=\"dx-tile-content\" direction=\"vertical\">\n        <dxi-item [widthRatio]=\"comp.size.width\" [heightRatio]=\"comp.size.height\" *ngFor='let comp of componentDefList' [hasPermission]=\"comp.permissions.permissionGroups\">\n            <app-dcl-wrapper [componentDef]=\"comp\"></app-dcl-wrapper>\n        </dxi-item>\n    </dx-tile-view>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/container-templates/dashboard-container/dashboard-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dx-widget {\n  font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/container-templates/dashboard-container/dashboard-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_utils__ = __webpack_require__("../../../../../src/app/utilities/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_permission_manager_service__ = __webpack_require__("../../../../../src/app/services/permission-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_context_service__ = __webpack_require__("../../../../../src/app/services/user-context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_container_template_component__ = __webpack_require__("../../../../../src/app/components/container-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardContainerComponent = (function (_super) {
    __extends(DashboardContainerComponent, _super);
    function DashboardContainerComponent(logService, _userContext, differs, _permissionMan) {
        var _this = _super.call(this, logService) || this;
        _this._userContext = _userContext;
        _this._permissionMan = _permissionMan;
        _this.componentDefList = [];
        _this.differ = differs.find([]).create(null);
        if (_this.componentDefIDList === undefined) {
            return _this;
        }
        _this.updateComponentDefs();
        return _this;
    }
    DashboardContainerComponent.prototype.ngOnInit = function () {
    };
    DashboardContainerComponent.prototype.ngDoCheck = function () {
        var change = this.differ.diff(this.componentDefIDList);
        if (change) {
            this.updateComponentDefs();
        }
    };
    DashboardContainerComponent.prototype.updateComponentDefs = function () {
        var _this = this;
        this.componentDefIDList.forEach(function (id) {
            var def = _this._userContext.findWidgetDef(id);
            if (!__WEBPACK_IMPORTED_MODULE_0__utilities_utils__["e" /* isUndefined */](def) && _this._permissionMan.hasOnePermission(def.permissions.permissionGroups)) {
                _this.componentDefList.push(def);
            }
        });
    };
    return DashboardContainerComponent;
}(__WEBPACK_IMPORTED_MODULE_4__components_container_template_component__["a" /* ContainerTemplateComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__app_defs_track_type__["a" /* TrackType */])('WIDGET_TEMPLATES'),
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DashboardContainerComponent.prototype, "componentDefIDList", void 0);
DashboardContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-dashboard-container',
        template: __webpack_require__("../../../../../src/app/components/container-templates/dashboard-container/dashboard-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/container-templates/dashboard-container/dashboard-container.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_log_service__["a" /* LogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_context_service__["a" /* UserContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_context_service__["a" /* UserContextService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_core__["IterableDiffers"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_core__["IterableDiffers"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_permission_manager_service__["a" /* PermissionManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_permission_manager_service__["a" /* PermissionManagerService */]) === "function" && _d || Object])
], DashboardContainerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/container-templates/query-container/query-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dx-clearfix\">\n    <div class=\"icon-vertical_align_bottom mini-btn pointer\" (click)=\"onMinimizeComponent()\"></div>\n    <div class=\"icon-close close-btn pointer\" (click)=\"onCloseComponent()\"></div>\n    <div class=\"container\">\n        <app-dcl-wrapper [componentDef]=\"queryDef\"></app-dcl-wrapper>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/container-templates/query-container/query-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding: 30px 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/container-templates/query-container/query-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_permission_manager_service__ = __webpack_require__("../../../../../src/app/services/permission-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_context_service__ = __webpack_require__("../../../../../src/app/services/user-context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_container_template_component__ = __webpack_require__("../../../../../src/app/components/container-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QueryContainerComponent = (function (_super) {
    __extends(QueryContainerComponent, _super);
    function QueryContainerComponent(_logService, _userContext, _permissionMan) {
        var _this = _super.call(this, _logService) || this;
        _this._userContext = _userContext;
        _this._permissionMan = _permissionMan;
        return _this;
    }
    QueryContainerComponent.prototype.ngOnInit = function () {
        this.queryDef = this._userContext.findQueryDef(this.componentDefID);
    };
    return QueryContainerComponent;
}(__WEBPACK_IMPORTED_MODULE_4__components_container_template_component__["a" /* ContainerTemplateComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__defs_track_type__["a" /* TrackType */])('QUERY_TEMPLATES'),
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
    __metadata("design:type", String)
], QueryContainerComponent.prototype, "componentDefID", void 0);
QueryContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-query-container',
        template: __webpack_require__("../../../../../src/app/components/container-templates/query-container/query-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/container-templates/query-container/query-container.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_log_service__["a" /* LogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_context_service__["a" /* UserContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_context_service__["a" /* UserContextService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_permission_manager_service__["a" /* PermissionManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_permission_manager_service__["a" /* PermissionManagerService */]) === "function" && _c || Object])
], QueryContainerComponent);

var _a, _b, _c;
//# sourceMappingURL=query-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dcl-wrapper/dcl-wrapper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DclWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_component_store__ = __webpack_require__("../../../../../src/app/services/component-store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defs_component_def__ = __webpack_require__("../../../../../src/app/defs/component-def.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DclWrapperComponent = (function () {
    function DclWrapperComponent(componentFactoryResolver, cdRef, _compStore) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cdRef = cdRef;
        this._compStore = _compStore;
        this.isViewInitialized = false;
    }
    DclWrapperComponent.prototype.updateComponent = function () {
        var _this = this;
        if (!this.isViewInitialized) {
            return;
        }
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        if (!this._compStore.contains(this.componentDef.name)) {
            return;
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(this._compStore.findComponentByName(this.componentDef.name));
        this.target.clear();
        this.cmpRef = this.target.createComponent(factory);
        this.componentDef.inputs.forEach(function (key, val) {
            _this.cmpRef.instance[key] = val;
        });
        this.cmpRef.instance['componentDef'] = this.componentDef;
        this.cdRef.detectChanges();
    };
    DclWrapperComponent.prototype.ngOnChanges = function () {
        this.updateComponent();
    };
    DclWrapperComponent.prototype.ngAfterViewInit = function () {
        this.isViewInitialized = true;
        this.updateComponent();
    };
    DclWrapperComponent.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    };
    return DclWrapperComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('target', { read: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", Object)
], DclWrapperComponent.prototype, "target", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__defs_component_def__["a" /* ComponentDef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__defs_component_def__["a" /* ComponentDef */]) === "function" && _a || Object)
], DclWrapperComponent.prototype, "componentDef", void 0);
DclWrapperComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-dcl-wrapper',
        template: "\n    <div #target></div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ComponentFactoryResolver"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_component_store__["a" /* ComponentStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_component_store__["a" /* ComponentStore */]) === "function" && _d || Object])
], DclWrapperComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dcl-wrapper.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" id=\"main-container\" class=\"dx-clearfix\">\n    <div fxFlex=\"60px\" id=\"header\">\n        <div class=\"pull-left\" id=\"logo_image\"></div>\n        <div class=\"pull-left\" id=\"window-title\">{{activeTitle}}</div>\n\n        <div class=\"dx-field\">\n            <app-u-icon-btn class=\"pull-right\" iconClass=\"dx-icon-preferences\" [size]=\"60\" bakColor=\"transparent\" (click)=\"openPreferencesWnd()\"></app-u-icon-btn>\n            <app-u-icon-btn class=\"pull-right\" iconClass=\"dx-icon-user\" [size]=\"60\" bakColor=\"transparent\" (click)=\"onStartMenuOpen()\"></app-u-icon-btn>\n            <app-u-icon-btn class=\"pull-right\" iconClass=\"icon-notifications\" [size]=\"60\" bakColor=\"transparent\" (click)=\"onStartMenuOpen()\"></app-u-icon-btn>\n            <div class=\"dx-field-value search-widget\">\n                <dx-autocomplete placeholder=\"Search in start menu ...\" width=\"280\" [(value)]=\"searchValue\" [dataSource]=\"containerDefList\" displayExpr=\"inputs.shortname\" valueExpr=\"this\" showClearButton=\"true\" (onItemClick)=\"searchWidget($event)\">\n                </dx-autocomplete>\n            </div>\n        </div>\n    </div>\n    <div fxFlex=\"grow\" id=\"container-body\">\n        <div #mainbody></div>\n    </div>\n    <div fxFlex=\"60px\" id=\"footer\">\n        <app-u-icon-btn class=\"pull-left task-item\" iconClass=\"icon-desktop_windows\" [size]=\"60\" bakColor=\"#44A2D5\" color=\"white\" (click)=\"onStartMenuOpen()\"></app-u-icon-btn>\n        <app-u-icon-btn class=\"pull-left\" [isSelected]=\"activeIndex === i\" [iconClass]=\"def.inputs.icon\" [size]=\"60\" bakColor=\"#dddddd\" (click)=\"maximizeComponent(i, def)\" *ngFor=\"let def of minimizedDefs; let i = index\" [hasPermission]=\"def.permissions.permissionGroups\"></app-u-icon-btn>\n\n        <app-system-info class=\"pull-right system-info\"></app-system-info>\n    </div>\n</div>\n\n<app-u-popup></app-u-popup>"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-container {\n  height: 100% !important; }\n  #main-container #header {\n    height: 60px; }\n  #main-container #footer {\n    height: 60px; }\n    #main-container #footer .task-item {\n      margin-right: 3px; }\n  #main-container #window-title {\n    font-size: 25px;\n    height: 60px;\n    line-height: 60px;\n    padding: 0px 15px; }\n  #main-container #container-body {\n    margin: 5px;\n    margin-bottom: 0px;\n    height: 100vh -120px;\n    overflow: auto; }\n  #main-container #logo_image {\n    height: 93%;\n    width: 174px;\n    background-size: contain;\n    margin: 3px 15px; }\n  #main-container .search-widget {\n    width: 280px;\n    margin: 8px 12px; }\n  #main-container .system-info {\n    height: 100%; }\n  #main-container .dx-field {\n    padding: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_context_service__ = __webpack_require__("../../../../../src/app/services/user-context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component_store__ = __webpack_require__("../../../../../src/app/services/component-store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defs_action__ = __webpack_require__("../../../../../src/app/defs/action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defs_size__ = __webpack_require__("../../../../../src/app/defs/size.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_unit_u_popup_u_popup_component__ = __webpack_require__("../../../../../src/app/components/unit/u-popup/u-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_popup_driver_service__ = __webpack_require__("../../../../../src/app/services/popup-driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__defs_component_def__ = __webpack_require__("../../../../../src/app/defs/component-def.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__defs_dynamic_msg__ = __webpack_require__("../../../../../src/app/defs/dynamic-msg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_start_menu_start_menu_component__ = __webpack_require__("../../../../../src/app/components/start-menu/start-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utilities_utils__ = __webpack_require__("../../../../../src/app/utilities/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MainComponent = (function () {
    function MainComponent(_componentFactoryResolver, _cdRef, _renderer, _popupDriver, _compStore, _userContext) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._cdRef = _cdRef;
        this._renderer = _renderer;
        this._popupDriver = _popupDriver;
        this._compStore = _compStore;
        this._userContext = _userContext;
        this.activeIndex = -1;
        this._isViewInitialized = false;
        this._isComponentMaximized = false;
        this.minimizedDefs = [];
        this._minimizedComponents = [];
        this.containerDefList = _userContext.containerComponantInsts;
    }
    MainComponent.prototype.createComponent = function (componentType, inputs, def) {
        console.log('createComponent: ', def, this._isViewInitialized);
        if (!this._isViewInitialized) {
            return;
        }
        if (this._activeComponent !== undefined) {
            this._renderer.setElementStyle(this._activeComponent.location.nativeElement, 'display', 'none');
        }
        var factory = this._componentFactoryResolver.resolveComponentFactory(componentType);
        var compRef = this.mainbody.createComponent(factory);
        inputs.forEach(function (key, val) {
            compRef.instance[key] = val;
        });
        compRef.instance['componentDef'] = def;
        this._activeComponent = compRef;
        this._cdRef.detectChanges();
        return compRef;
    };
    MainComponent.prototype.onMinimizeComponent = function () {
        if (this.activeIndex === 0) {
            this.onStartMenuOpen();
        }
        else {
            this.openExistingComponent(this._minimizedComponents[this.activeIndex - 1], this.minimizedDefs[this.activeIndex - 1]);
        }
        this.activeIndex--;
    };
    MainComponent.prototype.onCloseComponent = function () {
        this.onMinimizeComponent();
        this._minimizedComponents.splice(this.activeIndex + 1, 1);
        this.minimizedDefs.splice(this.activeIndex + 1, 1);
    };
    MainComponent.prototype.ngAfterViewInit = function () {
        this._isViewInitialized = true;
        this.onStartMenuOpen();
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.mainbody.clear();
    };
    MainComponent.prototype.onStartMenuOpen = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_10__utilities_utils__["e" /* isUndefined */](this._startMenuRef)) {
            this._startMenuRef = this.createComponent(__WEBPACK_IMPORTED_MODULE_8__components_start_menu_start_menu_component__["a" /* StartMenuComponent */], new __WEBPACK_IMPORTED_MODULE_7__defs_dynamic_msg__["a" /* DynamicMsg */](), undefined);
            this._startMenuRef.instance['onSelectContainer'].subscribe(function (def) {
                _this.createContainerComp(def);
            });
        }
        else {
            this.openExistingComponent(this._startMenuRef, undefined);
        }
        this.activeTitle = undefined;
        this.activeIndex = -1;
    };
    MainComponent.prototype.openExistingComponent = function (newComponent, newComponentDef) {
        if (this._activeComponent !== undefined) {
            this._renderer.setElementStyle(this._activeComponent.location.nativeElement, 'display', 'none');
        }
        this._renderer.setElementStyle(newComponent.location.nativeElement, 'display', 'block');
        this.activeComponentDef = newComponentDef;
        this._activeComponent = newComponent;
        if (!__WEBPACK_IMPORTED_MODULE_10__utilities_utils__["e" /* isUndefined */](newComponentDef)) {
            this.activeTitle = newComponentDef.inputs['shortname'];
        }
    };
    MainComponent.prototype.maximizeComponent = function (index, newComponentDef) {
        this.openExistingComponent(this._minimizedComponents[index], newComponentDef);
        this.activeIndex = index;
        this._isComponentMaximized = true;
    };
    MainComponent.prototype.openPreferencesWnd = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_4__components_unit_u_popup_u_popup_component__["a" /* PopupOptions */]('User Preferences');
        options.size = new __WEBPACK_IMPORTED_MODULE_3__defs_size__["a" /* Size */]('60%', '80%');
        this._popupDriver.openPopup(options, new __WEBPACK_IMPORTED_MODULE_6__defs_component_def__["a" /* ComponentDef */]('UserPreferencesComponent', 'UserPreferencesComponent', new __WEBPACK_IMPORTED_MODULE_3__defs_size__["a" /* Size */]('300', '300'), new __WEBPACK_IMPORTED_MODULE_7__defs_dynamic_msg__["a" /* DynamicMsg */]()), [
            new __WEBPACK_IMPORTED_MODULE_2__defs_action__["a" /* Action */]('Close', false, function (action) { }, 'normal', true)
        ]);
    };
    MainComponent.prototype.searchWidget = function (event) {
        this.createContainerComp(event.itemData);
        this.searchValue = undefined;
    };
    MainComponent.prototype.createContainerComp = function (def) {
        var _this = this;
        console.log('Clicked open component: ', def);
        if (def instanceof __WEBPACK_IMPORTED_MODULE_6__defs_component_def__["a" /* ComponentDef */]) {
            console.log('ComponentDef instanceof: ', def);
            if (!this._compStore.contains(def.name)) {
                console.log('Not nomponentDef contains: ', def);
                return;
            }
            this.createComponent(this._compStore.findComponentByName(def.name), def.inputs, def);
            this.activeComponentDef = def;
            this._isComponentMaximized = false;
            this.activeTitle = def.inputs['shortname'];
            this.activeIndex = this.minimizedDefs.length;
            this.minimizedDefs.push(this.activeComponentDef);
            this._minimizedComponents.push(this._activeComponent);
            this._activeComponent.instance['onMinimize'].subscribe(function (comp) {
                _this.onMinimizeComponent();
            });
            this._activeComponent.instance['onClose'].subscribe(function (comp) {
                _this.onCloseComponent();
            });
        }
    };
    return MainComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewChild"])('mainbody', { read: __WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", Object)
], MainComponent.prototype, "mainbody", void 0);
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/main.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_core__["ComponentFactoryResolver"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_core__["Renderer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_popup_driver_service__["a" /* PopupDriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_popup_driver_service__["a" /* PopupDriverService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_component_store__["a" /* ComponentStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_component_store__["a" /* ComponentStore */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_context_service__["a" /* UserContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_context_service__["a" /* UserContextService */]) === "function" && _f || Object])
], MainComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/query-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryTemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_template_component__ = __webpack_require__("../../../../../src/app/components/base-template.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueryTemplateComponent = (function (_super) {
    __extends(QueryTemplateComponent, _super);
    function QueryTemplateComponent(logService) {
        return _super.call(this, logService) || this;
    }
    return QueryTemplateComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_template_component__["a" /* BaseTemplateComponent */]));
QueryTemplateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-query-widget',
        template: "\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_log_service__["a" /* LogService */]) === "function" && _a || Object])
], QueryTemplateComponent);

var _a;
//# sourceMappingURL=query-template.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/query-templates/advance-query-table/advance-query-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"search-container\">\n        <app-search-box [columns]=\"colOptions\" style=\"width: 100%;\" (onQuery)=\"onFilterQuery($event)\"></app-search-box>\n    </div>\n\n    <app-u-table [tableOptions]=\"tableOptions\"></app-u-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/query-templates/advance-query-table/advance-query-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dx-datagrid {\n  padding: 10px 10px; }\n\n.search-container {\n  margin: 20px 20px 5px 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/query-templates/advance-query-table/advance-query-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceQueryTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_utils__ = __webpack_require__("../../../../../src/app/utilities/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_query_template_component__ = __webpack_require__("../../../../../src/app/components/query-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_unit_u_table_u_table_component__ = __webpack_require__("../../../../../src/app/components/unit/u-table/u-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__defs_query__ = __webpack_require__("../../../../../src/app/defs/query.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdvanceQueryTableComponent = (function (_super) {
    __extends(AdvanceQueryTableComponent, _super);
    function AdvanceQueryTableComponent(logService) {
        return _super.call(this, logService) || this;
    }
    AdvanceQueryTableComponent.prototype.ngOnInit = function () {
        this.queryCopy = new __WEBPACK_IMPORTED_MODULE_6__defs_query__["a" /* Query */](this.query.path, __WEBPACK_IMPORTED_MODULE_0__utilities_utils__["a" /* deepCopy */](this.query.params));
        this.tableOptions = new __WEBPACK_IMPORTED_MODULE_5__components_unit_u_table_u_table_component__["a" /* TableOptions */](this.colOptions, this.queryCopy);
    };
    AdvanceQueryTableComponent.prototype.onFilterQuery = function (queryStr) {
        this.queryCopy.params.filterString = queryStr;
        this.utable.refresh();
    };
    return AdvanceQueryTableComponent;
}(__WEBPACK_IMPORTED_MODULE_2__components_query_template_component__["a" /* QueryTemplateComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__defs_track_type__["a" /* TrackType */])(Array),
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AdvanceQueryTableComponent.prototype, "colOptions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__defs_track_type__["a" /* TrackType */])(__WEBPACK_IMPORTED_MODULE_6__defs_query__["a" /* Query */]),
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__defs_query__["a" /* Query */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__defs_query__["a" /* Query */]) === "function" && _a || Object)
], AdvanceQueryTableComponent.prototype, "query", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__components_unit_u_table_u_table_component__["b" /* UTableComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__components_unit_u_table_u_table_component__["b" /* UTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__components_unit_u_table_u_table_component__["b" /* UTableComponent */]) === "function" && _b || Object)
], AdvanceQueryTableComponent.prototype, "utable", void 0);
AdvanceQueryTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-advance-query-table',
        template: __webpack_require__("../../../../../src/app/components/query-templates/advance-query-table/advance-query-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/query-templates/advance-query-table/advance-query-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */]) === "function" && _c || Object])
], AdvanceQueryTableComponent);

var _a, _b, _c;
//# sourceMappingURL=advance-query-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/start-menu/start-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<dx-tile-view class=\"dx-tile-content start-menu\" direction=\"vertical\" [dataSource]=\"dataSource\" itemTemplate=\"tile\">\n    <div *dxTemplate=\"let comp of 'tile'\" [hasPermission]=\"comp.data.permissions.permissionGroups\">\n        <app-u-icon-btn [iconClass]=\"comp.data.inputs.icon\" [size]=\"98\" bakColor=\"white\" [text]=\"comp.data.inputs.heading\" (click)=\"openComponent(comp.data)\"></app-u-icon-btn>\n    </div>\n</dx-tile-view>\n\n<!-- <div [ngGrid]=\"gridHelper.options\">\n    <div *ngFor=\"let cp of dataSource\" [(ngGridItem)]=\"cp.config\" [hasPermission]=\"cp.data.permissions.permissionGroups\">\n        <app-u-icon-btn [iconClass]=\"cp.data.inputs.icon\" [size]=\"98\" bakColor=\"white\" [text]=\"cp.data.inputs.heading\" (click)=\"openComponent(cp.data)\"></app-u-icon-btn>\n    </div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/components/start-menu/start-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".start-menu {\n  height: 100% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/start-menu/start-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_size__ = __webpack_require__("../../../../../src/app/defs/size.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_grid_helper__ = __webpack_require__("../../../../../src/app/services/grid-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_permission_manager_service__ = __webpack_require__("../../../../../src/app/services/permission-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_context_service__ = __webpack_require__("../../../../../src/app/services/user-context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StartMenuComponent = (function () {
    function StartMenuComponent(_userContext, _permissionMan, differs) {
        var _this = this;
        this._userContext = _userContext;
        this._permissionMan = _permissionMan;
        this.dataSource = [];
        /**
         * Start menu item select callback
         */
        this.onSelectContainer = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]();
        this.gridHelper = new __WEBPACK_IMPORTED_MODULE_1__services_grid_helper__["a" /* GridHelper */]({
            'min_width': 50,
            'col_width': 98,
            'row_height': 98,
            'draggable': false,
            'resizable': false
        });
        this.containerDefList = _userContext.containerComponantInsts;
        this.containerDefList.forEach(function (el) {
            _this.addComponentDefToDatasource(el);
        });
        this.differ = differs.find([]).create(null);
    }
    StartMenuComponent.prototype.ngOnInit = function () {
    };
    StartMenuComponent.prototype.openComponent = function (compDef) {
        console.log('Clicked open component: ', compDef);
        this.onSelectContainer.emit(compDef);
    };
    StartMenuComponent.prototype.OnAuthorizedPermission = function (element) {
        element.nativeElement.parentNode.style.visibility = 'inherit';
    };
    StartMenuComponent.prototype.OnUnauthorizedPermission = function (element) {
        element.nativeElement.parentNode.style.visibility = 'hidden';
    };
    StartMenuComponent.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this.differ.diff(this.containerDefList);
        if (changes) {
            changes.forEachAddedItem(function (r) {
                _this.addComponentDefToDatasource(r.item);
            });
            // Handle dynamic remove
            // changes.forEachRemovedItem(r => this.logs.push('removed ' + r.item))
        }
    };
    StartMenuComponent.prototype.addComponentDefToDatasource = function (def) {
        if (this._permissionMan.hasOnePermission(def.permissions.permissionGroups)) {
            this.dataSource.push(this.gridHelper.createGridItem(def, new __WEBPACK_IMPORTED_MODULE_0__defs_size__["a" /* Size */]('1', '1')));
        }
    };
    return StartMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]) === "function" && _a || Object)
], StartMenuComponent.prototype, "onSelectContainer", void 0);
StartMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-start-menu',
        template: __webpack_require__("../../../../../src/app/components/start-menu/start-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/start-menu/start-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_context_service__["a" /* UserContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_context_service__["a" /* UserContextService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_permission_manager_service__["a" /* PermissionManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_permission_manager_service__["a" /* PermissionManagerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["IterableDiffers"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["IterableDiffers"]) === "function" && _d || Object])
], StartMenuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=start-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/system-info/system-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_time_utils__ = __webpack_require__("../../../../../src/app/utilities/time-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_interval_service__ = __webpack_require__("../../../../../src/app/services/interval.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemInfoComponent = (function () {
    function SystemInfoComponent(_intervalService) {
        this._intervalService = _intervalService;
    }
    SystemInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTimeStr();
        this._intervalService.setInterval(function () {
            _this.setTimeStr();
        }, 1);
    };
    SystemInfoComponent.prototype.setTimeStr = function () {
        this.timestr = __WEBPACK_IMPORTED_MODULE_0__utilities_time_utils__["a" /* TimeUtils */].currentTime('MM/DD/YYYY hh:mm:ss');
    };
    return SystemInfoComponent;
}());
SystemInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-system-info',
        template: "\n  <div class=\"pull-right\" id=\"info-widget\">\n    <div class=\"row\">ustocktest</div>\n    <div class=\"h-seperator\"></div>\n    <div class=\"row\">{{timestr}}</div>\n  </div>\n  ",
        styles: ["\n    #info-widget {\n      width: 150px;\n      height: 100%;\n      background-color: #6d6d78;\n      color: white;\n      text-align: center;\n    }\n\n    .row {\n      line-height: 28px;\n    }\n"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_interval_service__["a" /* IntervalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_interval_service__["a" /* IntervalService */]) === "function" && _a || Object])
], SystemInfoComponent);

var _a;
//# sourceMappingURL=system-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/template-creator/template-creator.component.html":
/***/ (function(module, exports) {

module.exports = "<dx-select-box [items]=\"templateDefs\" [value]=\"updatingTemplate.name\" (onValueChanged)=\"onWidgetTemplateSelect($event)\" displayExpr=\"name\" valueExpr=\"name\"></dx-select-box>\n<form action=\"\" class=\"u-form\" (submit)=\"onAddWidgetTemplate($event)\" *ngIf=\"updatingTemplate !== undefined && updatingTemplate.name !== undefined\">\n    <dx-form [id]=\"formID\" [(formData)]=\"updatingTemplate\" [readOnly]=\"false\" [showColonAfterLabel]=\"false\" [showValidationSummary]=\"false\" [validationGroup]=\"validationGroup\" [colCount]=\"2\">\n\n\n        <dxi-item itemType=\"group\" caption=\"Size\">\n            <dxi-item dataField=\"size.width\" editorType=\"dxTextBox\" [label]=\"{text: 'Width'}\">\n                <dxi-validation-rule type=\"required\" message=\"Required field\"></dxi-validation-rule>\n            </dxi-item>\n            <dxi-item dataField=\"size.height\" editorType=\"dxTextBox\" [label]=\"{text: 'Height'}\">\n                <dxi-validation-rule type=\"required\" message=\"Required field\"></dxi-validation-rule>\n            </dxi-item>\n        </dxi-item>\n        <dxi-item itemType=\"group\" caption=\"Permissions\" [colSpan]=\"2\">\n            <dxi-item dataField=\"permissions.permissionGroups\" editorType=\"dxTagBox\" [editorOptions]=\"permissionOptions\" [label]=\"{text: 'Groups'}\">\n                <dxi-validation-rule type=\"required\" message=\"Required field\"></dxi-validation-rule>\n            </dxi-item>\n            <dxi-item dataField=\"permissions.isExcept\" editorType=\"dxCheckBox\" [label]=\"{text: 'Excepted'}\">\n            </dxi-item>\n        </dxi-item>\n        <dxi-item itemType=\"group\" [caption]=\"row.group\" *ngFor=\"let row of selectedInputs\" [colSpan]=\"2\">\n            <dxi-item [dataField]=\"'inputs.' + entry.name\" [editorType]=\"getEditorType(entry.dataType)\" *ngFor=\"let entry of row.inputDefList\" [editorOptions]=\"entry.options\" [colSpan]=\"2\" [label]=\"{text: toTitleStr(entry.leafName)}\">\n                <dxi-validation-rule type=\"required\" message=\"Required field\"></dxi-validation-rule>\n            </dxi-item>\n        </dxi-item>\n    </dx-form>\n    <br />\n    <dx-button text=\"Add\" type=\"success\" [validationGroup]=\"validationGroup\" [useSubmitBehavior]=\"true\">\n    </dx-button>\n</form>\n<div [hidden]=\"true\" #dummy></div>"

/***/ }),

/***/ "../../../../../src/app/components/template-creator/template-creator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".u-form {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/template-creator/template-creator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateCreatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_component_store__ = __webpack_require__("../../../../../src/app/services/component-store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_permission_manager_service__ = __webpack_require__("../../../../../src/app/services/permission-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_context_service__ = __webpack_require__("../../../../../src/app/services/user-context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defs_dynamic_msg__ = __webpack_require__("../../../../../src/app/defs/dynamic-msg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defs_size__ = __webpack_require__("../../../../../src/app/defs/size.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__defs_component_def__ = __webpack_require__("../../../../../src/app/defs/component-def.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__defs_input_def_group__ = __webpack_require__("../../../../../src/app/defs/input-def-group.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__defs_input_def__ = __webpack_require__("../../../../../src/app/defs/input-def.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utilities_utils__ = __webpack_require__("../../../../../src/app/utilities/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_devextreme_data_array_store__ = __webpack_require__("../../../../devextreme/data/array_store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_devextreme_data_array_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_devextreme_data_array_store__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var compScope;
var TemplateCreatorComponent = (function () {
    function TemplateCreatorComponent(_userContext, _resolver, _log, _permissionManager, _compStore) {
        this._userContext = _userContext;
        this._resolver = _resolver;
        this._log = _log;
        this._permissionManager = _permissionManager;
        this._compStore = _compStore;
        this.validationGroup = __WEBPACK_IMPORTED_MODULE_10__utilities_utils__["c" /* getRandomInt */](0, 100);
        this.selectedInputs = new Array();
        this.updatingTemplate = new __WEBPACK_IMPORTED_MODULE_6__defs_component_def__["a" /* ComponentDef */](undefined, undefined, new __WEBPACK_IMPORTED_MODULE_5__defs_size__["a" /* Size */]('2', '1'), undefined);
        compScope = this;
        var dataSource = new __WEBPACK_IMPORTED_MODULE_11_devextreme_data_array_store___default.a({
            data: this._permissionManager.getAllowedPermissions(),
        });
        this.permissionOptions = {
            'dataSource': dataSource,
            'acceptCustomValue': true,
            'onCustomItemCreating': function (args) {
                var newValue = args.text, component = args.component, currentItems = component.option('items');
                currentItems.unshift(newValue);
                component.option('items', currentItems);
                compScope._permissionManager.addPermission(newValue);
                return newValue;
            }
        };
    }
    TemplateCreatorComponent.prototype.ngOnInit = function () {
    };
    TemplateCreatorComponent.prototype.onWidgetTemplateSelect = function (event) {
        this.updatingTemplate = new __WEBPACK_IMPORTED_MODULE_6__defs_component_def__["a" /* ComponentDef */](undefined, event.value, new __WEBPACK_IMPORTED_MODULE_5__defs_size__["a" /* Size */]('2', '1'), new __WEBPACK_IMPORTED_MODULE_4__defs_dynamic_msg__["a" /* DynamicMsg */]());
        this.loadInputTypes(event.value);
    };
    TemplateCreatorComponent.prototype.loadInputTypes = function (compName) {
        var comp = this._compStore.findComponentByName(compName);
        if (__WEBPACK_IMPORTED_MODULE_10__utilities_utils__["e" /* isUndefined */](comp)) {
            return;
        }
        var factory = this._resolver.resolveComponentFactory(comp);
        var dummyComp = this.dummy.createComponent(factory);
        for (var key in factory.inputs) {
            if (factory.inputs.hasOwnProperty(key)) {
                var info = Reflect.getMetadata('design:type', dummyComp.instance, factory.inputs[key].propName);
                if (this.isPrimitive(info.name)) {
                    this.selectedInputs.push(new __WEBPACK_IMPORTED_MODULE_7__defs_input_def_group__["a" /* InputDefGroup */](undefined, [new __WEBPACK_IMPORTED_MODULE_8__defs_input_def__["a" /* InputDef */](factory.inputs[key].propName, info.name, undefined, undefined)]));
                }
                else if (!this.handleSpecialType(factory.inputs[key].propName, info, this.selectedInputs)) {
                    this.handleObjectTypes(info, factory.inputs[key].propName, this.selectedInputs);
                }
            }
        }
        this.dummy.clear();
    };
    TemplateCreatorComponent.prototype.onAddWidgetTemplate = function ($event) {
        var _this = this;
        $event.preventDefault();
        this.updatingTemplate.id = this.updatingTemplate.inputs['componentID'];
        this.selectedInputs.forEach(function (val) {
            val.inputDefList.forEach(function (val2) {
                if (val2.dataType === 'Object' || val2.dataType === 'Array') {
                    try {
                        if (val2.group === undefined) {
                            _this.updatingTemplate.inputs[val2.leafName] = JSON.parse(_this.updatingTemplate.inputs[val2.leafName]);
                        }
                        else {
                            _this.updatingTemplate.inputs[val2.group][val2.leafName] = JSON.parse(_this.updatingTemplate.inputs[val2.group][val2.leafName]);
                        }
                    }
                    catch (e) {
                        _this._log.printError('Failed to convert to JSON', e);
                    }
                }
            });
        });
        this.saveCB(this.updatingTemplate);
        this.clearAdd();
    };
    TemplateCreatorComponent.prototype.getEditorType = function (dataType) {
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
    };
    TemplateCreatorComponent.prototype.isPrimitive = function (dataType) {
        switch (dataType) {
            case 'String':
            case 'Number':
            case 'Date':
            case 'Boolean':
            case 'Array':
                return true;
        }
        return false;
    };
    TemplateCreatorComponent.prototype.handleSpecialType = function (propName, info, inputs) {
        if (info === 'WIDGET_TEMPLATES') {
            var dataSource = new __WEBPACK_IMPORTED_MODULE_11_devextreme_data_array_store___default.a({
                data: this._userContext.widgetTemplateInsts,
                key: 'id'
            });
            var options = { 'dataSource': dataSource, 'displayExpr': 'id', 'valueExpr': 'id' };
            this.selectedInputs.push(new __WEBPACK_IMPORTED_MODULE_7__defs_input_def_group__["a" /* InputDefGroup */](undefined, [new __WEBPACK_IMPORTED_MODULE_8__defs_input_def__["a" /* InputDef */](propName, 'MultiSelect', undefined, options)]));
            return true;
        }
        else if (info === 'QUERY_TEMPLATES') {
            var dataSource = new __WEBPACK_IMPORTED_MODULE_11_devextreme_data_array_store___default.a({
                data: this._userContext.queryComponantInsts,
                key: 'id'
            });
            var options = { 'dataSource': dataSource, 'displayExpr': 'id', 'valueExpr': 'id' };
            this.selectedInputs.push(new __WEBPACK_IMPORTED_MODULE_7__defs_input_def_group__["a" /* InputDefGroup */](undefined, [new __WEBPACK_IMPORTED_MODULE_8__defs_input_def__["a" /* InputDef */](propName, 'Select', undefined, options)]));
            return true;
        }
        return false;
    };
    TemplateCreatorComponent.prototype.handleObjectTypes = function (info, propName, inputs) {
        var inst = new info;
        var array = [];
        this.updatingTemplate.inputs[propName] = {};
        for (var para in inst) {
            if (inst.hasOwnProperty(para)) {
                var subInfo = Reflect.getMetadata('design:type', inst, para);
                array.push(new __WEBPACK_IMPORTED_MODULE_8__defs_input_def__["a" /* InputDef */](para, subInfo.name, propName, undefined));
            }
        }
        if (array.length > 0) {
            inputs.push(new __WEBPACK_IMPORTED_MODULE_7__defs_input_def_group__["a" /* InputDefGroup */](__WEBPACK_IMPORTED_MODULE_10__utilities_utils__["g" /* toTitleStr */](propName), array));
        }
    };
    TemplateCreatorComponent.prototype.clearAdd = function () {
        this.updatingTemplate = new __WEBPACK_IMPORTED_MODULE_6__defs_component_def__["a" /* ComponentDef */](undefined, undefined, new __WEBPACK_IMPORTED_MODULE_5__defs_size__["a" /* Size */]('2', '1'), undefined);
        this.selectedInputs.splice(0, this.selectedInputs.length);
    };
    TemplateCreatorComponent.prototype.toTitleStr = function (str) {
        return __WEBPACK_IMPORTED_MODULE_10__utilities_utils__["g" /* toTitleStr */](str);
    };
    return TemplateCreatorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TemplateCreatorComponent.prototype, "templateDefs", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Input"])(),
    __metadata("design:type", Function)
], TemplateCreatorComponent.prototype, "saveCB", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewChild"])('dummy', { read: __WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", Object)
], TemplateCreatorComponent.prototype, "dummy", void 0);
TemplateCreatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Component"])({
        selector: 'app-template-creator',
        template: __webpack_require__("../../../../../src/app/components/template-creator/template-creator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/template-creator/template-creator.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_context_service__["a" /* UserContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_context_service__["a" /* UserContextService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_core__["ComponentFactoryResolver"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_permission_manager_service__["a" /* PermissionManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_permission_manager_service__["a" /* PermissionManagerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_component_store__["a" /* ComponentStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_component_store__["a" /* ComponentStore */]) === "function" && _e || Object])
], TemplateCreatorComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=template-creator.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unit/bg-counter/bg-counter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgCounterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_interval_service__ = __webpack_require__("../../../../../src/app/services/interval.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Animated counter element
 * Size, animating speed and color comfigurable
 *
 */
var BgCounterComponent = (function () {
    function BgCounterComponent(intervalService) {
        this.intervalService = intervalService;
        /**
         * Animating speed can configure
         */
        this.interval = 10;
        /**
         * Counter Size
         */
        this.size = 30;
        /**
       * Custom Style class
       */
        this.styles = {};
        /**
         * This is the template display value
         */
        this.displayValue = 0;
    }
    BgCounterComponent.prototype.ngOnInit = function () {
        this.onSizeChange(this.size);
    };
    BgCounterComponent.prototype.onSizeChange = function (size) {
        if (this.size !== undefined) {
            this.styles['font-size.px'] = this.size;
        }
    };
    BgCounterComponent.prototype.onValueChange = function (value) {
        var _this = this;
        var target = parseInt(value, 10) || 0;
        var step = target < this.displayValue ? -1 : 1;
        this.timer = this.intervalService.setInterval(function () {
            if (_this.displayValue !== target) {
                _this.displayValue += step;
            }
            else {
                _this.intervalService.clearInterval(_this.timer);
            }
        }, this.interval);
    };
    BgCounterComponent.prototype.ngOnChanges = function (changes) {
        if (changes['value'] !== undefined) {
            this.intervalService.clearInterval(this.timer);
            this.onValueChange(changes['value'].currentValue);
        }
        if (changes['size'] !== undefined) {
            this.onSizeChange(changes['size'].currentValue);
        }
    };
    return BgCounterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Number)
], BgCounterComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BgCounterComponent.prototype, "interval", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BgCounterComponent.prototype, "size", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BgCounterComponent.prototype, "styles", void 0);
BgCounterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-bg-counter',
        template: "\n    <span class=\"bg-counter text-info-h1\" [ngStyle]=\"styles\">\n      {{displayValue}}\n    </span>\n  ",
        styles: [
            "\n        .bg-counter {\n          font-weight: bold;\n          padding : 5px 10px;\n          background: transparent;\n          color: #75c0e0;\n        }\n\n      "
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_interval_service__["a" /* IntervalService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_interval_service__["a" /* IntervalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_interval_service__["a" /* IntervalService */]) === "function" && _a || Object])
], BgCounterComponent);

var _a;
//# sourceMappingURL=bg-counter.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unit/search-box/search-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"search-box-container\">\n        <div class=\"editor-container inline\"><textarea #queryArea (click)=\"onQueryChange(queryArea)\" (keyup)=\"onQueryChange(queryArea)\" rows=\"1\" (keydown)=\"focusMenu($event)\" spellcheck=\"false\" [(ngModel)]=\"queryString\" (blur)=\"hidePopup(true)\" [ngClass]=\"{'error-bg': !isValidQuery}\" [attr.placeholder]=\"placeholder\"></textarea></div>\n        <div class=\"pointer inline search-btn\"><span class=\"k-icon k-i-zoom\" (click)=\"onQueryChange(queryArea)\"></span></div>\n        <div class=\"pointer inline search-status\"><span class=\"k-icon k-i-check-circle\"></span></div>\n        <div [hidden]=\"hideAutoComplete || suggessionList.length == 0\">\n            <div class=\"dropdown\">\n                <div *ngFor=\"let item of suggessionList let idx=index\">\n                    <div [tabindex]=\"idx\" class=\"element\" [appFocus]=\"idx == focusedIdx\" (click)=\"selectItem(item, queryArea)\" (keyup.enter)=\"selectItem(item, queryArea)\" (keydown)=\"focusMenu($event)\" (focus)=\"hidePopup(false)\">\n                        {{item.name}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/unit/search-box/search-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-box-container {\n  width: 100%; }\n\n.search-box-container textarea {\n  width: 100%;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  border-radius: 2px;\n  line-height: 30px;\n  font-size: 16px;\n  letter-spacing: 0.2px;\n  color: #3B73AF;\n  border: 1px solid #3B73AF;\n  box-shadow: 0px 0px 1px 1px #3B73AF;\n  border: none !important;\n  resize: none; }\n\n.editor-container {\n  width: 100%; }\n\n.search-btn {\n  float: right;\n  position: relative;\n  top: -30px;\n  right: 9px; }\n  .search-btn .k-icon {\n    font-size: 22px;\n    color: #3B73AF;\n    font-weight: 600; }\n\n.search-status {\n  float: left;\n  position: relative;\n  top: -30px;\n  right: 9px; }\n  .search-status .k-icon {\n    font-size: 22px;\n    color: #3B73AF;\n    font-weight: 600; }\n\ntextarea:focus {\n  outline: none; }\n\n.search-item {\n  display: inline-block; }\n\nul {\n  list-style-type: none; }\n\n.dropdown {\n  margin-top: -4px;\n  display: block;\n  box-shadow: 0 3px 6px rgba(111, 111, 111, 0.2);\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  max-height: 400px;\n  max-width: 250px;\n  min-width: 100px;\n  font-size: 14px;\n  z-index: 1000;\n  position: absolute; }\n\n.dropdown:focus {\n  border: 5px solid gray; }\n\n.element {\n  padding: 8px 10px;\n  border-bottom: 1px solid lightgray;\n  width: 100%;\n  z-index: 12001;\n  color: #3B73AF; }\n\n.element:focus {\n  background-color: cornflowerblue !important;\n  border-bottom: none;\n  color: white; }\n\n.element:hover {\n  background-color: cornflowerblue !important;\n  border-bottom: none;\n  color: white;\n  cursor: pointer; }\n\n.error-bg {\n  box-shadow: 0px 0px 1px 1px #ff4040 !important;\n  border: none !important; }\n\n.success-bg {\n  border: 2px solid #d2ffd2;\n  border-color: #008000;\n  box-shadow: 0 0 5px #008000;\n  -webkit-box-shadow: 0 0 5px #008000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/unit/search-box/search-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SelectionType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_service_query_provider__ = __webpack_require__("../../../../../src/app/services/service-query.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defs_name_field__ = __webpack_require__("../../../../../src/app/defs/name-field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_query_interface__ = __webpack_require__("../../../../../src/app/services/service-query.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_query_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__services_service_query_interface__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/**
 * Query string part type (Internal)
 */
var SelectionType;
(function (SelectionType) {
    SelectionType[SelectionType["NAME"] = 0] = "NAME";
    SelectionType[SelectionType["VALUE"] = 1] = "VALUE";
    SelectionType[SelectionType["OPERATOR"] = 2] = "OPERATOR";
    SelectionType[SelectionType["JOIN"] = 3] = "JOIN";
})(SelectionType || (SelectionType = {}));
/**
 * Advance data search box
 */
var SearchBoxComponent = (function () {
    function SearchBoxComponent(serviceQuery) {
        this.serviceQuery = serviceQuery;
        /**
         * Query placeholder
         */
        this.placeholder = 'Type your query here';
        /**
         * Query request callback with valid query string
         */
        this.onQuery = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        /**
         * Supported Operators List
         */
        this.supportedOperators = new Array();
        /**
         * Supported logic gates
         */
        this.supportedJoins = new Array();
        /**
         * Indicate query validity, HTML access variable
         */
        this.isValidQuery = true;
        /**
         * Current focused list element index, HTML access variable
         */
        this.focusedIdx = -1;
        /**
         * Hide auto complete dropdown. HTML access varible
         */
        this.hideAutoComplete = true;
        /**
         * Query selection type
         */
        this.selectionType = SelectionType.NAME;
        /**
         * Query current cursor position
         */
        this.currentCursorPos = 0;
        /**
         * Currently used fields
         */
        this.usedColomns = {};
    }
    /**
     * @description Initializing the supported operators and logic gates
     */
    SearchBoxComponent.prototype.ngOnInit = function () {
        this.supportedOperators.push(new __WEBPACK_IMPORTED_MODULE_2__defs_name_field__["a" /* NameField */]('=', '='));
        this.supportedOperators.push(new __WEBPACK_IMPORTED_MODULE_2__defs_name_field__["a" /* NameField */]('!=', '!='));
        this.supportedJoins.push(new __WEBPACK_IMPORTED_MODULE_2__defs_name_field__["a" /* NameField */]('AND', 'AND'));
        this.supportedJoins.push(new __WEBPACK_IMPORTED_MODULE_2__defs_name_field__["a" /* NameField */]('OR', 'OR'));
    };
    /**
     * @description Populate filtered suggession list
     */
    SearchBoxComponent.prototype.createSuggessionList = function (prefix) {
        var _this = this;
        this.hideAutoComplete = false;
        if (this.selectionType === SelectionType.NAME) {
            this.suggessionList = this.columns.
                filter(function (el) { return (el.key.toLowerCase().indexOf(prefix.toLowerCase()) !== -1 && _this.usedColomns[el.key] === undefined); });
        }
        else if (this.selectionType === SelectionType.OPERATOR) {
            this.suggessionList = this.supportedOperators.filter(function (el) { return el.key.toLowerCase().indexOf(prefix.toLowerCase()) !== -1; });
        }
        else if (this.selectionType === SelectionType.JOIN) {
            this.suggessionList = this.supportedJoins.filter(function (el) { return el.key.toLowerCase().indexOf(prefix.toLowerCase()) !== -1; });
        }
        else if (this.selectionType === SelectionType.VALUE) {
            if (this.selectedName.query !== undefined && this.selectedName.query.path !== undefined) {
                this.serviceQuery.query(this.selectedName.query).subscribe(function (resp) {
                    _this.suggessionList = resp;
                });
            }
            else {
                this.suggessionList = [];
            }
        }
        this.focusedIdx = -1;
    };
    /**
     * @description Focus to the dropdown
     */
    SearchBoxComponent.prototype.focusMenu = function (event) {
        if (event.keyCode === 40) {
            if (this.suggessionList.length - 1 <= this.focusedIdx) {
                this.focusedIdx = 0;
            }
            else {
                this.focusedIdx++;
            }
            event.preventDefault();
        }
        else if (event.keyCode === 38) {
            if (this.focusedIdx <= 0) {
                this.focusedIdx = 0;
            }
            else {
                this.focusedIdx--;
            }
            event.preventDefault();
        }
        else if (event.keyCode === 13) {
            this.query();
            event.preventDefault();
        }
    };
    /**
     * @description Trigger on query change or cursor position change
     */
    SearchBoxComponent.prototype.onQueryChange = function (oField) {
        this.checkQueryValidity();
        if (oField.selectionStart || oField.selectionStart === '0') {
            this.currentCursorPos = oField.selectionStart;
        }
        if (this.queryString !== undefined) {
            var typeString = this.queryString.substring(0, this.currentCursorPos);
            var parts = this.splitQueryString(typeString);
            var currentText = parts[parts.length - 1];
            var prvText = parts[parts.length - 2];
            if (prvText === undefined) {
                this.selectionType = SelectionType.NAME;
                this.createSuggessionList(parts[0]);
            }
            else {
                if (this.isOperator(prvText)) {
                    if (parts[parts.length - 3] !== undefined) {
                        this.selectedName = this.findCol(parts[parts.length - 3]);
                        if (this.selectedName === undefined) {
                            return;
                        }
                        this.selectionType = SelectionType.VALUE;
                        this.createSuggessionList(currentText);
                    }
                }
                else if (this.isJoiner(prvText)) {
                    this.selectionType = SelectionType.NAME;
                    this.createSuggessionList(currentText);
                }
                else {
                    if (parts[parts.length - 3] === undefined || this.isJoiner(parts[parts.length - 3])) {
                        this.selectionType = SelectionType.OPERATOR;
                        this.createSuggessionList(currentText);
                    }
                    else if (this.isOperator(parts[parts.length - 3])) {
                        this.selectionType = SelectionType.JOIN;
                        this.createSuggessionList(currentText);
                    }
                }
            }
        }
    };
    /**
     * @description Is give test is an operator
     */
    SearchBoxComponent.prototype.isOperator = function (currentText) {
        var opIndex = this.supportedOperators.findIndex(function (op) { return op.key === currentText; });
        if (opIndex >= 0) {
            return true;
        }
        return false;
    };
    /**
     * @description Is give test is an logic gate
     */
    SearchBoxComponent.prototype.isJoiner = function (currentText) {
        var joinIndex = this.supportedJoins.findIndex(function (op) { return op.key === currentText; });
        if (joinIndex >= 0) {
            return true;
        }
        return false;
    };
    /**
     * @description Find Field object by field name
     */
    SearchBoxComponent.prototype.findCol = function (currentText) {
        return this.columns.filter(function (op) { return op.key === currentText; })[0];
    };
    /**
     * @description Select item from the auto complete dropdown
     */
    SearchBoxComponent.prototype.selectItem = function (item, queryArea) {
        var typeString = this.queryString.substring(0, this.currentCursorPos);
        var startIndex = typeString.lastIndexOf(' ');
        var remainder = this.queryString.substring(this.currentCursorPos);
        var endIndex = this.currentCursorPos + remainder.indexOf(' ');
        this.queryString = ((startIndex < 0) ? '' : this.queryString.substring(0, startIndex + 1)) + item.key
            + ((endIndex < this.currentCursorPos) ? '' : this.queryString.substring(endIndex));
        queryArea.focus();
        this.hideAutoComplete = true;
        this.checkQueryValidity();
    };
    /**
     * @description Show/Hide auto complete drop down
     */
    SearchBoxComponent.prototype.hidePopup = function (hide) {
        var _this = this;
        setTimeout(function () {
            _this.hideAutoComplete = hide;
        }, 0);
    };
    /**
     * @description Is entered query is valid
     */
    SearchBoxComponent.prototype.checkQueryValidity = function () {
        if (this.queryString === undefined || this.queryString === '') {
            return;
        }
        var parts = this.splitQueryString(this.queryString);
        var j = 0;
        this.usedColomns = {};
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            var col = this.findCol(part);
            if (j % 4 === 0 && col !== undefined) {
                this.usedColomns[col.key] = true;
            }
            j++;
        }
        if ((parts.length + 1) % 4 !== 0) {
            this.isValidQuery = false;
        }
        else {
            var i = 0;
            for (var _a = 0, parts_2 = parts; _a < parts_2.length; _a++) {
                var part = parts_2[_a];
                var remainder = i % 4;
                if ((remainder === 0 && this.findCol(part) === undefined) ||
                    (remainder === 1 && !this.isOperator(part)) ||
                    remainder === 3 && !this.isJoiner(part)) {
                    this.isValidQuery = false;
                    break;
                }
                else {
                    this.isValidQuery = true;
                }
                i++;
            }
        }
    };
    /**
     * @description Trigger query request callback on enter
     */
    SearchBoxComponent.prototype.query = function () {
        if (!this.isValidQuery) {
            return;
        }
        this.onQuery.emit(this.queryString);
    };
    /**
     * @description split query string
     */
    SearchBoxComponent.prototype.splitQueryString = function (query) {
        return query.replace(/\s+/g, ' ').split(' ');
    };
    return SearchBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SearchBoxComponent.prototype, "columns", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SearchBoxComponent.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SearchBoxComponent.prototype, "onQuery", void 0);
SearchBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-search-box',
        template: __webpack_require__("../../../../../src/app/components/unit/search-box/search-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/unit/search-box/search-box.component.scss")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__services_service_query_provider__["a" /* SERVICE_QUERY */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_service_query_interface__["IServiceQuery"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_service_query_interface__["IServiceQuery"]) === "function" && _b || Object])
], SearchBoxComponent);

var _a, _b;
//# sourceMappingURL=search-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unit/u-form/u-form.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  u-form works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/unit/u-form/u-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/unit/u-form/u-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UFormComponent = (function () {
    function UFormComponent() {
    }
    UFormComponent.prototype.ngOnInit = function () {
    };
    return UFormComponent;
}());
UFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-u-form',
        template: __webpack_require__("../../../../../src/app/components/unit/u-form/u-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/unit/u-form/u-form.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], UFormComponent);

//# sourceMappingURL=u-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unit/u-guage/u-guage.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <dx-circular-gauge [value]=\"value.mean\" [subvalues]=\"[value.min, value.max]\" [size]=\"options.size\">\n\n        <dxo-range-container>\n            <dxi-range [startValue]=\"colorStep\" [endValue]=\"colorStep*2\" color=\"#0077BE\"></dxi-range>\n            <dxi-range [startValue]=\"colorStep*2\" [endValue]=\"colorStep*3\" color=\"#E6E200\"></dxi-range>\n            <dxi-range [startValue]=\"colorStep*3\" [endValue]=\"colorStep*4\" color=\"#77DD77\"></dxi-range>\n        </dxo-range-container>\n\n        <dxo-scale [startValue]=\"options.start\" [endValue]=\"options.end\" [tickInterval]=\"options.stepSize\">\n            <dxo-label [customizeText]=\"customizeText\"></dxo-label>\n        </dxo-scale>\n        <dxo-tooltip [enabled]=\"true\"></dxo-tooltip>\n        <dxo-title [text]=\"options.title\">\n            <dxo-font [size]=\"options.titleSize\"></dxo-font>\n        </dxo-title>\n    </dx-circular-gauge>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/unit/u-guage/u-guage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/unit/u-guage/u-guage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GaugeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UGuageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_utils__ = __webpack_require__("../../../../../src/app/utilities/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Guage Component Input Data Type
 */
var GaugeData = (function () {
    function GaugeData(_mean, _max, _min) {
        this.mean = _mean;
        this.max = _max;
        this.min = _min;
    }
    return GaugeData;
}());

/**
 * Gauge Options
 */
var GaugeOptions = (function () {
    function GaugeOptions(_title, _titleSize, _labelPrefix, _labelSuffix, _start, _end, _stepSize) {
        /**
         * Title font size
         */
        this.titleSize = 24;
        /**
         * Prefix for label
         */
        this.labelPrefix = '';
        /**
         * Sufix for label
         */
        this.labelSuffix = '';
        /**
         * Lower value
         */
        this.start = 0;
        /**
         * Upper value
         */
        this.end = 100;
        /**
         * Gauge step size
         */
        this.stepSize = 10;
        this.title = _title;
        this.titleSize = _titleSize;
        this.labelPrefix = __WEBPACK_IMPORTED_MODULE_1__utilities_utils__["b" /* getIfDefined */](this.labelPrefix, _labelPrefix);
        this.labelSuffix = __WEBPACK_IMPORTED_MODULE_1__utilities_utils__["b" /* getIfDefined */](this.labelSuffix, _labelSuffix);
        this.start = __WEBPACK_IMPORTED_MODULE_1__utilities_utils__["b" /* getIfDefined */](this.start, _start);
        this.end = __WEBPACK_IMPORTED_MODULE_1__utilities_utils__["b" /* getIfDefined */](this.end, _end);
        this.stepSize = __WEBPACK_IMPORTED_MODULE_1__utilities_utils__["b" /* getIfDefined */](this.stepSize, _stepSize);
    }
    return GaugeOptions;
}());

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__defs_track_type__["a" /* TrackType */])(String),
    __metadata("design:type", Object)
], GaugeOptions.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__defs_track_type__["a" /* TrackType */])(Number),
    __metadata("design:type", Object)
], GaugeOptions.prototype, "titleSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__defs_track_type__["a" /* TrackType */])(String),
    __metadata("design:type", Object)
], GaugeOptions.prototype, "labelPrefix", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__defs_track_type__["a" /* TrackType */])(String),
    __metadata("design:type", Object)
], GaugeOptions.prototype, "labelSuffix", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__defs_track_type__["a" /* TrackType */])(Number),
    __metadata("design:type", Object)
], GaugeOptions.prototype, "start", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__defs_track_type__["a" /* TrackType */])(Number),
    __metadata("design:type", Object)
], GaugeOptions.prototype, "end", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__defs_track_type__["a" /* TrackType */])(Number),
    __metadata("design:type", Object)
], GaugeOptions.prototype, "stepSize", void 0);
/**
 * Temparory variable to store component scope
 */
var cmpScope;
/**
 * Customized guage component
 */
var UGuageComponent = (function () {
    function UGuageComponent() {
        /**
        * Guage Input value
        */
        this.value = new GaugeData(0, 0, 0);
    }
    UGuageComponent.prototype.ngOnInit = function () {
        cmpScope = this;
        this.colorStep = Math.floor(((this.options.end - this.options.start) / 4));
    };
    /**
   * @param {string} message  Private function to call for lable custermize
   */
    UGuageComponent.prototype.customizeText = function (arg) {
        if (cmpScope.options === undefined) {
            return '';
        }
        return cmpScope.options.labelPrefix + ' ' + arg.valueText + ' ' + cmpScope.options.labelSuffix;
    };
    return UGuageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UGuageComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", GaugeOptions)
], UGuageComponent.prototype, "options", void 0);
UGuageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-u-guage',
        template: __webpack_require__("../../../../../src/app/components/unit/u-guage/u-guage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/unit/u-guage/u-guage.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], UGuageComponent);

//# sourceMappingURL=u-guage.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unit/u-icon-btn/u-icon-btn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIconBtnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UIconBtnComponent = (function () {
    function UIconBtnComponent() {
        /**
         * Is this tile activated. Icon stlying changes according to this. Styles can overide from class icon-btn-active
         */
        this.isSelected = false;
        this.iconSize = 20;
    }
    UIconBtnComponent.prototype.ngOnInit = function () {
        this.iconSize = (this.text === undefined) ? this.size * 0.5 : (this.size * 0.3);
    };
    UIconBtnComponent.prototype.ngOnChanges = function (changes) {
        if (changes['isSelected'] !== undefined) {
            this.isSelected = changes['isSelected'].currentValue;
        }
    };
    return UIconBtnComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], UIconBtnComponent.prototype, "iconClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], UIconBtnComponent.prototype, "size", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], UIconBtnComponent.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], UIconBtnComponent.prototype, "bakColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], UIconBtnComponent.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UIconBtnComponent.prototype, "isSelected", void 0);
UIconBtnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-u-icon-btn',
        template: "\n    <div fxLayout=\"column\" fxLayoutAlign=\"center none\" class=\"u-icon-btn\" [ngClass]=\"{'icon-btn-active' : isSelected}\"\n    [style.width.px]=\"size\" [style.height.px]=\"size\" [style.background-color]=\"bakColor\" [style.color]=\"color\">\n      <div [ngClass]=\"iconClass\" [style.font-size.px]=\"iconSize\"></div>\n      <div [hidden]=\"text === undefined\">{{text}}</div>\n    </div>\n  ",
        styles: ["\n      .u-icon-btn {\n        text-align: center;\n        vertical-align: center;\n      }\n\n      .u-icon-btn:hover {\n        color: #168CCA;\n      }\n\n      .icon-btn-active {\n        color: #168CCA;\n      }\n  "]
    }),
    __metadata("design:paramtypes", [])
], UIconBtnComponent);

//# sourceMappingURL=u-icon-btn.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unit/u-pie-chart/u-pie-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPieChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UPieChartComponent = (function () {
    function UPieChartComponent() {
    }
    UPieChartComponent.prototype.ngOnInit = function () {
    };
    return UPieChartComponent;
}());
UPieChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-u-pie-chart',
        template: "\n    <div>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], UPieChartComponent);

//# sourceMappingURL=u-pie-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unit/u-popup/u-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<dx-popup class=\"popup\" [width]=\"options.size.width\" [height]=\"options.size.height\" [showTitle]=\"true\" [title]=\"options.title\" [dragEnabled]=\"options.draggable\" [closeOnOutsideClick]=\"options.closeOnOutFocus\" [(visible)]=\"popupVisible\">\n    <div *dxTemplate=\"let data of 'content'\">\n        <div fxLayout=\"column\" class=\"content\">\n            <div fxFlex=\"grow\" style=\"overflow: auto;\">\n                <app-dcl-wrapper [componentDef]=\"content\"></app-dcl-wrapper>\n            </div>\n            <div fxFlex=\"50px\" class=\"footer\">\n                <dx-button class=\"pull-left footer-btn\" *ngFor=\"let action of actions\" [text]=\"action.name\" [type]=\"action.type\" (onClick)=\"onAction(action)\"></dx-button>\n            </div>\n        </div>\n    </div>\n</dx-popup>"

/***/ }),

/***/ "../../../../../src/app/components/unit/u-popup/u-popup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  padding: 10px;\n  padding-bottom: 0px;\n  height: 50px; }\n\n.footer-btn {\n  margin-right: 10px; }\n\n.dx-popup-content {\n  margin-bottom: 60px !important; }\n\n.content {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/unit/u-popup/u-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_popup_driver_service__ = __webpack_require__("../../../../../src/app/services/popup-driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_defs_size__ = __webpack_require__("../../../../../src/app/defs/size.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defs_component_def__ = __webpack_require__("../../../../../src/app/defs/component-def.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopupOptions = (function () {
    function PopupOptions(_title) {
        this._size = new __WEBPACK_IMPORTED_MODULE_2__app_defs_size__["a" /* Size */]('300', '250');
        this._draggable = true;
        this._closeOnOutFocus = true;
        this._title = _title;
    }
    Object.defineProperty(PopupOptions.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupOptions.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupOptions.prototype, "draggable", {
        get: function () {
            return this._draggable;
        },
        set: function (value) {
            this._draggable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupOptions.prototype, "closeOnOutFocus", {
        get: function () {
            return this._closeOnOutFocus;
        },
        set: function (value) {
            this._closeOnOutFocus = value;
        },
        enumerable: true,
        configurable: true
    });
    return PopupOptions;
}());

var UPopupComponent = (function () {
    function UPopupComponent(popupDriver) {
        var _this = this;
        this.popupDriver = popupDriver;
        /**
         * Popup options to configure
         */
        this.options = new PopupOptions(undefined);
        /**
         * Show popup
         */
        this.popupVisible = false;
        this.popupDriver.openPopup$.subscribe(function (popup) {
            _this.popupVisible = true;
            _this.options = popup.options;
            _this.actions = popup.actions;
            _this.content = popup.content;
        });
    }
    UPopupComponent.prototype.ngOnInit = function () {
    };
    UPopupComponent.prototype.onAction = function (action) {
        if (action.closeOnSelect) {
            this.popupVisible = false;
        }
        action.cb(action);
    };
    return UPopupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", PopupOptions)
], UPopupComponent.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__defs_component_def__["a" /* ComponentDef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__defs_component_def__["a" /* ComponentDef */]) === "function" && _a || Object)
], UPopupComponent.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UPopupComponent.prototype, "actions", void 0);
UPopupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-u-popup',
        template: __webpack_require__("../../../../../src/app/components/unit/u-popup/u-popup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/unit/u-popup/u-popup.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_popup_driver_service__["a" /* PopupDriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_popup_driver_service__["a" /* PopupDriverService */]) === "function" && _b || Object])
], UPopupComponent);

var _a, _b;
//# sourceMappingURL=u-popup.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unit/u-sparkline/u-sparkline.component.html":
/***/ (function(module, exports) {

module.exports = "<dx-sparkline class=\"sparkline\" [dataSource]=\"data\" [argumentField]=\"options.keyField\" [valueField]=\"options.valueField\" [type]=\"options.lineType\" [lineColor]=\"options.lineColor\" [firstLastColor]=\"options.firstLastColor\" [size]=\"options.size\" [pointSize]=\"options.pointSize\"\n    [pointSymbol]=\"options.pointSymbol\" [pointColor]=\"options.pointColor\" [showMinMax]=\"true\">\n    <dxo-tooltip [format]=\"options.tooltipFormat\"></dxo-tooltip>\n</dx-sparkline>"

/***/ }),

/***/ "../../../../../src/app/components/unit/u-sparkline/u-sparkline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/unit/u-sparkline/u-sparkline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparkLinkOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USparklineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_size__ = __webpack_require__("../../../../../src/app/defs/size.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SparkLinkOptions = (function () {
    function SparkLinkOptions(keyField, valueField, lineType, lineColor, firstLastColor, pointSize, pointSymbol, pointColor, tooltipFormat, size) {
        this.keyField = keyField;
        this.valueField = valueField;
        this.lineType = lineType;
        this.lineColor = lineColor;
        this.firstLastColor = firstLastColor;
        this.pointSize = pointSize;
        this.pointSymbol = pointSymbol;
        this.pointColor = pointColor;
        this.tooltipFormat = tooltipFormat;
        this.size = size;
    }
    return SparkLinkOptions;
}());

var USparklineComponent = (function () {
    function USparklineComponent() {
        /**
         * Sparkline options
         */
        this.options = new SparkLinkOptions('key', 'value', 'spline', '#9ab57e', '#e55253', '6', undefined, '#ebdd8f', 'currency', new __WEBPACK_IMPORTED_MODULE_0__defs_size__["a" /* Size */]('200', '30'));
        /**
         * Sparkline data
         */
        this.data = [];
    }
    USparklineComponent.prototype.ngOnInit = function () {
    };
    return USparklineComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], USparklineComponent.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], USparklineComponent.prototype, "data", void 0);
USparklineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-u-sparkline',
        template: __webpack_require__("../../../../../src/app/components/unit/u-sparkline/u-sparkline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/unit/u-sparkline/u-sparkline.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], USparklineComponent);

//# sourceMappingURL=u-sparkline.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unit/u-spline/u-spline.component.html":
/***/ (function(module, exports) {

module.exports = "<dx-chart [dataSource]=\"data\" [title]=\"options.title\" [size]=\"options.size\">\n    <dxi-series [valueField]=\"s.valueField\" [name]=\"s.name\" *ngFor=\"let s of options.series\"></dxi-series>\n    <dxo-common-series-settings #seriesSettings [argumentField]=\"options.argumentField\" type=\"spline\">\n    </dxo-common-series-settings>\n    <dxo-margin [bottom]=\"10\"></dxo-margin>\n    <dxo-common-axis-settings>\n        <dxo-grid [visible]=\"options.showDataGrid\"></dxo-grid>\n    </dxo-common-axis-settings>\n    <dxo-legend verticalAlignment=\"top\" horizontalAlignment=\"right\">\n    </dxo-legend>\n    <dxo-export [enabled]=\"options.dataExport\"></dxo-export>\n    <dxo-tooltip [enabled]=\"options.showTooltip\"></dxo-tooltip>\n</dx-chart>"

/***/ }),

/***/ "../../../../../src/app/components/unit/u-spline/u-spline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/unit/u-spline/u-spline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Series */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplineOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USplineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_size__ = __webpack_require__("../../../../../src/app/defs/size.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Series = (function () {
    function Series(_name, _valueField) {
        this.name = _name;
        this.valueField = _valueField;
    }
    return Series;
}());

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__defs_track_type__["a" /* TrackType */])(String),
    __metadata("design:type", String)
], Series.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__defs_track_type__["a" /* TrackType */])(String),
    __metadata("design:type", String)
], Series.prototype, "valueField", void 0);
var SplineOptions = (function () {
    function SplineOptions(title) {
        this.palette = 'violet';
        this.argumentField = 'key';
        this.showDataGrid = true;
        this.showTooltip = true;
        this.dataExport = true;
        this.series = [];
        this.title = title;
    }
    return SplineOptions;
}());

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__defs_track_type__["a" /* TrackType */])(String),
    __metadata("design:type", String)
], SplineOptions.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__defs_track_type__["a" /* TrackType */])(String),
    __metadata("design:type", Object)
], SplineOptions.prototype, "palette", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__defs_track_type__["a" /* TrackType */])(String),
    __metadata("design:type", Object)
], SplineOptions.prototype, "argumentField", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__defs_track_type__["a" /* TrackType */])(Boolean),
    __metadata("design:type", Object)
], SplineOptions.prototype, "showDataGrid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__defs_track_type__["a" /* TrackType */])(Boolean),
    __metadata("design:type", Object)
], SplineOptions.prototype, "showTooltip", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__defs_track_type__["a" /* TrackType */])(Boolean),
    __metadata("design:type", Object)
], SplineOptions.prototype, "dataExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__defs_track_type__["a" /* TrackType */])(Array()),
    __metadata("design:type", Object)
], SplineOptions.prototype, "series", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__defs_track_type__["a" /* TrackType */])(__WEBPACK_IMPORTED_MODULE_0__defs_size__["a" /* Size */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__defs_size__["a" /* Size */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__defs_size__["a" /* Size */]) === "function" && _a || Object)
], SplineOptions.prototype, "size", void 0);
var USplineComponent = (function () {
    function USplineComponent() {
        this.data = [];
        this.options = new SplineOptions('');
    }
    USplineComponent.prototype.ngOnInit = function () {
    };
    return USplineComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], USplineComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], USplineComponent.prototype, "options", void 0);
USplineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-u-spline',
        template: __webpack_require__("../../../../../src/app/components/unit/u-spline/u-spline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/unit/u-spline/u-spline.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], USplineComponent);

var _a;
//# sourceMappingURL=u-spline.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unit/u-table/table-query.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_umsg__ = __webpack_require__("../../../../../src/app/defs/umsg.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Table Query request msg
 */
var TableQuery = (function (_super) {
    __extends(TableQuery, _super);
    function TableQuery(limit, offset, sorts, filters, filterString) {
        var _this = _super.call(this) || this;
        _this.limit = limit;
        _this.offset = offset;
        _this.sorts = sorts;
        _this.filters = filters;
        _this.filterString = filterString;
        return _this;
    }
    TableQuery.addSort = function (query, sort) {
        if (query.sorts === undefined) {
            query.sorts = [];
        }
        else {
            var index = query.sorts.findIndex(function (item) { return item.field === sort.field; });
            if (index >= 0) {
                query.sorts.splice(index, 1);
            }
        }
        query.sorts.push(sort);
    };
    TableQuery.addFilter = function (query, filter) {
        if (query.filters === undefined) {
            query.filters = [];
        }
        query.filters.push(filter);
    };
    return TableQuery;
}(__WEBPACK_IMPORTED_MODULE_0__defs_umsg__["a" /* UMsg */]));

//# sourceMappingURL=table-query.js.map

/***/ }),

/***/ "../../../../../src/app/components/unit/u-table/u-table.component.html":
/***/ (function(module, exports) {

module.exports = "<dx-data-grid id=\"gridContainer\" [dataSource]=\"dataSource\" [allowColumnReordering]=\"true\" [allowColumnResizing]=\"true\" [columnAutoWidth]=\"true\">\n    <dxi-column [dataField]=\"col.key\" [caption]=\"col.name\" [dataType]=\"col.datatype\" *ngFor=\"let col of tableOptions.$columnOptions\"></dxi-column>\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\">\n    </dxo-remote-operations>\n    <dxo-paging [pageSize]=\"10\"></dxo-paging>\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[10, 25, 50, 100]\"></dxo-pager>\n</dx-data-grid>"

/***/ }),

/***/ "../../../../../src/app/components/unit/u-table/u-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/unit/u-table/u-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_devextreme_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defs_sort__ = __webpack_require__("../../../../../src/app/defs/sort.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_query_interface__ = __webpack_require__("../../../../../src/app/services/service-query.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_query_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_service_query_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_devextreme_data_custom_store__ = __webpack_require__("../../../../devextreme/data/custom_store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_devextreme_data_custom_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_devextreme_data_custom_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_service_query_provider__ = __webpack_require__("../../../../../src/app/services/service-query.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_query__ = __webpack_require__("../../../../../src/app/components/unit/u-table/table-query.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







/**
 * Table input options
 */
var TableOptions = (function () {
    function TableOptions(columnOptions, query) {
        this.columnOptions = columnOptions;
        this.query = query;
    }
    Object.defineProperty(TableOptions.prototype, "$columnOptions", {
        /**
         * Get function for column options
         */
        get: function () {
            return this.columnOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "$query", {
        /**
         * Get table data query
         */
        get: function () {
            return this.query;
        },
        enumerable: true,
        configurable: true
    });
    return TableOptions;
}());

/**
 * Temparory variable to store component scope
 */
var cmpScope;
/**
 * Ajax support table model
 */
var UTableComponent = (function () {
    function UTableComponent(serviceQuery) {
        this.serviceQuery = serviceQuery;
        this.tableOptions = new TableOptions([], undefined);
        this.dataSource = {};
        this.dataSource.store = new __WEBPACK_IMPORTED_MODULE_4_devextreme_data_custom_store___default.a({
            load: function (loadOptions) {
                var query = cmpScope.tableOptions.$query;
                var params = query.params;
                params.limit = loadOptions.take;
                params.offset = loadOptions.skip;
                if (loadOptions.sort) {
                    __WEBPACK_IMPORTED_MODULE_6__table_query__["a" /* TableQuery */].addSort(params, new __WEBPACK_IMPORTED_MODULE_1__defs_sort__["a" /* Sort */](loadOptions.sort[0].selector, loadOptions.sort[0].desc));
                }
                return serviceQuery.query(query)
                    .toPromise()
                    .then(function (response) {
                    console.log(response);
                    return {
                        data: response.data,
                        totalCount: response.total
                    };
                })
                    .catch(function (error) {
                    throw new Error('Data Loading Error');
                });
            }
        });
    }
    UTableComponent.prototype.ngOnInit = function () {
        cmpScope = this;
    };
    UTableComponent.prototype.refresh = function () {
        this.dataGrid.instance.refresh();
    };
    return UTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", TableOptions)
], UTableComponent.prototype, "tableOptions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_devextreme_angular__["DxDataGridComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_devextreme_angular__["DxDataGridComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_devextreme_angular__["DxDataGridComponent"]) === "function" && _a || Object)
], UTableComponent.prototype, "dataGrid", void 0);
UTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-u-table',
        template: __webpack_require__("../../../../../src/app/components/unit/u-table/u-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/unit/u-table/u-table.component.scss")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__services_service_query_provider__["a" /* SERVICE_QUERY */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_service_query_interface__["IServiceQuery"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_service_query_interface__["IServiceQuery"]) === "function" && _b || Object])
], UTableComponent);

var _a, _b;
//# sourceMappingURL=u-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unit/u-text/u-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UTextComponent = (function () {
    function UTextComponent() {
    }
    UTextComponent.prototype.ngOnInit = function () {
    };
    return UTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UTextComponent.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UTextComponent.prototype, "styles", void 0);
UTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-u-text',
        template: "\n    <div i18n class=\"bg-text\" [ngStyle]=\"styles\" [innerHTML]=\"text\"></div>\n  ",
        styles: [
            "\n      .bg-text {\n        padding: 5px 10px;\n      }\n    "
        ]
    }),
    __metadata("design:paramtypes", [])
], UTextComponent);

//# sourceMappingURL=u-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-preferences/user-preferences.component.html":
/***/ (function(module, exports) {

module.exports = "<dx-tab-panel #tabPanel class=\"tab-panel\" height=\"100%\" [dataSource]=\"tabs\" [(selectedIndex)]=\"selectedIndex\" [loop]=\"false\" [animationEnabled]=\"true\" [swipeEnabled]=\"true\" [scrollByContent]=\"true\">\n    <div *dxTemplate=\"let setting of 'title'\">\n        <span>{{setting.title}}</span>\n    </div>\n    <div *dxTemplate=\"let setting of 'item';\">\n        <div class=\"tabpanel-item\" [hidden]=\"selectedIndex !== 0\">\n            <form action=\"action\" (submit)=\"onSave($event)\">\n                <dx-form id=\"form\" [(formData)]=\"userContext.userPreference\" [readOnly]=\"false\" [showColonAfterLabel]=\"false\" [showValidationSummary]=\"true\" validationGroup=\"customerData\" [colCount]=\"2\">\n\n                    <dxi-item dataField=\"theme\" editorType=\"dxSelectBox\" [editorOptions]=\"{\n                      dataSource: themeStore.supportedThemes,\n                      displayExpr: 'name',\n                      onValueChanged: onThemeChanged\n                    }\">\n                        <dxi-validation-rule type=\"required\" message=\"Theme is required\">\n                        </dxi-validation-rule>\n                    </dxi-item>\n                </dx-form>\n            </form>\n        </div>\n\n        <div class=\"tabpanel-item\" [hidden]=\"selectedIndex !== 1\">\n            <app-template-creator [templateDefs]=\"widgetTemplateDefs\" [saveCB]=\"widgetSave\"></app-template-creator>\n        </div>\n        <div class=\"tabpanel-item\" [hidden]=\"selectedIndex !== 2\">\n            <app-template-creator [templateDefs]=\"queryTemplateDefs\" [saveCB]=\"querySave\"></app-template-creator>\n        </div>\n\n        <div class=\"tabpanel-item\" [hidden]=\"selectedIndex !== 3\">\n            <app-template-creator [templateDefs]=\"containerTemplateDefs\" [saveCB]=\"containerSave\"></app-template-creator>\n        </div>\n\n    </div>\n</dx-tab-panel>"

/***/ }),

/***/ "../../../../../src/app/components/user-preferences/user-preferences.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tabpanel-item {\n  padding: 25px 20px;\n  height: 100%;\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-preferences/user-preferences.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPreferencesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_component_store__ = __webpack_require__("../../../../../src/app/services/component-store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_context_service__ = __webpack_require__("../../../../../src/app/services/user-context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_theme_store_service__ = __webpack_require__("../../../../../src/app/services/theme-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_devextreme_ui_themes__ = __webpack_require__("../../../../devextreme/ui/themes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_devextreme_ui_themes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_devextreme_ui_themes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_utils__ = __webpack_require__("../../../../../src/app/utilities/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var cmpScope;
var UserPreferencesComponent = (function () {
    function UserPreferencesComponent(_themeStore, _userContext, _componentStore) {
        this._componentStore = _componentStore;
        this.selectedIndex = 0;
        this.tabs = [
            { 'title': 'General' },
            { 'title': 'Widget Templates' },
            { 'title': 'Query Templates' },
            { 'title': 'Containers' }
        ];
        this.themeStore = _themeStore;
        this.userContext = _userContext;
        this.widgetTemplateDefs = [];
        this.queryTemplateDefs = [];
        this.containerTemplateDefs = [];
        this.loadComponents();
        cmpScope = this;
    }
    UserPreferencesComponent.prototype.ngOnInit = function () {
    };
    UserPreferencesComponent.prototype.onThemeChanged = function (event) {
        __WEBPACK_IMPORTED_MODULE_4_devextreme_ui_themes___default.a.current(event.value.id);
    };
    UserPreferencesComponent.prototype.loadComponents = function () {
        var _this = this;
        this._componentStore.allComponents.forEach(function (val) {
            if (val['__proto__'].name === 'WidgetTemplateComponent') {
                _this.widgetTemplateDefs.push(val);
            }
            else if (val['__proto__'].name === 'QueryTemplateComponent') {
                _this.queryTemplateDefs.push(val);
            }
            else if (val['__proto__'].name === 'ContainerTemplateComponent') {
                _this.containerTemplateDefs.push(val);
            }
        });
    };
    UserPreferencesComponent.prototype.ngOnDestroy = function () {
    };
    UserPreferencesComponent.prototype.widgetSave = function (def) {
        cmpScope.userContext.addWidgetTemplate(def, function (data, err) {
            if (__WEBPACK_IMPORTED_MODULE_5__utilities_utils__["e" /* isUndefined */](err)) {
                __WEBPACK_IMPORTED_MODULE_5__utilities_utils__["f" /* notifyPop */]('Successfully added widget template', 'success');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5__utilities_utils__["f" /* notifyPop */]('Failed to add widget template: Error: ' + err, 'error');
            }
        });
    };
    UserPreferencesComponent.prototype.containerSave = function (def) {
        cmpScope.userContext.addContainerTemplate(def, function (data, err) {
            if (__WEBPACK_IMPORTED_MODULE_5__utilities_utils__["e" /* isUndefined */](err)) {
                __WEBPACK_IMPORTED_MODULE_5__utilities_utils__["f" /* notifyPop */]('Successfully added container template', 'success');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5__utilities_utils__["f" /* notifyPop */]('Failed to add container template: Error: ' + err, 'error');
            }
        });
    };
    UserPreferencesComponent.prototype.querySave = function (def) {
        cmpScope.userContext.addQueryTemplate(def, function (data, err) {
            if (__WEBPACK_IMPORTED_MODULE_5__utilities_utils__["e" /* isUndefined */](err)) {
                __WEBPACK_IMPORTED_MODULE_5__utilities_utils__["f" /* notifyPop */]('Successfully added query template', 'success');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5__utilities_utils__["f" /* notifyPop */]('Failed to add query template: Error: ' + err, 'error');
            }
        });
    };
    return UserPreferencesComponent;
}());
UserPreferencesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-user-preferences',
        template: __webpack_require__("../../../../../src/app/components/user-preferences/user-preferences.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-preferences/user-preferences.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_theme_store_service__["a" /* ThemeStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_theme_store_service__["a" /* ThemeStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_context_service__["a" /* UserContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_context_service__["a" /* UserContextService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_component_store__["a" /* ComponentStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_component_store__["a" /* ComponentStore */]) === "function" && _c || Object])
], UserPreferencesComponent);

var _a, _b, _c;
//# sourceMappingURL=user-preferences.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_refresh_service__ = __webpack_require__("../../../../../src/app/services/refresh.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_template_component__ = __webpack_require__("../../../../../src/app/components/base-template.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTemplateComponent = (function (_super) {
    __extends(WidgetTemplateComponent, _super);
    function WidgetTemplateComponent(refreshService, logService) {
        var _this = _super.call(this, logService) || this;
        _this.refreshService = refreshService;
        _this.logService = logService;
        return _this;
    }
    WidgetTemplateComponent.prototype.ngOnDestroy = function () {
        this.refreshService.unSubscribeForRefresh(this.componentID);
    };
    WidgetTemplateComponent.prototype.listenToPush = function (cls, _callback) {
    };
    WidgetTemplateComponent.prototype.subscribeForRefresh = function (requests) {
        this.refreshService.subscribeForRefresh(this.componentID, requests);
    };
    WidgetTemplateComponent.prototype.onError = function (error, req) {
        this.logService.printError('Dashboard widget request error:', error);
    };
    return WidgetTemplateComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_template_component__["a" /* BaseTemplateComponent */]));
WidgetTemplateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-dashboard-widget',
        template: "\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_refresh_service__["a" /* RefreshService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_refresh_service__["a" /* RefreshService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_log_service__["a" /* LogService */]) === "function" && _b || Object])
], WidgetTemplateComponent);

var _a, _b;
//# sourceMappingURL=widget-template.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget-templates/counter-guage/counter-guage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterGuageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_refresh_request__ = __webpack_require__("../../../../../src/app/defs/refresh-request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_refresh_service__ = __webpack_require__("../../../../../src/app/services/refresh.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_widget_template_component__ = __webpack_require__("../../../../../src/app/components/widget-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defs_query__ = __webpack_require__("../../../../../src/app/defs/query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_unit_u_guage_u_guage_component__ = __webpack_require__("../../../../../src/app/components/unit/u-guage/u-guage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CounterGuageComponent = (function (_super) {
    __extends(CounterGuageComponent, _super);
    function CounterGuageComponent(refreshService, logService) {
        var _this = _super.call(this, refreshService, logService) || this;
        /**
        * @description {Number} Data refresh interval
        */
        _this.refreshInterval = 10;
        _this.count = new __WEBPACK_IMPORTED_MODULE_6__components_unit_u_guage_u_guage_component__["a" /* GaugeData */](0, 0, 0);
        return _this;
    }
    CounterGuageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.guageOptions.size = this.componentDef.size.toPixel(100, 100);
        this.refreshService.subscribeForRefresh(this.componentID, [
            new __WEBPACK_IMPORTED_MODULE_0__defs_refresh_request__["a" /* RefreshRequest */](this.refreshInterval, this.countQuery, function (data, err) {
                if (err !== undefined) {
                    _this.onError(err, _this.countQuery);
                }
                else {
                    _this.count = new __WEBPACK_IMPORTED_MODULE_6__components_unit_u_guage_u_guage_component__["a" /* GaugeData */](data.count, data.count, data.count);
                }
            })
        ]);
    };
    return CounterGuageComponent;
}(__WEBPACK_IMPORTED_MODULE_3__components_widget_template_component__["a" /* WidgetTemplateComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__defs_track_type__["a" /* TrackType */])(__WEBPACK_IMPORTED_MODULE_6__components_unit_u_guage_u_guage_component__["b" /* GaugeOptions */]),
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__components_unit_u_guage_u_guage_component__["b" /* GaugeOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__components_unit_u_guage_u_guage_component__["b" /* GaugeOptions */]) === "function" && _a || Object)
], CounterGuageComponent.prototype, "guageOptions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__defs_track_type__["a" /* TrackType */])(Number),
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CounterGuageComponent.prototype, "refreshInterval", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__defs_track_type__["a" /* TrackType */])(__WEBPACK_IMPORTED_MODULE_4__defs_query__["a" /* Query */]),
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__defs_query__["a" /* Query */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__defs_query__["a" /* Query */]) === "function" && _b || Object)
], CounterGuageComponent.prototype, "countQuery", void 0);
CounterGuageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'app-counter-guage',
        template: "\n    <div class=\"container\">\n      <app-u-guage [value]=\"count\" [options]=\"guageOptions\"></app-u-guage>\n      <app-bg-counter [value]=\"count.mean\" class=\"counter\" [size]=\"50\"></app-bg-counter>\n    </div>\n  ",
        styles: ["\n\n    .container {\n      padding: 8px 15px;\n      text-align: center;\n    }\n    .counter {\n      position: relative;\n      top: -50px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_refresh_service__["a" /* RefreshService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_refresh_service__["a" /* RefreshService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */]) === "function" && _d || Object])
], CounterGuageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=counter-guage.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget-templates/counter-sparkline/counter-sparkline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterSparklineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_size__ = __webpack_require__("../../../../../src/app/defs/size.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_unit_u_sparkline_u_sparkline_component__ = __webpack_require__("../../../../../src/app/components/unit/u-sparkline/u-sparkline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defs_refresh_request__ = __webpack_require__("../../../../../src/app/defs/refresh-request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defs_query__ = __webpack_require__("../../../../../src/app/defs/query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_refresh_service__ = __webpack_require__("../../../../../src/app/services/refresh.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_widget_template_component__ = __webpack_require__("../../../../../src/app/components/widget-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CounterSparklineComponent = (function (_super) {
    __extends(CounterSparklineComponent, _super);
    function CounterSparklineComponent(refreshService, logService) {
        var _this = _super.call(this, refreshService, logService) || this;
        /**
       * @description {Number} Data refresh interval
       */
        _this.refreshInterval = 10;
        _this.sparkData = [];
        /**
         * Heading styles
         */
        _this.headingStyles = {
            'font-size.px': '20',
            'color': 'gray'
        };
        _this.sparkOptions = new __WEBPACK_IMPORTED_MODULE_1__components_unit_u_sparkline_u_sparkline_component__["a" /* SparkLinkOptions */]('key', 'value', 'spline', '#9ab57e', '#e55253', '4', undefined, '#ebdd8f', 'currency', new __WEBPACK_IMPORTED_MODULE_0__defs_size__["a" /* Size */]('100', '200'));
        return _this;
    }
    CounterSparklineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sparkOptions.size = this.componentDef.size.toPixel(60, 45);
        this.refreshService.subscribeForRefresh(this.componentID, [
            new __WEBPACK_IMPORTED_MODULE_3__defs_refresh_request__["a" /* RefreshRequest */](this.refreshInterval, this.countQuery, function (data, err) {
                if (err !== undefined) {
                    _this.onError(err, _this.countQuery);
                }
                else {
                    _this.count = data.count;
                }
            }),
            new __WEBPACK_IMPORTED_MODULE_3__defs_refresh_request__["a" /* RefreshRequest */](this.refreshInterval, this.sparkQuery, function (data, err) {
                if (err !== undefined) {
                    _this.onError(err, _this.sparkQuery);
                }
                else {
                    _this.sparkData = data.data;
                }
            })
        ]);
    };
    return CounterSparklineComponent;
}(__WEBPACK_IMPORTED_MODULE_6__components_widget_template_component__["a" /* WidgetTemplateComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__app_defs_track_type__["a" /* TrackType */])(String),
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
    __metadata("design:type", String)
], CounterSparklineComponent.prototype, "heading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__app_defs_track_type__["a" /* TrackType */])(Number),
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CounterSparklineComponent.prototype, "refreshInterval", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__app_defs_track_type__["a" /* TrackType */])(__WEBPACK_IMPORTED_MODULE_4__defs_query__["a" /* Query */]),
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__defs_query__["a" /* Query */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__defs_query__["a" /* Query */]) === "function" && _a || Object)
], CounterSparklineComponent.prototype, "countQuery", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__app_defs_track_type__["a" /* TrackType */])(__WEBPACK_IMPORTED_MODULE_4__defs_query__["a" /* Query */]),
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__defs_query__["a" /* Query */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__defs_query__["a" /* Query */]) === "function" && _b || Object)
], CounterSparklineComponent.prototype, "sparkQuery", void 0);
CounterSparklineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'app-counter-sparkline',
        template: "\n    <div>\n      <app-u-text i18n [text]=\"heading\" [styles]=\"headingStyles\"></app-u-text>\n      <div class=\"h-seperator\"></div>\n      <div fxLayout=\"row\" >\n        <div fxFlex=\"30\" class=\"graph\">\n          <app-bg-counter [value]=\"count\"></app-bg-counter>\n        </div>\n        <div fxFlex class=\"graph\">\n          <app-u-sparkline [data]=\"sparkData\" [options]=\"sparkOptions\"></app-u-sparkline>\n        </div>\n      </div>\n    </div>\n  ",
        styles: ["\n    .tile {\n      width: 200px;\n    }\n\n    .graph {\n      padding: 10px;\n    }\n\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_refresh_service__["a" /* RefreshService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_refresh_service__["a" /* RefreshService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */]) === "function" && _d || Object])
], CounterSparklineComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=counter-sparkline.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget-templates/multi-counters/multi-counters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiCountersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_refresh_request__ = __webpack_require__("../../../../../src/app/defs/refresh-request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_refresh_service__ = __webpack_require__("../../../../../src/app/services/refresh.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_widget_template_component__ = __webpack_require__("../../../../../src/app/components/widget-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defs_query__ = __webpack_require__("../../../../../src/app/defs/query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MultiCountersComponent = (function (_super) {
    __extends(MultiCountersComponent, _super);
    function MultiCountersComponent(refreshService, logService) {
        var _this = _super.call(this, refreshService, logService) || this;
        /**
        * @description {Number} Data refresh interval
        */
        _this.refreshInterval = 10;
        _this.count = {};
        /**
       * Heading styles
       */
        _this.headingStyles = {
            'font-size.px': '20',
            'color': 'gray'
        };
        return _this;
    }
    MultiCountersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshService.subscribeForRefresh(this.componentID, [
            new __WEBPACK_IMPORTED_MODULE_0__defs_refresh_request__["a" /* RefreshRequest */](this.refreshInterval, this.countQuery, function (data, err) {
                if (err !== undefined) {
                    _this.onError(err, _this.countQuery);
                }
                else {
                    _this.count = data;
                }
            })
        ]);
    };
    return MultiCountersComponent;
}(__WEBPACK_IMPORTED_MODULE_3__components_widget_template_component__["a" /* WidgetTemplateComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__defs_track_type__["a" /* TrackType */])(String),
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", String)
], MultiCountersComponent.prototype, "heading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__defs_track_type__["a" /* TrackType */])(Number),
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MultiCountersComponent.prototype, "refreshInterval", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__defs_track_type__["a" /* TrackType */])(__WEBPACK_IMPORTED_MODULE_4__defs_query__["a" /* Query */]),
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__defs_query__["a" /* Query */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__defs_query__["a" /* Query */]) === "function" && _a || Object)
], MultiCountersComponent.prototype, "countQuery", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__defs_track_type__["a" /* TrackType */])(Array),
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MultiCountersComponent.prototype, "counterFields", void 0);
MultiCountersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-multi-counters',
        template: "\n    <div>\n    <app-u-text [text]=\"heading\" [styles]=\"headingStyles\"></app-u-text>\n    <div class=\"h-seperator\"></div>\n    <div fxLayout=\"row\" >\n      <div fxFlex *ngFor=\"let counter of counterFields\">\n        <app-bg-counter [value]=\"count[counter.key]\"></app-bg-counter>\n        <app-u-text [text]=\"counter.name\" [styles]=\"{ 'padding': '1px 10px', 'margin-top': '-4px'}\"></app-u-text>\n      </div>\n    </div>\n  </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_refresh_service__["a" /* RefreshService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_refresh_service__["a" /* RefreshService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */]) === "function" && _c || Object])
], MultiCountersComponent);

var _a, _b, _c;
//# sourceMappingURL=multi-counters.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget-templates/realtime-spline/realtime-spline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtimeSplineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_time_utils__ = __webpack_require__("../../../../../src/app/utilities/time-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defs_refresh_request__ = __webpack_require__("../../../../../src/app/defs/refresh-request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_widget_template_component__ = __webpack_require__("../../../../../src/app/components/widget-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_refresh_service__ = __webpack_require__("../../../../../src/app/services/refresh.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_ufixed_q__ = __webpack_require__("../../../../../src/app/utilities/ufixed-q.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_unit_u_spline_u_spline_component__ = __webpack_require__("../../../../../src/app/components/unit/u-spline/u-spline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__defs_query__ = __webpack_require__("../../../../../src/app/defs/query.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RealtimeSplineComponent = (function (_super) {
    __extends(RealtimeSplineComponent, _super);
    function RealtimeSplineComponent(refreshService, logService) {
        var _this = _super.call(this, refreshService, logService) || this;
        /**
        * @description {Number} Data refresh interval
        */
        _this.refreshInterval = 30;
        /**
         * Maximum number of data points
         */
        _this.dataPoints = 10;
        _this.data = new __WEBPACK_IMPORTED_MODULE_5__utilities_ufixed_q__["a" /* UFixedQ */](_this.dataPoints);
        return _this;
    }
    RealtimeSplineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.splineOptions = new __WEBPACK_IMPORTED_MODULE_6__components_unit_u_spline_u_spline_component__["a" /* SplineOptions */](this.heading);
        this.splineOptions.argumentField = 'time';
        this.splineOptions.dataExport = false;
        this.splineOptions.showDataGrid = false;
        this.splineOptions.series = this.series;
        this.splineOptions.size = this.componentDef.size.toPixel(100, 100);
        this.refreshService.subscribeForRefresh(this.componentID, [
            new __WEBPACK_IMPORTED_MODULE_1__defs_refresh_request__["a" /* RefreshRequest */](this.refreshInterval, this.query, function (data, err) {
                if (err !== undefined) {
                    _this.onError(err, _this.query);
                }
                else {
                    data['time'] = __WEBPACK_IMPORTED_MODULE_0__utilities_time_utils__["a" /* TimeUtils */].currentTime('mm:ss');
                    _this.data.add(data);
                }
            })
        ]);
    };
    return RealtimeSplineComponent;
}(__WEBPACK_IMPORTED_MODULE_2__components_widget_template_component__["a" /* WidgetTemplateComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__defs_track_type__["a" /* TrackType */])(String),
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Input"])(),
    __metadata("design:type", String)
], RealtimeSplineComponent.prototype, "heading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__defs_track_type__["a" /* TrackType */])(Number),
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RealtimeSplineComponent.prototype, "refreshInterval", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__defs_track_type__["a" /* TrackType */])(__WEBPACK_IMPORTED_MODULE_9__defs_query__["a" /* Query */]),
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__defs_query__["a" /* Query */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__defs_query__["a" /* Query */]) === "function" && _a || Object)
], RealtimeSplineComponent.prototype, "query", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__defs_track_type__["a" /* TrackType */])(Number),
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RealtimeSplineComponent.prototype, "dataPoints", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__defs_track_type__["a" /* TrackType */])(Array),
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RealtimeSplineComponent.prototype, "series", void 0);
RealtimeSplineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
        selector: 'app-realtime-spline',
        template: "\n    <div class=\"container\">\n      <app-u-spline [data]=\"data.data\" [options]=\"splineOptions\"></app-u-spline>\n    </div>\n  ",
        styles: ["\n    .container {\n      padding: 10px 20px 50px 20px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_refresh_service__["a" /* RefreshService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_refresh_service__["a" /* RefreshService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_log_service__["a" /* LogService */]) === "function" && _c || Object])
], RealtimeSplineComponent);

var _a, _b, _c;
//# sourceMappingURL=realtime-spline.component.js.map

/***/ }),

/***/ "../../../../../src/app/defs/action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
var Action = (function () {
    function Action(_name, _isDefualt, _cb, _type, _closeOnSelect) {
        this._name = _name;
        this._isDefualt = _isDefualt;
        this._cb = _cb;
        this._type = _type;
        this._closeOnSelect = _closeOnSelect;
    }
    Object.defineProperty(Action.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "isDefualt", {
        get: function () {
            return this._isDefualt;
        },
        set: function (value) {
            this._isDefualt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "closeOnSelect", {
        get: function () {
            return this._closeOnSelect;
        },
        set: function (value) {
            this._closeOnSelect = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "cb", {
        get: function () {
            return this._cb;
        },
        set: function (value) {
            this._cb = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    return Action;
}());

//# sourceMappingURL=action.js.map

/***/ }),

/***/ "../../../../../src/app/defs/component-def.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentDef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_permission_type__ = __webpack_require__("../../../../../src/app/defs/permission-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer__ = __webpack_require__("../../../../class-transformer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defs_umsg__ = __webpack_require__("../../../../../src/app/defs/umsg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defs_dynamic_msg__ = __webpack_require__("../../../../../src/app/defs/dynamic-msg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__size__ = __webpack_require__("../../../../../src/app/defs/size.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComponentDef = (function (_super) {
    __extends(ComponentDef, _super);
    function ComponentDef(id, name, size, inputs) {
        var _this = _super.call(this) || this;
        _this.permissions = new __WEBPACK_IMPORTED_MODULE_0__defs_permission_type__["a" /* PermissionType */]([]);
        _this.id = id;
        _this.size = size;
        _this.inputs = inputs;
        _this.name = name;
        return _this;
    }
    return ComponentDef;
}(__WEBPACK_IMPORTED_MODULE_2__defs_umsg__["a" /* UMsg */]));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["Type"])(function () { return __WEBPACK_IMPORTED_MODULE_4__size__["a" /* Size */]; }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__size__["a" /* Size */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__size__["a" /* Size */]) === "function" && _a || Object)
], ComponentDef.prototype, "size", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["Type"])(function () { return __WEBPACK_IMPORTED_MODULE_3__defs_dynamic_msg__["a" /* DynamicMsg */]; }),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__defs_dynamic_msg__["a" /* DynamicMsg */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__defs_dynamic_msg__["a" /* DynamicMsg */]) === "function" && _b || Object)
], ComponentDef.prototype, "inputs", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["Type"])(function () { return __WEBPACK_IMPORTED_MODULE_0__defs_permission_type__["a" /* PermissionType */]; }),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__defs_permission_type__["a" /* PermissionType */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__defs_permission_type__["a" /* PermissionType */]) === "function" && _c || Object)
], ComponentDef.prototype, "permissions", void 0);
var _a, _b, _c;
//# sourceMappingURL=component-def.js.map

/***/ }),

/***/ "../../../../../src/app/defs/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GLOBAL_REPO_UPLOAD_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GLOBAL_REPO_DOWNLOAD_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WIDGET_TEMPLATE_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CONTAINER_TEMPLATE_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return QUERY_TEMPLATE_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_SIZE; });
var GLOBAL_REPO_UPLOAD_PATH = 'globalComponentRepo';
var GLOBAL_REPO_DOWNLOAD_PATH = 'global_repo.json';
var WIDGET_TEMPLATE_TAG = 'widgetTemplate';
var CONTAINER_TEMPLATE_TAG = 'containerTemplate';
var QUERY_TEMPLATE_TAG = 'queryTemplate';
var BASE_SIZE = 100;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/defs/dynamic-msg.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicMsg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__umsg__ = __webpack_require__("../../../../../src/app/defs/umsg.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DynamicMsg = (function (_super) {
    __extends(DynamicMsg, _super);
    function DynamicMsg() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        args.forEach(function (arg) {
            _this.setValue(arg.key, arg.value);
        });
        return _this;
    }
    DynamicMsg.prototype.setValue = function (key, val) {
        this[key] = val;
    };
    DynamicMsg.prototype.getValue = function (key) {
        return this[key];
    };
    DynamicMsg.prototype.forEach = function (callbackfn) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                callbackfn(key, this[key]);
            }
        }
    };
    DynamicMsg.prototype.assign = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                this.setValue(key, obj[key]);
            }
        }
    };
    return DynamicMsg;
}(__WEBPACK_IMPORTED_MODULE_0__umsg__["a" /* UMsg */]));

//# sourceMappingURL=dynamic-msg.js.map

/***/ }),

/***/ "../../../../../src/app/defs/input-def-group.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDefGroup; });
var InputDefGroup = (function () {
    function InputDefGroup(_group, _inputDefList) {
        this._group = _group;
        this._inputDefList = _inputDefList;
    }
    Object.defineProperty(InputDefGroup.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDefGroup.prototype, "inputDefList", {
        get: function () {
            return this._inputDefList;
        },
        enumerable: true,
        configurable: true
    });
    return InputDefGroup;
}());

//# sourceMappingURL=input-def-group.js.map

/***/ }),

/***/ "../../../../../src/app/defs/input-def.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDef; });
var InputDef = (function () {
    function InputDef(_leafName, _dataType, _group, _options) {
        this._leafName = _leafName;
        this._dataType = _dataType;
        this._group = _group;
        this._options = _options;
        if (this._group !== undefined) {
            this._name = this._group + '.' + this._leafName;
        }
        else {
            this._name = this._leafName;
        }
    }
    Object.defineProperty(InputDef.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDef.prototype, "dataType", {
        get: function () {
            return this._dataType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDef.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDef.prototype, "leafName", {
        get: function () {
            return this._leafName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDef.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    return InputDef;
}());

//# sourceMappingURL=input-def.js.map

/***/ }),

/***/ "../../../../../src/app/defs/name-field.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_umsg__ = __webpack_require__("../../../../../src/app/defs/umsg.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NameField = (function (_super) {
    __extends(NameField, _super);
    function NameField(key, name) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.name = name;
        return _this;
    }
    return NameField;
}(__WEBPACK_IMPORTED_MODULE_0__defs_umsg__["a" /* UMsg */]));

//# sourceMappingURL=name-field.js.map

/***/ }),

/***/ "../../../../../src/app/defs/permission-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PermissionType = (function () {
    function PermissionType(permissions) {
        this.onAuthorizedPermission = 'show';
        this.onUnauthorizedPermission = 'hide';
        this.isExcept = false;
        this.permissionGroups = permissions;
    }
    return PermissionType;
}());

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__defs_track_type__["a" /* TrackType */])(Boolean),
    __metadata("design:type", Object)
], PermissionType.prototype, "isExcept", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__defs_track_type__["a" /* TrackType */])(Array),
    __metadata("design:type", Object)
], PermissionType.prototype, "permissionGroups", void 0);
//# sourceMappingURL=permission-type.js.map

/***/ }),

/***/ "../../../../../src/app/defs/preference-def.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferenceDef; });
var PreferenceDef = (function () {
    function PreferenceDef() {
    }
    Object.defineProperty(PreferenceDef.prototype, "theme", {
        get: function () {
            return this._theme;
        },
        set: function (_theme) {
            this._theme = _theme;
        },
        enumerable: true,
        configurable: true
    });
    return PreferenceDef;
}());

//# sourceMappingURL=preference-def.js.map

/***/ }),

/***/ "../../../../../src/app/defs/query.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Query; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_defs_track_type__ = __webpack_require__("../../../../../src/app/defs/track-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Query = (function () {
    function Query(_path, _params) {
        this.path = _path;
        this.params = _params;
    }
    return Query;
}());

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__app_defs_track_type__["a" /* TrackType */])(String),
    __metadata("design:type", String)
], Query.prototype, "path", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__app_defs_track_type__["a" /* TrackType */])(Object),
    __metadata("design:type", Object)
], Query.prototype, "params", void 0);
//# sourceMappingURL=query.js.map

/***/ }),

/***/ "../../../../../src/app/defs/refresh-request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefreshRequest; });
var RefreshRequest = (function () {
    function RefreshRequest(_intervalSec, _query, _callback) {
        this._intervalSec = _intervalSec;
        this._query = _query;
        this._callback = _callback;
    }
    Object.defineProperty(RefreshRequest.prototype, "query", {
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RefreshRequest.prototype, "callback", {
        get: function () {
            return this._callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RefreshRequest.prototype, "interval", {
        get: function () {
            return this._intervalSec;
        },
        enumerable: true,
        configurable: true
    });
    return RefreshRequest;
}());

//# sourceMappingURL=refresh-request.js.map

/***/ }),

/***/ "../../../../../src/app/defs/repo-def.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoDef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_component_def__ = __webpack_require__("../../../../../src/app/defs/component-def.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__umsg__ = __webpack_require__("../../../../../src/app/defs/umsg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_class_transformer__ = __webpack_require__("../../../../class-transformer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_class_transformer__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepoDef = (function (_super) {
    __extends(RepoDef, _super);
    function RepoDef(widgetTemplate, queryTemplate, containerTemplate) {
        var _this = _super.call(this) || this;
        _this.containerTemplate = containerTemplate;
        _this.queryTemplate = queryTemplate;
        _this.widgetTemplate = widgetTemplate;
        return _this;
    }
    return RepoDef;
}(__WEBPACK_IMPORTED_MODULE_1__umsg__["a" /* UMsg */]));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_class_transformer__["Type"])(function () { return __WEBPACK_IMPORTED_MODULE_0__defs_component_def__["a" /* ComponentDef */]; }),
    __metadata("design:type", Array)
], RepoDef.prototype, "widgetTemplate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_class_transformer__["Type"])(function () { return __WEBPACK_IMPORTED_MODULE_0__defs_component_def__["a" /* ComponentDef */]; }),
    __metadata("design:type", Array)
], RepoDef.prototype, "containerTemplate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_class_transformer__["Type"])(function () { return __WEBPACK_IMPORTED_MODULE_0__defs_component_def__["a" /* ComponentDef */]; }),
    __metadata("design:type", Array)
], RepoDef.prototype, "queryTemplate", void 0);
//# sourceMappingURL=repo-def.js.map

/***/ }),

/***/ "../../../../../src/app/defs/size.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Size; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_constants__ = __webpack_require__("../../../../../src/app/defs/constants.ts");

var Size = (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
    }
    Size.prototype.toPixel = function (widthPercentage, heightPercentage) {
        return new Size((parseInt(this.width, 10) * __WEBPACK_IMPORTED_MODULE_0__defs_constants__["a" /* BASE_SIZE */] * widthPercentage / 100).toString(), (parseInt(this.height, 10) * __WEBPACK_IMPORTED_MODULE_0__defs_constants__["a" /* BASE_SIZE */] * heightPercentage / 100).toString());
    };
    return Size;
}());

//# sourceMappingURL=size.js.map

/***/ }),

/***/ "../../../../../src/app/defs/sort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sort; });
var Sort = (function () {
    function Sort(field, isDesc) {
        this.field = field;
        this.isDesc = isDesc;
    }
    return Sort;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ "../../../../../src/app/defs/theme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theme; });
var Theme = (function () {
    function Theme(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    Object.defineProperty(Theme.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Theme.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Theme;
}());

//# sourceMappingURL=theme.js.map

/***/ }),

/***/ "../../../../../src/app/defs/track-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TrackType;
function TrackType(type) {
    return function (target, propertyKey) {
        Reflect.defineMetadata('design:type', type, target, propertyKey);
    };
}
//# sourceMappingURL=track-type.js.map

/***/ }),

/***/ "../../../../../src/app/defs/umsg.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UMsg; });
/**
 * Base transpotable message.
 */
var UMsg = (function () {
    function UMsg() {
    }
    UMsg.prototype.getQueryString = function () {
        var _this = this;
        var req = null;
        Object.getOwnPropertyNames(this).forEach(function (item, index) {
            if (req == null) {
                req = item + '=' + JSON.stringify(_this[item]);
            }
            else {
                req += ('&' + item + '=' + JSON.stringify(_this[item]));
            }
        });
        return req;
    };
    return UMsg;
}());

//# sourceMappingURL=umsg.js.map

/***/ }),

/***/ "../../../../../src/app/defs/user-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
var UserInfo = (function () {
    function UserInfo(name, role) {
        this.name = name;
        this.role = role;
    }
    return UserInfo;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ "../../../../../src/app/directives/focus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FocusDirective = (function () {
    function FocusDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    Object.defineProperty(FocusDirective.prototype, "appFocus", {
        set: function (value) {
            if (value) {
                this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
            }
        },
        enumerable: true,
        configurable: true
    });
    return FocusDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], FocusDirective.prototype, "appFocus", null);
FocusDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appFocus]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], FocusDirective);

var _a, _b;
//# sourceMappingURL=focus.directive.js.map

/***/ }),

/***/ "../../../../../src/app/modules/tp-dep.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TpDepModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_permission__ = __webpack_require__("../../../../angular2-permission/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_grid__ = __webpack_require__("../../../../angular2-grid/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_devextreme_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * Thrid-party Module import
 */
var TpDepModule = (function () {
    function TpDepModule() {
    }
    return TpDepModule;
}());
TpDepModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxCircularGaugeModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxSelectBoxModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxDataGridModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxCheckBoxModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxSparklineModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxChartModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxTileViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxPopupModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxButtonModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxTemplateModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxButtonModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxPopupModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxNumberBoxModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxFormModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxTabPanelModule"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_permission__["a" /* Ng2Permission */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_grid__["c" /* NgGridModule */],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxPieChartModule"],
            __WEBPACK_IMPORTED_MODULE_4_devextreme_angular__["DxAutocompleteModule"]
        ]
    })
], TpDepModule);

//# sourceMappingURL=tp-dep.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/component-store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_umap__ = __webpack_require__("../../../../../src/app/utilities/umap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentStore = (function () {
    function ComponentStore(_resolver, _appRef) {
        var _this = this;
        this._resolver = _resolver;
        this._appRef = _appRef;
        this.componentsMap = new __WEBPACK_IMPORTED_MODULE_0__utilities_umap__["a" /* UMap */]();
        this.allComponents = Array.from(_resolver['_factories'].keys());
        console.log(JSON.stringify(this.allComponents));
        this.allComponents.forEach(function (element) {
            _this.componentsMap.put(element.name, element);
        });
        console.log(JSON.stringify(this.componentsMap));
    }
    ComponentStore.prototype.findComponentByName = function (name) {
        return this.componentsMap.get(name);
    };
    ComponentStore.prototype.contains = function (name) {
        console.log(JSON.stringify(this.componentsMap));
        return this.componentsMap.contains(name);
    };
    return ComponentStore;
}());
ComponentStore = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]) === "function" && _b || Object])
], ComponentStore);

var _a, _b;
//# sourceMappingURL=component-store.js.map

/***/ }),

/***/ "../../../../../src/app/services/decoder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decoder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_class_transformer__ = __webpack_require__("../../../../class-transformer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_class_transformer__);

var Decoder = (function () {
    function Decoder() {
    }
    Decoder.decode = function (clz, obj) {
        // if (clz.prototype === 'DynamicMsg') {
        //     const msg = new DynamicMsg();
        //     return msg.assign(obj);
        // }
        return Object(__WEBPACK_IMPORTED_MODULE_0_class_transformer__["plainToClass"])(clz, obj);
    };
    /**
     * Object cast to given class type
     * @param obj Object to cast
     * @param cl Object cast in to this object type
     */
    Decoder.cast = function (cl, obj) {
        obj.__proto__ = cl.prototype;
        return obj;
    };
    return Decoder;
}());

//# sourceMappingURL=decoder.js.map

/***/ }),

/***/ "../../../../../src/app/services/grid-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridHelper; });
var GridHelper = (function () {
    function GridHelper(_options) {
        this._options = _options;
        this._col = 1;
    }
    GridHelper.prototype.generateDefaultItemConfig = function (size) {
        return { 'dragHandle': '.handle', 'col': this._col++, 'row': 1, 'sizex': parseInt(size.width, 10),
            'sizey': parseInt(size.height, 10) };
    };
    Object.defineProperty(GridHelper.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    GridHelper.prototype.createGridItem = function (item, size) {
        return {
            'data': item,
            'config': this.generateDefaultItemConfig(size)
        };
    };
    return GridHelper;
}());

//# sourceMappingURL=grid-helper.js.map

/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Send HTTP GET and POST requests. Prefered to use this service for all http communications.
 */
var HttpService = (function () {
    function HttpService(logService, http) {
        this.logService = logService;
        this.http = http;
    }
    /**
     * @description Send HTTP request, Request method decide according to the config
     * @param {string} reqPath  Request path, this will concat with base URL
     * @param {msg} object  Payload message to send
     *
     * @example
     * send('testQuery/Count', new UMsg());
     * Base URL = http://localhost:5556
     * So Request URL = http://localhost:5556/testQuery/Count
     */
    HttpService.prototype.send = function (reqPath, msg) {
        this.logService.printTrace('Send http request:', msg);
        var reqMethod = __WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__["a" /* environment */].reqMethod;
        var reqBaseUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__["a" /* environment */].reqBaseUrl;
        var reqUrl = reqBaseUrl + '/' + reqPath;
        if (reqMethod === 'POST') {
            return this.sendPostRequest(reqUrl, msg);
        }
        else {
            return this.sendGetRequest(reqUrl, msg);
        }
    };
    /**
     * @description Send GET requests
     * @param {string} reqUrl  Full request URL
     * @param {msg} object  Payload message to send
     *
     * @example
     * send('http://localhost:5556/testQuery/Count', new UMsg());
     *
     */
    HttpService.prototype.sendGetRequest = function (reqUrl, msg) {
        this.logService.printTrace('Send http get request:', msg);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', __WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__["a" /* environment */].contentType);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            search: this.createQueryParam(msg)
        });
        return this.http.get(reqUrl, options)
            .map(function (response) { return response.json(); });
    };
    /**
     * @description Send POST requests
     * @param {string} reqUrl  Full request URL
     * @param {msg} object  Payload message to send
     *
     * @example
     * send('http://localhost:5556/testQuery/Count', new UMsg());
     *
     */
    HttpService.prototype.sendPostRequest = function (reqUrl, msg) {
        this.logService.printTrace('Send http post request:', msg);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': __WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__["a" /* environment */].contentType });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(reqUrl, msg, options)
            .map(function (response) { return response.json(); });
    };
    HttpService.prototype.sendGet = function (reqUrl, options) {
        this.logService.printTrace('Send http get request:', reqUrl);
        return this.http.get(reqUrl, options);
    };
    HttpService.prototype.createQueryParam = function (msg) {
        if (msg === undefined || msg === null) {
            return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        }
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */](msg.getQueryString());
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__log_service__["a" /* LogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], HttpService);

var _a, _b;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/interval.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntervalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Unit testable Interval service. Wrapped angular setInterval functionality.
 * We can mock this service using {@link MockIntervalService}
 * Preffered to use this in all projects.
 * Example usage {@link BgCounterComponent}
 */
var IntervalService = (function () {
    function IntervalService() {
    }
    /**
   * @description Set Interval with function callback
   * @param {callback} callback Callback function on timeout trigger
   * @param {number} time  Timer interval
   *
   * @example
   * setInterval(
   * {
   *     console.log('Callback !!');
   * }, 10);
   *
   */
    IntervalService.prototype.setInterval = function (callback, time) {
        return setInterval(callback, time);
    };
    /**
     * @description Stop interval
     */
    IntervalService.prototype.clearInterval = function (interval) {
        clearInterval(interval);
        interval = undefined;
    };
    return IntervalService;
}());
IntervalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], IntervalService);

//# sourceMappingURL=interval.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/log.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_log4ts_build_Logger__ = __webpack_require__("../../../../log4ts/build/Logger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_log4ts_build_Logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_log4ts_build_Logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_log4ts_build_LoggerConfig__ = __webpack_require__("../../../../log4ts/build/LoggerConfig.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_log4ts_build_LoggerConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_log4ts_build_LoggerConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_log4ts_build_layouts_BasicLayout__ = __webpack_require__("../../../../log4ts/build/layouts/BasicLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_log4ts_build_layouts_BasicLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_log4ts_build_layouts_BasicLayout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_log4ts_build_appenders_ConsoleAppender__ = __webpack_require__("../../../../log4ts/build/appenders/ConsoleAppender.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_log4ts_build_appenders_ConsoleAppender___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_log4ts_build_appenders_ConsoleAppender__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_log4ts_build_LogLevel__ = __webpack_require__("../../../../log4ts/build/LogLevel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_log4ts_build_LogLevel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_log4ts_build_LogLevel__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Service for console logging with log levels. Logs prints only if the log level is higher or equal to the configured log level.
 * Log levels (accending) :
 *  1. ALL
 *  2. TRACE
 *  3. DEBUG
 *  4. INFO
 *  5. WARN
 *  6. ERROR
 *  7. FATAL
 *  8. OFF
 *
 */
var LogService = (function () {
    function LogService() {
        this.defaultDeep = 3;
        this.layout = new __WEBPACK_IMPORTED_MODULE_4_log4ts_build_layouts_BasicLayout___default.a();
        this.appender = new __WEBPACK_IMPORTED_MODULE_5_log4ts_build_appenders_ConsoleAppender___default.a();
        this.appender.setLayout(this.layout);
        this.config = new __WEBPACK_IMPORTED_MODULE_3_log4ts_build_LoggerConfig___default.a(this.appender);
        var level = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].logLevel;
        this.config.setLevel(__WEBPACK_IMPORTED_MODULE_6_log4ts_build_LogLevel__["LogLevel"][level]);
        this.log = new __WEBPACK_IMPORTED_MODULE_2_log4ts_build_Logger___default.a();
        __WEBPACK_IMPORTED_MODULE_2_log4ts_build_Logger___default.a.setConfig(this.config);
    }
    Object.defineProperty(LogService.prototype, "$config", {
        get: function () {
            return this.config;
        },
        enumerable: true,
        configurable: true
    });
    /**
   * @param {string} message  Log message to print
   * @param {any} object  Object to print
   * @param {number} deep  Depth of object printing. Default: 3
   *
   * @example
   * printInfo('Test Info', {'name':'Test'});
   *
   */
    LogService.prototype.printInfo = function (message, object, deep) {
        this.log.info(message, object, deep || this.defaultDeep);
    };
    LogService.prototype.printError = function (message, object, deep) {
        this.log.error(message, object, deep || this.defaultDeep);
    };
    LogService.prototype.printWarn = function (message, object, deep) {
        this.log.warn(message, object, deep || this.defaultDeep);
    };
    LogService.prototype.printTrace = function (message, object, deep) {
        this.log.trace(message, object, deep || this.defaultDeep);
    };
    LogService.prototype.printDebug = function (message, object, deep) {
        this.log.debug(message, object, deep || this.defaultDeep);
    };
    LogService.prototype.printFatal = function (message, object, deep) {
        this.log.fatal(message, object, deep || this.defaultDeep);
    };
    LogService.prototype.printLog = function (message, object, deep) {
        this.log.log(message, object, deep || this.defaultDeep);
    };
    return LogService;
}());
LogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LogService);

//# sourceMappingURL=log.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/permission-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_permission__ = __webpack_require__("../../../../angular2-permission/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermissionManagerService = (function () {
    function PermissionManagerService(_permissionService) {
        this._permissionService = _permissionService;
        this.addPermission('WIDGET_CREATE');
        this.addPermission('BUSINESS_STATS');
    }
    PermissionManagerService.prototype.addPermission = function (type) {
        this._permissionService.add(type);
    };
    PermissionManagerService.prototype.getAllowedPermissions = function () {
        return this._permissionService.store;
    };
    PermissionManagerService.prototype.hasOnePermission = function (types) {
        return this._permissionService.hasOneDefined(types);
    };
    return PermissionManagerService;
}());
PermissionManagerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_permission__["b" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_permission__["b" /* PermissionService */]) === "function" && _a || Object])
], PermissionManagerService);

var _a;
//# sourceMappingURL=permission-manager.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/popup-driver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PopupProperties */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupDriverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupProperties = (function () {
    function PopupProperties(_options, _content, _actions) {
        this._options = _options;
        this._content = _content;
        this._actions = _actions;
    }
    Object.defineProperty(PopupProperties.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupProperties.prototype, "content", {
        get: function () {
            return this._content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupProperties.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: true,
        configurable: true
    });
    return PopupProperties;
}());

var PopupDriverService = (function () {
    function PopupDriverService() {
        this.openPopup$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopupDriverService.prototype.openPopup = function (options, content, actions) {
        this.openPopup$.emit(new PopupProperties(options, content, actions));
    };
    return PopupDriverService;
}());
PopupDriverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PopupDriverService);

//# sourceMappingURL=popup-driver.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/push-channel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushChannelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PushChannelService = (function () {
    function PushChannelService() {
    }
    return PushChannelService;
}());
PushChannelService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PushChannelService);

//# sourceMappingURL=push-channel.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/refresh.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReqEntry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefreshService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_query_provider__ = __webpack_require__("../../../../../src/app/services/service-query.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_query_interface__ = __webpack_require__("../../../../../src/app/services/service-query.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_query_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_service_query_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_umap__ = __webpack_require__("../../../../../src/app/utilities/umap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_interval_service__ = __webpack_require__("../../../../../src/app/services/interval.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utilities_utils__ = __webpack_require__("../../../../../src/app/utilities/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ReqEntry = (function () {
    function ReqEntry(_id, _req) {
        this._id = _id;
        this._req = _req;
    }
    Object.defineProperty(ReqEntry.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReqEntry.prototype, "req", {
        get: function () {
            return this._req;
        },
        enumerable: true,
        configurable: true
    });
    return ReqEntry;
}());

var RefreshService = (function () {
    function RefreshService(_intervalService, _serviceQuery, _logService) {
        this._intervalService = _intervalService;
        this._serviceQuery = _serviceQuery;
        this._logService = _logService;
        this._interval = undefined;
        this._unitInterval = 1;
        this._unitCount = 0;
        this._subscribers = new __WEBPACK_IMPORTED_MODULE_3__utilities_umap__["a" /* UMap */]();
        this._requestsOnInterval = new __WEBPACK_IMPORTED_MODULE_3__utilities_umap__["a" /* UMap */]();
    }
    RefreshService.prototype.startTimer = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_6__utilities_utils__["e" /* isUndefined */](this._interval)) {
            return;
        }
        this._logService.printTrace('Timer started');
        this._interval = this._intervalService.setInterval(function () { return _this.onTimer(); }, this._unitInterval * 1000);
    };
    RefreshService.prototype.stopTimer = function () {
        this._intervalService.clearInterval(this._interval);
        this._unitCount = 0;
        this._logService.printTrace('Timer stoped');
    };
    RefreshService.prototype.onTimer = function () {
        var _this = this;
        this._requestsOnInterval.forEach(function (key, value) {
            if (_this._unitCount % key === 0) {
                var _loop_1 = function (i) {
                    var entry = value[i];
                    if (!_this._subscribers.contains(entry.id)) {
                        _this._logService.printTrace('Subscription removed:', entry.id);
                        value.splice(i, 1);
                        return "continue";
                    }
                    _this._serviceQuery.query(entry.req.query).subscribe(function (resp) {
                        entry.req.callback(resp, undefined);
                    }, function (err) {
                        _this._logService.printError('Refresh query failed. Error:', err);
                        entry.req.callback(undefined, err);
                    });
                };
                for (var i = value.length - 1; i >= 0; i -= 1) {
                    _loop_1(i);
                }
            }
        });
        this._unitCount++;
    };
    RefreshService.prototype.subscribeForRefresh = function (id, requests) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__utilities_utils__["e" /* isUndefined */](id)) {
            this._logService.printError('Subcription received from undefined id');
            return;
        }
        this._logService.printTrace('Subscribe for refresh:', id);
        this._subscribers.put(id, '');
        requests.forEach(function (item) {
            var array = _this._requestsOnInterval.getOrDefault(item.interval, new Array());
            array.push(new ReqEntry(id, item));
            _this._requestsOnInterval.put(item.interval, array);
        });
        this.startTimer();
    };
    RefreshService.prototype.unSubscribeForRefresh = function (id) {
        this._logService.printTrace('Pending Unsubscribe for refresh:', id);
        this._subscribers.remove(id);
    };
    return RefreshService;
}());
RefreshService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_query_provider__["a" /* SERVICE_QUERY */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_interval_service__["a" /* IntervalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interval_service__["a" /* IntervalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_service_query_interface__["IServiceQuery"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_service_query_interface__["IServiceQuery"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__log_service__["a" /* LogService */]) === "function" && _c || Object])
], RefreshService);

var _a, _b, _c;
//# sourceMappingURL=refresh.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/service-query.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=service-query.interface.js.map

/***/ }),

/***/ "../../../../../src/app/services/service-query.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVICE_QUERY; });
/* unused harmony export serviceQueryFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return serviceQueryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simple_service_query__ = __webpack_require__("../../../../../src/app/services/simple-service-query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");



var SERVICE_QUERY = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["InjectionToken"]('app.query');
function serviceQueryFactory(httpService) {
    return new __WEBPACK_IMPORTED_MODULE_0__simple_service_query__["a" /* SimpleServiceQuery */](httpService);
}
var serviceQueryProvider = {
    provide: SERVICE_QUERY,
    useFactory: serviceQueryFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]]
};
//# sourceMappingURL=service-query.provider.js.map

/***/ }),

/***/ "../../../../../src/app/services/simple-service-query.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleServiceQuery; });
var SimpleServiceQuery = (function () {
    function SimpleServiceQuery(_httpService) {
        this._httpService = _httpService;
    }
    SimpleServiceQuery.prototype.query = function (query) {
        return this._httpService.send(query.path, query.params);
    };
    return SimpleServiceQuery;
}());

//# sourceMappingURL=simple-service-query.js.map

/***/ }),

/***/ "../../../../../src/app/services/theme-store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeStoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defs_theme__ = __webpack_require__("../../../../../src/app/defs/theme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeStoreService = (function () {
    function ThemeStoreService() {
        this._supportedThemes = [];
        this._supportedThemes =
            [new __WEBPACK_IMPORTED_MODULE_0__defs_theme__["a" /* Theme */]('generic.light', 'Light'),
                new __WEBPACK_IMPORTED_MODULE_0__defs_theme__["a" /* Theme */]('generic.dark', 'Dark'),
                new __WEBPACK_IMPORTED_MODULE_0__defs_theme__["a" /* Theme */]('android5.light', 'Android5 Light'),
                new __WEBPACK_IMPORTED_MODULE_0__defs_theme__["a" /* Theme */]('ios7.default', 'Ios7 Default'),
                new __WEBPACK_IMPORTED_MODULE_0__defs_theme__["a" /* Theme */]('win10.black', 'Win10 Black'),
                new __WEBPACK_IMPORTED_MODULE_0__defs_theme__["a" /* Theme */]('win10.white', 'Win10 White'),
                new __WEBPACK_IMPORTED_MODULE_0__defs_theme__["a" /* Theme */]('generic.light.compact', 'Light Compact'),
                new __WEBPACK_IMPORTED_MODULE_0__defs_theme__["a" /* Theme */]('generic.dark.compact', 'Dark Compact'),
                new __WEBPACK_IMPORTED_MODULE_0__defs_theme__["a" /* Theme */]('generic.contrast', 'Contrast'),
                new __WEBPACK_IMPORTED_MODULE_0__defs_theme__["a" /* Theme */]('generic.contrast.compact', 'Contrast Compact')
            ];
    }
    Object.defineProperty(ThemeStoreService.prototype, "supportedThemes", {
        get: function () {
            return this._supportedThemes;
        },
        set: function (value) {
            this._supportedThemes = value;
        },
        enumerable: true,
        configurable: true
    });
    return ThemeStoreService;
}());
ThemeStoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ThemeStoreService);

//# sourceMappingURL=theme-store.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user-context.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserContextService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__permission_manager_service__ = __webpack_require__("../../../../../src/app/services/permission-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defs_user_info__ = __webpack_require__("../../../../../src/app/defs/user-info.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__decoder__ = __webpack_require__("../../../../../src/app/services/decoder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_utils__ = __webpack_require__("../../../../../src/app/utilities/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defs_constants__ = __webpack_require__("../../../../../src/app/defs/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_query_interface__ = __webpack_require__("../../../../../src/app/services/service-query.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_query_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__services_service_query_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_query_provider__ = __webpack_require__("../../../../../src/app/services/service-query.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme_store_service__ = __webpack_require__("../../../../../src/app/services/theme-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__defs_preference_def__ = __webpack_require__("../../../../../src/app/defs/preference-def.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__defs_component_def__ = __webpack_require__("../../../../../src/app/defs/component-def.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utilities_umap__ = __webpack_require__("../../../../../src/app/utilities/umap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__defs_query__ = __webpack_require__("../../../../../src/app/defs/query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__defs_repo_def__ = __webpack_require__("../../../../../src/app/defs/repo-def.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
















var UserContextService = (function () {
    function UserContextService(_themeStore, _serviceQuery, _logService, _httpService, _permissionService) {
        this._themeStore = _themeStore;
        this._serviceQuery = _serviceQuery;
        this._logService = _logService;
        this._httpService = _httpService;
        this._permissionService = _permissionService;
        this.widgetTemplateInsts = [];
        this.widgetTemplateInstsMap = new __WEBPACK_IMPORTED_MODULE_12__utilities_umap__["a" /* UMap */]();
        this.queryComponantInsts = [];
        this.queryTemplateInstsMap = new __WEBPACK_IMPORTED_MODULE_12__utilities_umap__["a" /* UMap */]();
        this.containerComponantInsts = [];
        this.userPreference = new __WEBPACK_IMPORTED_MODULE_10__defs_preference_def__["a" /* PreferenceDef */]();
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_1__defs_user_info__["a" /* UserInfo */]('Test User', 'admin');
        this.loadProfile();
    }
    UserContextService.prototype.loadProfile = function () {
        var _this = this;
        this.userPreference.theme = this._themeStore.supportedThemes[0];
        this._serviceQuery.query(new __WEBPACK_IMPORTED_MODULE_14__defs_query__["a" /* Query */](__WEBPACK_IMPORTED_MODULE_4__defs_constants__["c" /* GLOBAL_REPO_DOWNLOAD_PATH */], undefined))
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_2__decoder__["a" /* Decoder */].decode(__WEBPACK_IMPORTED_MODULE_15__defs_repo_def__["a" /* RepoDef */], res); }).subscribe(function (data) {
            if (!__WEBPACK_IMPORTED_MODULE_3__utilities_utils__["e" /* isUndefined */](data.widgetTemplate)) {
                data.widgetTemplate.forEach(function (el) {
                    _this.addWidgetDef(__WEBPACK_IMPORTED_MODULE_2__decoder__["a" /* Decoder */].decode(__WEBPACK_IMPORTED_MODULE_11__defs_component_def__["a" /* ComponentDef */], el));
                });
            }
            if (!__WEBPACK_IMPORTED_MODULE_3__utilities_utils__["e" /* isUndefined */](data.queryTemplate)) {
                data.queryTemplate.forEach(function (el) {
                    _this.addQueryDef(__WEBPACK_IMPORTED_MODULE_2__decoder__["a" /* Decoder */].decode(__WEBPACK_IMPORTED_MODULE_11__defs_component_def__["a" /* ComponentDef */], el));
                });
            }
            _this.containerComponantInsts.push.apply(_this.containerComponantInsts, data.containerTemplate);
        }, function (err) {
            _this._logService.printError('Global repo file load fail');
        });
    };
    UserContextService.prototype.addContainerTemplate = function (containerDef, cb) {
        var _this = this;
        var copy = containerDef;
        this._serviceQuery.query(new __WEBPACK_IMPORTED_MODULE_14__defs_query__["a" /* Query */](__WEBPACK_IMPORTED_MODULE_4__defs_constants__["d" /* GLOBAL_REPO_UPLOAD_PATH */] + '/' + __WEBPACK_IMPORTED_MODULE_4__defs_constants__["b" /* CONTAINER_TEMPLATE_TAG */], copy))
            .subscribe(function (resp) {
            _this.containerComponantInsts.push(containerDef);
            cb(containerDef, undefined);
        }, function (err) {
            cb(undefined, err);
        });
    };
    UserContextService.prototype.addWidgetTemplate = function (widgetDef, cb) {
        var _this = this;
        var copy = widgetDef;
        this._serviceQuery.query(new __WEBPACK_IMPORTED_MODULE_14__defs_query__["a" /* Query */](__WEBPACK_IMPORTED_MODULE_4__defs_constants__["d" /* GLOBAL_REPO_UPLOAD_PATH */] + '/' + __WEBPACK_IMPORTED_MODULE_4__defs_constants__["f" /* WIDGET_TEMPLATE_TAG */], copy))
            .subscribe(function (resp) {
            _this.addWidgetDef(widgetDef);
            cb(widgetDef, undefined);
        }, function (err) {
            cb(undefined, err);
        });
    };
    UserContextService.prototype.addQueryTemplate = function (queryDef, cb) {
        var _this = this;
        var copy = queryDef;
        this._serviceQuery.query(new __WEBPACK_IMPORTED_MODULE_14__defs_query__["a" /* Query */](__WEBPACK_IMPORTED_MODULE_4__defs_constants__["d" /* GLOBAL_REPO_UPLOAD_PATH */] + '/' + __WEBPACK_IMPORTED_MODULE_4__defs_constants__["e" /* QUERY_TEMPLATE_TAG */], copy))
            .subscribe(function (resp) {
            _this.addQueryDef(queryDef);
            cb(queryDef, undefined);
        }, function (err) {
            cb(undefined, err);
        });
    };
    UserContextService.prototype.findWidgetDef = function (id) {
        return this.widgetTemplateInstsMap.get(id);
    };
    UserContextService.prototype.findQueryDef = function (id) {
        return this.queryTemplateInstsMap.get(id);
    };
    UserContextService.prototype.addWidgetDef = function (def) {
        this.widgetTemplateInsts.push(def);
        this.widgetTemplateInstsMap.put(def.id, def);
    };
    UserContextService.prototype.addQueryDef = function (def) {
        this.queryComponantInsts.push(def);
        this.queryTemplateInstsMap.put(def.id, def);
    };
    return UserContextService;
}());
UserContextService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__service_query_provider__["a" /* SERVICE_QUERY */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__theme_store_service__["a" /* ThemeStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__theme_store_service__["a" /* ThemeStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_service_query_interface__["IServiceQuery"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_service_query_interface__["IServiceQuery"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__log_service__["a" /* LogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__permission_manager_service__["a" /* PermissionManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__permission_manager_service__["a" /* PermissionManagerService */]) === "function" && _e || Object])
], UserContextService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-context.service.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/time-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var TimeUtils = (function () {
    function TimeUtils() {
    }
    TimeUtils.currentEpoc = function () {
        return new Date().getTime();
    };
    TimeUtils.currentTime = function (format) {
        return __WEBPACK_IMPORTED_MODULE_0_moment__().format(format);
    };
    return TimeUtils;
}());

//# sourceMappingURL=time-utils.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/ufixed-q.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UFixedQ; });
var UFixedQ = (function () {
    function UFixedQ(_fixedSize) {
        this._fixedSize = _fixedSize;
        this.size = 0;
        this.data = [];
    }
    UFixedQ.prototype.fixedSize = function () {
        return this._fixedSize;
    };
    UFixedQ.prototype.add = function (item) {
        if (this.size >= this._fixedSize) {
            this.data.shift();
        }
        else {
            this.size++;
        }
        this.data.push(item);
    };
    return UFixedQ;
}());

//# sourceMappingURL=ufixed-q.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/umap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_utils__ = __webpack_require__("../../../../../src/app/utilities/utils.ts");

var UMap = (function () {
    function UMap() {
        this.length = 0;
        this.data = {};
    }
    UMap.prototype.toStr = function (key) {
        if (__WEBPACK_IMPORTED_MODULE_0__utilities_utils__["e" /* isUndefined */](key)) {
            return '';
        }
        return key.toString();
    };
    /**
     * Add Data to map, Return old item if key already exist
     * @param key Key
     * @param value Value
     */
    UMap.prototype.put = function (key, value) {
        if (__WEBPACK_IMPORTED_MODULE_0__utilities_utils__["e" /* isUndefined */](key) || __WEBPACK_IMPORTED_MODULE_0__utilities_utils__["e" /* isUndefined */](value)) {
            return undefined;
        }
        var ret;
        var k = '$' + this.toStr(key);
        var previousElement = this.data[k];
        if (__WEBPACK_IMPORTED_MODULE_0__utilities_utils__["e" /* isUndefined */](previousElement)) {
            this.length++;
            ret = undefined;
        }
        else {
            ret = previousElement.value;
        }
        this.data[k] = {
            key: key,
            value: value
        };
        return ret;
    };
    /**
     * Return value for given key
     * @param key Find key
     */
    UMap.prototype.get = function (key) {
        var pair = this.data['$' + this.toStr(key)];
        if (__WEBPACK_IMPORTED_MODULE_0__utilities_utils__["e" /* isUndefined */](pair)) {
            return undefined;
        }
        return pair.value;
    };
    /**
   * Check value existance
   * @param key Find key
   */
    UMap.prototype.contains = function (key) {
        var pair = this.data['$' + this.toStr(key)];
        if (__WEBPACK_IMPORTED_MODULE_0__utilities_utils__["e" /* isUndefined */](pair)) {
            return false;
        }
        return true;
    };
    /**
     * Return value for given key, if undefined default value
     * @param key Find key
     * @param defaultVal Default value in undefined
     */
    UMap.prototype.getOrDefault = function (key, defaultVal) {
        var pair = this.data['$' + this.toStr(key)];
        if (__WEBPACK_IMPORTED_MODULE_0__utilities_utils__["e" /* isUndefined */](pair)) {
            return defaultVal;
        }
        return pair.value;
    };
    /**
     * Remove key value from map
     * @param key Key to remove
     */
    UMap.prototype.remove = function (key) {
        var k = '$' + this.toStr(key);
        var previousElement = this.data[k];
        if (!__WEBPACK_IMPORTED_MODULE_0__utilities_utils__["e" /* isUndefined */](previousElement)) {
            delete this.data[k];
            this.length--;
            return previousElement.value;
        }
        return undefined;
    };
    /**
     * Clear all
     */
    UMap.prototype.clear = function () {
        this.data = {};
        this.length = 0;
    };
    /**
     * Return map size
     */
    UMap.prototype.size = function () {
        return this.length;
    };
    /**
     * Iterate through elements
     * @param callbackfn Function callback for iterator
     */
    UMap.prototype.forEach = function (callbackfn) {
        for (var name in this.data) {
            if (__WEBPACK_IMPORTED_MODULE_0__utilities_utils__["d" /* has */](this.data, name)) {
                var pair = this.data[name];
                var ret = callbackfn(pair.key, pair.value);
                if (ret === false) {
                    return;
                }
            }
        }
    };
    UMap.prototype.keys = function () {
        var arr = [];
        for (var name in this.data) {
            if (__WEBPACK_IMPORTED_MODULE_0__utilities_utils__["d" /* has */](this.data, name)) {
                arr.push(name);
            }
        }
        return arr;
    };
    return UMap;
}());

//# sourceMappingURL=umap.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getRandomInt;
/* harmony export (immutable) */ __webpack_exports__["b"] = getIfDefined;
/* unused harmony export isFunction */
/* harmony export (immutable) */ __webpack_exports__["e"] = isUndefined;
/* unused harmony export isString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return has; });
/* harmony export (immutable) */ __webpack_exports__["g"] = toTitleStr;
/* unused harmony export saveToFile */
/* harmony export (immutable) */ __webpack_exports__["f"] = notifyPop;
/* harmony export (immutable) */ __webpack_exports__["a"] = deepCopy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_devextreme_ui_notify__ = __webpack_require__("../../../../devextreme/ui/notify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_devextreme_ui_notify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_devextreme_ui_notify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);


/**
 * Generate random number within min and max
 * @param min Lower bound
 * @param max Upper bound
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
/**
 * Return value only if undefined, Else reference value
 * @param ref Current value
 * @param value New Value
 */
function getIfDefined(ref, value) {
    return (value === undefined) ? ref : value;
}
/**
 * Checks if the given argument is a function.
 * @function
 */
function isFunction(func) {
    return (typeof func) === 'function';
}
/**
* Checks if the given argument is undefined.
* @function
*/
function isUndefined(obj) {
    return (typeof obj) === 'undefined';
}
/**
* Checks if the given argument is a string.
* @function
*/
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var has = function (obj, prop) {
    return _hasOwnProperty.call(obj, prop);
};
function toTitleStr(camelcaseStr) {
    var result = camelcaseStr.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
}
function saveToFile(data, filename) {
    var file = new Blob([data], { type: 'text/csv;charset=utf-8' });
    Object(__WEBPACK_IMPORTED_MODULE_1_file_saver__["saveAs"])(file, filename);
}
function notifyPop(msg, type) {
    __WEBPACK_IMPORTED_MODULE_0_devextreme_ui_notify___default()({
        message: msg,
        position: {
            my: 'center top',
            at: 'center top'
        }
    }, type, 3000);
}
function deepCopy(oldObj) {
    var newObj = oldObj;
    if (oldObj && typeof oldObj === 'object') {
        newObj = Object.prototype.toString.call(oldObj) === '[object Array]' ? [] : {};
        for (var i in oldObj) {
            if (oldObj.hasOwnProperty(i)) {
                newObj[i] = this.deepCopy(oldObj[i]);
            }
        }
    }
    return newObj;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    logLevel: 'WARN',
    reqBaseUrl: 'http://192.168.88.13:9000/res',
    reqMethod: 'POST',
    contentType: 'application/json',
    serviceQueryClass: 'SimpleServiceQuery'
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    logLevel: 'ALL',
    reqBaseUrl: 'http://192.168.88.13:9000/res',
    reqMethod: 'POST',
    contentType: 'application/json',
    serviceQueryClass: 'SimpleServiceQuery'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map