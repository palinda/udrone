import { NgModule, Injectable } from '@angular/core';
import { Ng2Permission } from 'angular2-permission';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgGridModule } from 'angular2-grid';
import {
  DxCircularGaugeModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxSparklineModule,
  DxChartModule,
  DxTileViewModule,
  DxTemplateModule,
  DxButtonModule,
  DxPopupModule,
  DxNumberBoxModule,
  DxFormModule,
  DxTabPanelModule,
  DxPieChartModule,
  DxAutocompleteModule,
  DxTextAreaModule,
  DxTagBoxModule
} from 'devextreme-angular';

/**
 * Thrid-party Module import
 */
@NgModule({
  exports: [
    DxCircularGaugeModule,
    DxSelectBoxModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxSparklineModule,
    DxChartModule,
    FlexLayoutModule,
    DxTileViewModule,
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule,
    DxButtonModule,
    DxPopupModule,
    DxNumberBoxModule,
    DxFormModule,
    DxTabPanelModule,
    Ng2Permission,
    NgGridModule,
    DxPieChartModule,
    DxAutocompleteModule,
    DxTextAreaModule,
    DxTagBoxModule
  ]
})
export class TpDepModule { }
