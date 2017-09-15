import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
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
  DxTabPanelModule
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
    DxTabPanelModule
  ]
})
export class TpDepModule { }
