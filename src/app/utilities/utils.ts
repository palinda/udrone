
import notify from 'devextreme/ui/notify';
import { saveAs } from 'file-saver';

/**
 * Generate random number within min and max
 * @param min Lower bound
 * @param max Upper bound
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Return value only if undefined, Else reference value
 * @param ref Current value
 * @param value New Value
 */
export function getIfDefined<T>(ref: T, value: T): T {
  return (value === undefined) ? ref : value;
}

/**
 * Checks if the given argument is a function.
 * @function
 */
export function isFunction(func: any): boolean {
  return (typeof func) === 'function';
}

/**
* Checks if the given argument is undefined.
* @function
*/
export function isUndefined(obj: any): boolean {
  return (typeof obj) === 'undefined';
}

/**
* Checks if the given argument is a string.
* @function
*/
export function isString(obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object String]';
}

const _hasOwnProperty = Object.prototype.hasOwnProperty;
export const has = function(obj: any, prop: any) {
    return _hasOwnProperty.call(obj, prop);
};


export function toTitleStr(camelcaseStr: string) {
  const result = camelcaseStr.replace( /([A-Z])/g, ' $1' );
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export function saveToFile(data, filename: string) {
  const file = new Blob([data], { type: 'text/csv;charset=utf-8' });
  saveAs(file, filename);
}


export function notifyPop(msg: string, type: string) {
  notify({
    message: msg,
    position: {
        my: 'center top',
        at: 'center top'
    }
  }, type, 3000);
}

export function  deepCopy(oldObj: any) {
  let newObj = oldObj;
  if (oldObj && typeof oldObj === 'object') {
      newObj = Object.prototype.toString.call(oldObj) === '[object Array]' ? [] : {};
      for (const i in oldObj) {
          if (oldObj.hasOwnProperty(i)) {
            newObj[i] = this.deepCopy(oldObj[i]);
          }
      }
  }
  return newObj;
}

export function  isEqual(obj1: any, obj2: any) {
  return (JSON.stringify(obj1) === JSON.stringify(obj2));
}
