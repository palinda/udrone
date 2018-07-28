import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-template',
  template: `
    <p>
      unit-template Works!
    </p>
  `,
  styles: []
})
export class UnitTemplateComponent implements OnInit {

  static type = 'UnitTemplateComponent';

  constructor() { }

  ngOnInit() {
  }

}
