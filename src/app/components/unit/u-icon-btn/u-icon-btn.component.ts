import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-u-icon-btn',
  template: `
    <div fxLayout="column" fxLayoutAlign="center none" class="u-icon-btn" [ngClass]="{'box icon-btn-active' : isSelected}"
    [style.width.px]="size" [style.height.px]="size" [style.background-color]="bakColor" [style.color]="color">
      <div [ngClass]="iconClass" [style.font-size.px]="iconSize"></div>
      <div [hidden]="text === undefined">{{text}}</div>
    </div>
  `,
  styles: [`
      .u-icon-btn {
        text-align: center;
        vertical-align: center;
      }

      .u-icon-btn:hover {
        color: #168CCA;
      }

      .icon-btn-active {
        color: #168CCA;
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
