/*
* ## Test Plan
1. Smoke test: component renders search input.
2. Behavior test: input value updates immediately.
3. Debounce test: results update only after the delay.
4. Edge case test: clearing input prevents stale results.
* */
import { render, screen } from '@testing-library/react';
import { describe, expect, it} from "vitest";
import DebouncedSearch from "./DebouncedSearch";

describe("<DebouncedSearch />", () => {
  it("should render the search input", () => {
    render(<DebouncedSearch />);

    expect(screen.getByLabelText(/search fruits/i)).toBeInTheDocument();
  })
})