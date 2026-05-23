/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
export default function map (callbackFn, thisArg) {
  if(typeof callbackFn !== 'function') throw new TypeError('callbackFn() must be a function');

  const result = new Array(this.length);
  this.forEach(function (item,index, array) {
    result[index] = callbackFn.call(thisArg, item, index, array);
  })
  return result;
};
