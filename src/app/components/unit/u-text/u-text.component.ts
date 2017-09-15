import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-u-text',
  template: `
    <div i18n class="bg-text" [ngStyle]="styles" [innerHTML]="text"></div>
  `,
  styles: [
    `
      .bg-text {
        padding: 5px 10px;
      }
    `
  ]
})
export class UTextComponent implements OnInit {

  /**
   * Text value
   */
  @Input() text;

  /**
   * Text styling
   */
  @Input() styles;

  constructor() { }

  ngOnInit() {
  }

}
