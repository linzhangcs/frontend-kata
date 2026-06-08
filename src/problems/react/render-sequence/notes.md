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
7. useEffect runs, renderId: 2, count: 1
