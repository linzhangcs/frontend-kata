## Debounce Notes

`Debounce delays running a function until no calls happens for the full wait time.`

Each call:
1. clears the previous timer
2. starts a new timer
3. only the latest timer gets to call the function

