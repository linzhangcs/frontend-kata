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

## Debounced Search Closure Questions

1. Why was `useMemo` needed?
useMemo is needed to have a stable instance of the `debouncedUpdateSearch` function. The stable instance of debouncedUpdateSearch function is need for its timer memory to manage clearing out scheduled calls or starting a new wait period every user types. 

2. When the user types, what part of the UI should change right away, without waiting for the 500ms debounce delay?
The search input should update immediately when the user types. Since the input is controlled element. The value of the input should match every keystork.

3. What runs after 500ms?
The debouncedUpdateSearch runs if there is no user input after 500ms, that includes searching with the user input and update the result state.

4. What would break if `debouncedSearch` was recreated every render?### Why debounced cancellation is needed

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

## Debounced Search Closure Questions

1. Why was `useMemo` needed?
   useMemo is needed to create a stable instance of the `debouncedUpdateSearch` function. The stable instance of debouncedUpdateSearch function is need so its timer memory can clear scheduled calls and start a new wait period every user types.

2. When the user types, what part of the UI should change right away, without waiting for the 500ms debounce delay?
   The search input value updates immediately through `setSearch(value)`, because the input is controlled and should reflect every keystroke without delay.

3. ❗️What runs after 500ms?
   debouncedUpdateSearch is called immediately, but the actual search/filter function inside it runs only after 500ms of no input, and then it updates the result state.

4. ‼️What would break if `debouncedSearch` was recreated every render?
    if `debouncedSearch` is recreated every render, the debounced behavior breaks because each instance has its own timer memory. Older scheduled searches may not be canceled, so they can still run and update the result state.  
From the user's perspective, the search feature can look broken because stale results may appear.
