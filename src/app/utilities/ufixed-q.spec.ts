import { UFixedQ } from './ufixed-q';
import { TestBed, inject } from '@angular/core/testing';

class TestMsg {
  constructor(private _name: string) {
  }

  get name() {
    return this._name;
  }
}

let queue: UFixedQ<TestMsg>;

const dummyValPrefix = 'val';

describe('UFixedQ', () => {
  beforeEach(() => {
    queue = new UFixedQ<TestMsg>(10);
  });

  it('add/get test', inject([], () => {

    for (let i = 0; i < 20; i++) {
      queue.add(new TestMsg(dummyValPrefix + '_' + i));
      expect(queue.size()).toEqual(i >= 10 ? 10 : i + 1);
    }

    let x = 10;
    queue.data().forEach((item) => {
      expect(item.name).toEqual(dummyValPrefix + '_' + x);
      x++;
    });

  }));

});
