import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import debounce from './solution.js';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  })

  afterEach(() => {
    vi.clearAllTimers();
    vi.useFakeTimers();
  })

  it('Should execute the callback function after wait time', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 300);
    debouncedFn();

    vi.advanceTimersByTime(299);
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(mockFn).toHaveBeenCalledTimes(1);
  })
})