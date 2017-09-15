import { DynamicMsg } from './dynamic-msg';
import { TestBed, inject } from '@angular/core/testing';

describe('DynamicMsg', () => {
  beforeEach(() => {
  });

  it('get/set test', inject([], () => {

    const msg = new DynamicMsg();
    msg.setValue('key', 'value');
    msg.setValue('key1', 'value1');

    console.log(msg);
    expect(msg.getValue('key1')).toEqual('value1');
    expect(msg.getQueryString()).toEqual('key="value"&key1="value1"');

  }));

});
