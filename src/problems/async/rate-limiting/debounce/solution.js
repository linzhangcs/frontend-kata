/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timerId = null;

  //return a normal function so to have the `this` context from how debounced is called
  function debounced(...args){
    //bind context because this is the function that is called.
    const context = this;

    if(timerId !== null){
      clearTimeout(timerId);
      timerId = null;
    }
    timerId = setTimeout(() => {
      func.apply(context, args);
      timerId = null;
    }, wait);
  };

  debounced.cancel = function(){
    if(timerId === null) return;

    clearTimeout(timerId);
    timerId = null;
  }

  return debounced;
}