### Why debounced cancellation is needed

when the user clears the search input, there may still be a pending debounced search scheduled from a previous input value.

#### Example:

1. User types 'ap' -> a debounced search is scheduled.
2. Before the delay finishes, the user clears the input.
3. The UI clears the results immediately.
4. If the pending debounced search is not cancelled, it may still run later and upates the results with stale "ap" matches.

```
t = 0ms: user types "ap"
→ debouncedUpdateResult("ap") schedules results for 300ms later

t = 100ms: user clears input
→ setResults([]) runs immediately
→ return

t = 300ms: old pending "ap" timer still fires
→ setResults(searchData("ap"))
→ old results ["apple", "pineapple"] come back even though input is empty
```

To prevent stale results from being displayed, we must cancel the pending debounced call before clearing the results state.
