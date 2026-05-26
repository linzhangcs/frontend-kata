import{beforeAll, describe, expect, it} from "vitest";
import filter from "./solution.js";

beforeAll(() => {
  Array.prototype.myFilter = filter;
})

describe("filter", () => {
  it('Should return empty array when no matches', () => {
    expect([1, 3, 5, 7].myFilter(n => n % 2 === 0)).toEqual([]);
  })
  it('Should filter items based on callback result', () => {
    expect(['a', 'ab', 'c', 'abc'].myFilter(item => item.length > 1)).toEqual(['ab', 'abc']);
  })

  // it('Should pass item, index, and array to callback', () => {
  //   expect([1, 2, 3, 4].myFilter((_, index) => index > 1)).toEqual([3, 4]);
  // })
  // it('Should pass thisArg to callback', () => {
  //
  // }))

})
