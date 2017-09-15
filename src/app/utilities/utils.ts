
/**
 * Object cast to given class type
 * @param obj Object to cast
 * @param cl Object cast in to this object type
 */
export function cast<T>(obj, cl): T {
  obj.__proto__ = cl.prototype;
  return obj;
}

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
