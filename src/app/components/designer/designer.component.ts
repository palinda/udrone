import { Component, OnInit } from '@angular/core';
import { ComponentStore } from '@services/component-store';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit {

  constructor(public compStore: ComponentStore) { }

  ngOnInit() {
  }

}
