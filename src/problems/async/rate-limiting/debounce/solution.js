/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timerId = null;

  const debounced = (...args) => {
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