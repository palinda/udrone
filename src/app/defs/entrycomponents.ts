import { Component, Type } from '@angular/core';
import { MultiCountersComponent } from '@components/widget-templates/multi-counters/multi-counters.component';
import {CounterGuageComponent} from '@components/widget-templates/counter-guage/counter-guage.component';
import {DashboardContainerComponent} from '@components/container-templates/dashboard-container/dashboard-container.component';
import {ContainerTemplateComponent} from '@components/container-template.component';
import {StartMenuComponent} from '@components/start-menu/start-menu.component';
import {UTextComponent} from '@components/unit/u-text/u-text.component';
import {UserPreferencesComponent} from '@components/user-preferences/user-preferences.component';
import {RealtimeSplineComponent} from '@components/widget-templates/realtime-spline/realtime-spline.component';
import {AdvanceQueryTableComponent} from '@components/query-templates/advance-query-table/advance-query-table.component';
import {QueryContainerComponent} from '@components/container-templates/query-container/query-container.component';
import { CounterSparklineComponent } from '@components/widget-templates/counter-sparkline/counter-sparkline.component';

export const entries = {
    '1': CounterSparklineComponent,
    '2': CounterGuageComponent,
    '3': DashboardContainerComponent,
    '4': ContainerTemplateComponent,
    '5': StartMenuComponent,
    '6': UTextComponent,
    '7': UserPreferencesComponent,
    '8': RealtimeSplineComponent,
    '9': AdvanceQueryTableComponent,
    '10': QueryContainerComponent,
    '11': MultiCountersComponent
};

export const getEntryComponents = function() {
    const array = [];
    for (const key in entries) {
        if (entries.hasOwnProperty(key)) {
            array.push(entries[key]);
        }
    }

    return array;
};
