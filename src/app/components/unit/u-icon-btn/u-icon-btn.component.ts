import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-u-icon-btn',
  template: `
    <div fxLayout="column" fxLayoutAlign="center none" class="u-icon-btn" [ngClass]="{'icon-btn-active' : isSelected}">
      <div class="btn-icon" [ngClass]="iconClass"></div>
      <div class="btn-text" [hidden]="text === undefined">{{text}}</div>
    </div>
  `,
  styles: [`
      .u-icon-btn {
        text-align: center;
        vertical-align: center;
        height: 100%;
      }

      .btn-icon {
        font-size: 22px;
      }
  `]
})
export class UIconBtnComponent implements OnInit, OnChanges {

  /**
   * Font icon class
   */
  @Input() iconClass = '';

  /**
   * Tile size ( Icon size calculate accroding to this)
   * this.iconSize = (this.text === undefined) ? this.size * 0.5 : (this.size * 0.5  - 10);
   */
  @Input() size = 10;

  /**
   * Bottom text
   */
  @Input() text = '';

  /**
   * Tile background color
   */
  @Input() bakColor = 'white';


  /**
   * Tile color
   */
  @Input() color = 'gray';

  /**
   * Is this tile activated. Icon stlying changes according to this. Styles can overide from class icon-btn-active
   */
  @Input() isSelected = false;

  @Input() wrapperClass = '';
  iconSize = 20;

  constructor() { }

  ngOnInit() {
    this.iconSize = (this.text === undefined) ? this.size * 0.5 : (this.size * 0.3);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

      if (changes['isSelected'] !== undefined) {
        this.isSelected = changes['isSelected'].currentValue;
      }
    }
}
