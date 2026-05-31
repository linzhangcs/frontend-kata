### useMemo definition
 ```
    useMemo stores the result of a calculation between renders.
    It only recalculates when its dependency array changes.
 ```

### DebouncedSearch Component: debouncedUpdateSearch Example
```js
const debouncedUpdateResult = useMemo(() => 
    debounce((searchTerm) => {
      setResults(searchData(searchTerm));
    }, 300), []);
```
the "memoized value" is: 
```
the debounced function return by debounce()
```
not the search result. not the callback. The returned debounced wrapper function.
the function that set results state with debounced searchData result. 

`debounce` creates a wrapper function with timer memory.
If React recreates that wrapper on every render, the timer memory is lost.
useMemo keeps that same debounced wrapper across renders, so clearTimeout can cancel the previous scheduled call.

1. _What value is useMemo preserving in debouncedUpdateSearch example?_  
The useMemo preserves **the debounced function instance** returned by debounce().
The function instance has an internal time memory through closure.

2. _Why would recreating the debounced function break debounce behavior?_  
Because every instance of the debounced function has its own internal timer memory, a timerId. A new timer can not clear calls scheduled by a previous timer.  

_3. Why does the debounced function need stable timer memory?_  
The debounced function needs stable timer memory to cancel the previous scheduled call and start a new wait period every time the user types.
