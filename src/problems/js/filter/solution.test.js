import { vi, beforeAll, afterAll, describe, expect, it } from "vitest";
import filter from "./solution.js";

beforeAll(() => {
  Array.prototype.myFilter = filter;
})

afterAll(() => {
  delete Array.prototype.myFilter;
})

describe("filter", () => {
  it("Should return a new array", () => {
    const input = ["hello", "world"];

    expect(input.myFilter(item => item.length > 0)).not.toBe(input);
  })

  it("Should return empty array when no matches", () => {
    expect([1, 3, 5, 7].myFilter(n => n % 2 === 0)).toEqual([]);
  })

  it("Should filter items based on callback result", () => {
    expect(['a', 'ab', 'c', 'abc'].myFilter(item => item.length > 1)).toEqual(['ab', 'abc']);
  })

  it("Should pass item, index, and array to callback", () => {
    const input = ['a', 'b', 'c'];
    // spy callback
    const callback = vi.fn(() => true);
    input.myFilter(callback);

    expect(callback).toHaveBeenCalledWith("a", 0, input);
    expect(callback).toHaveBeenCalledWith("b", 1, input);
    expect(callback).toHaveBeenCalledWith("c", 2, input);

    expect(callback).toHaveBeenCalledTimes(3);
  })

  it("Should not mutate the original array", ()=>{
    const numbers = [1, 2, 3];
    const greaterThanTwo = numbers.myFilter(number => number > 1);
    expect(numbers).toEqual([1, 2, 3]);
    expect(greaterThanTwo).toEqual([2, 3]);
  })

  it("Should pass thisArg to callback", () => {
    const context = {min: 3};

    const input = [1, 2, 3, 4, 5];
    function isGreaterThanMin(number){
      return number > this.min;
    }

    expect(input.myFilter(isGreaterThanMin, context)).toEqual([4, 5]);
  })

})
