# Testing Terminology Notes

## Smoke Test
A smoke test is a small, basic test that checks whether a component, function, or system can run without crashing.

It does not deeply test all behavior. It usually verifies the simplest successful path.

### Example
For a React component, a smoke test may check that the component renders and that an important element exists:

```jsx
render(<DebouncedSearch />);

expect(screen.getByLabelText(/search fruits/i)).toBeInTheDocument();
```

### When to use a smoke test
use a smoke test when adding a new component or when you want a minimal safety check before writing deeper behavior tests.
