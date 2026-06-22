import {expect, describe, it} from 'vitest';
import groupBy from './solution';

describe('groupBy', () => {
  it('return an empty object for empty array', () => {
    expect(groupBy([], Math.floor)).toEqual({});
  })
  it('group values by the callback result', () => {
    const array = [1.2, 1.9, 3.3, 2.1, 4.2];

    expect(groupBy(array, Math.floor)).toEqual({
      '1': [1.2, 1.9],
      '2': [2.1],
      '3': [3.3],
      '4': [4.2],
    });
  })
})