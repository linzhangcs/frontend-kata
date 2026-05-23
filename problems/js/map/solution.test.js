import { beforeAll, describe, expect, it } from "vitest";
import map from "./solution.js";

beforeAll(() => {
  Array.prototype.myMap = map;
})

describe("map", () => {
  it("Should maps values", () => {
    expect([1, 2, 3].myMap(x => x* 2)).toEqual([2, 4, 6]);
  });

  it("Should pass item, index, and array", () => {
    const arr = ['hello', 'there']
    expect(arr.myMap((item, index, array) => {
      return `${item}-${index}-${array.length}`;
    })).toEqual(['hello-0-2', 'there-1-2']);
  })

  it("Should support thisArg", ()=> {
    const context = {multiplier: 3};
    const result = [1, 2, 3].myMap(function(number){
      return number * this.multiplier
    }, context);
    expect(result).toEqual([3, 6, 9]);
  })
})