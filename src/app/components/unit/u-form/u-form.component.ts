export class ActionCB {
  action: String;
  item: UMsg;

  constructor(action: String, item: UMsg) {
    this.action = action;
    this.item = item;
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TrackType } from '@defs/track-type';
import { UMsg } from '@app/defs/umsg';

@Component({
  selector: 'app-u-form',
  templateUrl: './u-form.component.html',
  styleUrls: ['./u-form.component.scss']
})
export class UFormComponent implements OnInit {

  @Output() onAction: EventEmitter<ActionCB> = new EventEmitter<ActionCB>();

  @TrackType(Array)
  @Input() config;

  @TrackType(Object)
  @Input() data;

  form: FormGroup;
  objectProps;
  submitted = false;

  constructor() {
  }

  ngOnInit() {
    // remap the API to be suitable for iterating over it
    // this.objectProps =
    //   Object.keys(this.config)
    //     .map(prop => {
    //       return Object.assign({}, { key: prop} , this.config[prop]);
    //     });

    this.config.forEach(cfg => {
      cfg['value'] = this.data[cfg.key];
    });

    // setup the form
    const formGroup = {};
    this.config.forEach(element => {
      formGroup[element.key] = new FormControl(element.value || '', this.mapValidators(element.validation));
    });

    this.form = new FormGroup(formGroup);
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }

    return formValidators;
  }

  onSubmit(form) {
    this.submitted = true;
    if (!this.form.valid) {
      console.log('Form is invalid:', this.form);
      return;
    }

    this.onAction.emit(new ActionCB('SAVE', this.form.value));
  }
}
