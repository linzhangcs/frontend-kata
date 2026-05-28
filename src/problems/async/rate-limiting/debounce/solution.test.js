import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import debounce from './solution.js';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  })

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
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

  it('Should cancel old timer when debounced function called again', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn();
    vi.advanceTimersByTime(100);
    debouncedFn();
    vi.advanceTimersByTime(299);
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(mockFn).toHaveBeenCalledTimes(1);
  })

  it('Should pass arguments to the callback function', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn('hello', 'world');
    vi.advanceTimersByTime(300);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('hello', 'world');
  })
})