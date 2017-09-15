import { SERVICE_QUERY } from '@services/service-query.provider';
import { ElementRef, Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { NameField } from '@defs/name-field';
import { IServiceQuery } from '@services/service-query.interface';
import { Query } from '@defs/query';
import { ColumnOptions } from '@defs/column-options';

  /**
   * Query string part type (Internal)
   */
  export enum SelectionType {
    NAME,
    VALUE,
    OPERATOR,
    JOIN
  }

/**
 * Advance data search box
 */
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  /**
   * Query field list with attributes
   */
  @Input() columns: ColumnOptions [];

  /**
   * Query placeholder
   */
  @Input() placeholder = 'Type your query here';

  /**
   * Query request callback with valid query string
   */
  @Output() onQuery: EventEmitter<string> = new EventEmitter<string>();

  /**
   * User input query, HTML access variable
   */
  queryString: string;

  /**
   * Current position filtered auto complete list , HTML access variable
   */
  suggessionList: NameField [];


  /**
   * Supported Operators List
   */
  supportedOperators = new Array<NameField>();

  /**
   * Supported logic gates
   */
  supportedJoins = new Array<NameField>();

  /**
   * Indicate query validity, HTML access variable
   */
  isValidQuery = true;

  /**
   * Current focused list element index, HTML access variable
   */
  focusedIdx = -1;

  /**
   * Hide auto complete dropdown. HTML access varible
   */
  hideAutoComplete = true;

  /**
   * Query selection type
   */
  private selectionType = SelectionType.NAME;

   /**
   * Query Selected field object
   */
  private selectedName: ColumnOptions;


  /**
   * Query current cursor position
   */
  private currentCursorPos = 0;


  /**
   * Currently used fields
   */
  private usedColomns: { [key: string]: boolean; } = {};

  constructor(@Inject(SERVICE_QUERY) private serviceQuery: IServiceQuery) {
  }

   /**
    * @description Initializing the supported operators and logic gates
    */
  ngOnInit() {
      this.supportedOperators.push(new NameField('=', '='));
      this.supportedOperators.push(new NameField('!=', '!='));

      this.supportedJoins.push(new NameField('AND', 'AND'));
      this.supportedJoins.push(new NameField('OR', 'OR'));
  }

  /**
   * @description Populate filtered suggession list
   */
  private createSuggessionList(prefix: string) {

    this.hideAutoComplete = false;

    if (this.selectionType === SelectionType.NAME) {
      this.suggessionList = this.columns.filter( el => (el.$name.indexOf(prefix) !== -1 && this.usedColomns[el.$key] === undefined) );
    } else if (this.selectionType === SelectionType.OPERATOR) {
      this.suggessionList = this.supportedOperators.filter( el => el.$name.indexOf(prefix) !== -1 );
    } else if (this.selectionType === SelectionType.JOIN) {
      this.suggessionList = this.supportedJoins.filter( el => el.$name.indexOf(prefix) !== -1 );
    } else if (this.selectionType === SelectionType.VALUE) {
      this.serviceQuery.query<NameField []>(this.selectedName.$query).subscribe((resp) => {
          this.suggessionList = resp;
      });
    }

    this.focusedIdx = -1;
  }

  /**
   * @description Focus to the dropdown
   */
  focusMenu (event) {
    if (event.keyCode === 40) {
      if (this.suggessionList.length - 1 <= this.focusedIdx) {
        this.focusedIdx = 0;
      } else {
        this.focusedIdx++;
      }
      event.preventDefault();
    } else if (event.keyCode === 38) {
      if (this.focusedIdx <= 0) {
        this.focusedIdx = 0;
      } else {
        this.focusedIdx--;
      }
      event.preventDefault();
    } else if (event.keyCode === 13) {
      this.query();
      event.preventDefault();
    }
  }

  /**
   * @description Trigger on query change or cursor position change
   */
  onQueryChange(oField) {

    this.checkQueryValidity();

    if (oField.selectionStart || oField.selectionStart === '0') {
      this.currentCursorPos = oField.selectionStart;
    }

    if (this.queryString !== undefined) {
      const typeString = this.queryString.substring(0, this.currentCursorPos);

      const parts = this.splitQueryString(typeString);
      const currentText = parts[parts.length - 1];
      const prvText = parts[parts.length - 2];

      if (prvText === undefined) {
        this.selectionType = SelectionType.NAME;
        this.createSuggessionList(parts[0]);
      } else {
        if (this.isOperator(prvText)) {
          if (parts[parts.length - 3] !== undefined) {
            this.selectedName = this.findCol(parts[parts.length - 3]);
            if (this.selectedName === undefined) {
              return;
            }
            this.selectionType = SelectionType.VALUE;
            this.createSuggessionList(currentText);
          }
        } else if (this.isJoiner(prvText)) {
          this.selectionType = SelectionType.NAME;
          this.createSuggessionList(currentText);
        } else {
            if (parts[parts.length - 3] === undefined || this.isJoiner(parts[parts.length - 3])) {
              this.selectionType = SelectionType.OPERATOR;
              this.createSuggessionList(currentText);
            } else if (this.isOperator(parts[parts.length - 3])) {
              this.selectionType = SelectionType.JOIN;
              this.createSuggessionList(currentText);
            }
        }
      }

    }
  }

  /**
   * @description Is give test is an operator
   */
  private isOperator(currentText: string): boolean {
      const opIndex = this.supportedOperators.findIndex( op => op.$key === currentText);
        if (opIndex >= 0) {
          return true;
        }
        return false;
  }

  /**
   * @description Is give test is an logic gate
   */
  private isJoiner(currentText: string): boolean {
      const joinIndex = this.supportedJoins.findIndex( op => op.$key === currentText);
      if (joinIndex >= 0) {
        return true;
      }
      return false;
  }

  /**
   * @description Find Field object by field name
   */
  private findCol(currentText: string): ColumnOptions {
      return this.columns.filter( op => op.$name === currentText)[0];
  }

  /**
   * @description Select item from the auto complete dropdown
   */
  selectItem(item: NameField, queryArea) {
    const typeString = this.queryString.substring(0, this.currentCursorPos);
    const startIndex = typeString.lastIndexOf(' ');

    const remainder = this.queryString.substring(this.currentCursorPos);
    const endIndex = this.currentCursorPos + remainder.indexOf(' ');
    this.queryString = ((startIndex < 0) ? '' : this.queryString.substring(0, startIndex + 1)) + item.$name
                        + ((endIndex < this.currentCursorPos) ? '' : this.queryString.substring(endIndex));

    queryArea.focus();
    this.hideAutoComplete = true;

    this.checkQueryValidity();
  }

  /**
   * @description Show/Hide auto complete drop down
   */
  hidePopup(hide) {
    setTimeout(() => {
      this.hideAutoComplete = hide;
    }, 0);
  }

  /**
   * @description Is entered query is valid
   */
  checkQueryValidity() {
    if (this.queryString === undefined || this.queryString === '') {
      return;
    }

    const parts = this.splitQueryString(this.queryString);
    let j = 0;
    this.usedColomns = {};
    for (const part of parts) {
      const col = this.findCol(part);
      if (j % 4 === 0 && col !== undefined) {
        this.usedColomns[col.$key] = true;
      }
      j++;
    }

    if ((parts.length + 1) % 4 !== 0) {
      this.isValidQuery = false;
    } else {
      let i = 0;
      for (const part of parts) {
        const remainder = i % 4;
        if ((remainder === 0 && this.findCol(part) === undefined) ||
            (remainder === 1 && !this.isOperator(part)) ||
            remainder === 3 && !this.isJoiner(part)) {
          this.isValidQuery = false;
          break;
        } else {
          this.isValidQuery = true;
        }

        i++;
      }
    }
  }

  /**
   * @description Trigger query request callback on enter
   */
  query() {
    if (!this.isValidQuery) {
      return;
    }
    this.onQuery.emit(this.queryString);
  }

  /**
   * @description split query string
   */
  private splitQueryString(query: string): string [] {
    return query.replace(/\s+/g, ' ').split(' ');
  }
}
