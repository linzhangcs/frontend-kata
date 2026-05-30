import { render, screen } from '@testing-library/react';
import { describe, expect, it} from "vitest";
import DebouncedSearch from "./DebouncedSearch";

describe("<DebouncedSearch />", () => {
  it("should render the search input", () => {
    render(<DebouncedSearch />);

    expect(screen.getByLabelText(/search fruits/i)).toBeInTheDocument();
  })
})