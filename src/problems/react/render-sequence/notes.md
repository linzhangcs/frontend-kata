### Component Goal

React component that lets me observe:
1. when the component function runs
2. when state updates are scheduled
3. when `useEffect` runs
4. when cleanup runs
5. what values each render "sees"
6. why even handlers and effects can close over old values

### Console order of the RenderSequence component
prediction: 
1. render starts, 1, 0
2. useEffect runs, 1, 0 // when does useEffect cleanup run? right before re-render. after a state change?
3. click handler before setState, 1, 0
4. click handler after setState, 1, 0
5. useEffect cleanup, 1, 1

### Accurate sequence
1. render starts, renderId: 1, count: 0
2. useEffect runs, 1, 0 
3. click handler before setState, 1, 0
4. click handler after setState, 1, 0
5. **render starts, renderId: 2, count: 1**
6. **cleanup before next effect/unmount, 2, 0**
   Cleanup does not run right before re-render.
The next render happens first. Then React cleans up the previous effect. Then React runs the new effect.
7. **useEffect runs, renderId: 2, count: 1**

### Note

- cleanup runs after the next render, before the next effect
- cleanup remembers older render value
- ref expose latest mutable values

### console log order after clicking count increase
What will log from render, click handler, cleanup, and effect?
Prediction: 
1. click handler before setState, renderId: 1, count: 0
2. click handler after setState, renderId: 1, count: 0
3. render starts, renderId: 2, counter: 1
4. useEffect cleanup runs, renderId: 2, count: 0
5. useEffect runs, renderId: 2, count 1

### Before each setID click, predict the logs.
click load 1
1. render starts, renderId: 3, id: 1
2. id cleanup runs, {id: 0}
3. id effect runs, {id: 1}