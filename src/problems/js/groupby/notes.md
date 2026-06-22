### Notes on implementation improvements

Idiomatic JS pattern:

`if (result[key] === undefined)` -> `if(! key in result)` -> result[key] ??= [];

The nullish assignment operator is clean and modern

### Edge case

what if `iteratee` returns undefined or null? 
The initial solution,
```js
const key = iteratee(item);
if(result[key] === undefined);
```
the js will coerce them into string keys 'undefined' and 'null'

