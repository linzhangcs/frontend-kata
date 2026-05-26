/**
 * @param {Function} fn
 * @return {Array}
 * */
export function filter(fn, thisArg){
  const result = [];
  this.forEach((item, index, array) => {
    if(fn.call(thisArg, item, index, array)){
      result.push(item);
    }
  })
  return result;
}