import { UMap } from './umap';
import { TestBed, inject } from '@angular/core/testing';

class TestMsg {
  constructor(private _name: string) {
  }

  get name() {
    return this._name;
  }
}

let map: UMap<string, TestMsg>;

const dummyKeyPrefix = 'key';
const dummyValPrefix = 'val';

describe('UMap', () => {
  beforeEach(() => {
    map = new UMap<string, TestMsg>();
  });

  it('put/get test', inject([], () => {

    for (let i = 0; i < 10; i++) {
      map.put(dummyKeyPrefix + '_' + i, new TestMsg(dummyValPrefix + '_' + i));
    }

    expect(map.size()).toEqual(10);
    expect(map.get(dummyKeyPrefix + '_' + 4).name).toEqual(dummyValPrefix + '_' + 4);

  }));

  it('for each / remove test', inject([], () => {

    for (let i = 0; i < 10; i++) {
      map.put(dummyKeyPrefix + '_' + i, new TestMsg(dummyValPrefix + '_' + i));
    }

    let x = 0;
    map.forEach((key, val) => {
      expect(map.get(dummyKeyPrefix + '_' + x).name).toEqual(dummyValPrefix + '_' + x);
      map.remove(dummyKeyPrefix + '_' + x);
      x++;
      expect(map.size()).toEqual(10 - x);
    });

    expect(map.size()).toEqual(0);
  }));

});
