import * as utils from '@utilities/utils';

/**
 *  Used internally by Map
 */
export interface IMapEntry<K, V> {
  key: K;
  value: V;
}

export class UMap<K, V> {

  protected data: { [key: string]: IMapEntry<K, V> };
  protected length = 0;
  protected toStr(key: K) {
    if (utils.isUndefined(key)) {
      return '';
    }

    return key.toString();
  }

  constructor() {
    this.data = {};
  }

  /**
   * Add Data to map, Return old item if key already exist
   * @param key Key
   * @param value Value
   */
  public put(key: K, value: V): V {

    if (utils.isUndefined(key) || utils.isUndefined(value)) {
      return undefined;
    }

    let ret: V;
    const k = '$' + this.toStr(key);
    const previousElement: IMapEntry<K, V> = this.data[k];
    if (utils.isUndefined(previousElement)) {
        this.length++;
        ret = undefined;
    } else {
        ret = previousElement.value;
    }
    this.data[k] = {
        key: key,
        value: value
    };
    return ret;
  }

  /**
   * Return value for given key
   * @param key Find key
   */
  public get(key: K): V {
    const pair: IMapEntry<K, V> = this.data['$' + this.toStr(key)];
    if (utils.isUndefined(pair)) {
        return undefined;
    }
    return pair.value;
  }

    /**
   * Check value existance
   * @param key Find key
   */
  public contains(key: K): boolean {
    const pair: IMapEntry<K, V> = this.data['$' + this.toStr(key)];
    if (utils.isUndefined(pair)) {
        return false;
    }
    return true;
  }

  /**
   * Return value for given key, if undefined default value
   * @param key Find key
   * @param defaultVal Default value in undefined
   */
  public getOrDefault(key: K, defaultVal: V): V {
    const pair: IMapEntry<K, V> = this.data['$' + this.toStr(key)];
    if (utils.isUndefined(pair)) {
        return defaultVal;
    }
    return pair.value;
  }

  /**
   * Remove key value from map
   * @param key Key to remove
   */
  public remove(key: K): V {
    const k = '$' + this.toStr(key);
    const previousElement: IMapEntry<K, V> = this.data[k];
    if (!utils.isUndefined(previousElement)) {
        delete this.data[k];
        this.length--;
        return previousElement.value;
    }
    return undefined;
  }

  /**
   * Clear all
   */
  public clear() {
    this.data = {};
    this.length = 0;
  }

  /**
   * Return map size
   */
  public size(): number {
    return this.length;
  }

  /**
   * Iterate through elements
   * @param callbackfn Function callback for iterator
   */
  public forEach(callbackfn: (key: K, value: V) => any): void {
    for (const name in this.data) {
      if (utils.has(this.data, name)) {
          const pair: IMapEntry<K, V> = this.data[name];
          const ret = callbackfn(pair.key, pair.value);
          if (ret === false) {
              return;
          }
      }
    }
  }

  public keys(): Array<K> {
    const arr = [];
    for (const name in this.data) {
      if (utils.has(this.data, name)) {
        arr.push(name);
      }
    }

    return arr;
  }
}
