/**
 * @param {Array<unknown>} array The array to iterate over.
 * @param {(value: unknown) => string | number} iteratee The iteratee to transform keys.
 * @returns {Record<string, Array<unknown>>} Returns the composed aggregate object.
 */
export default function groupBy(array, iteratee) {
  const result = {};

  array.forEach(item => {
    const key = iteratee(item);
    result[key] ??= [];
    result[key].push(item);
  })

  return result;
}