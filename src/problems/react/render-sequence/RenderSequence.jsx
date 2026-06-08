import {useEffect, useState, useRef} from 'react';

export default function RenderSequence() {
  const [count, setCount] = useState(0);
  const renderId = useRef(0);

  renderId.current += 1;

  console.log('render starts', {
    renderId: renderId.current,
    count
  })

  useEffect(() => {
    console.log('useEffect runs', {
      renderId: renderId.current,
      count
    });

    return(() => {
      console.log('useEffect cleanup, before next effect/unmount', {
        renderId: renderId.current,
        count
      })
    })
  }, [count])

  function handleClick(){

    console.log('click handler before setState', {
      renderId: renderId.current,
      count,
    });

    setCount(prev => prev + 1)

    console.log('click handler after setState', {
      renderId: renderId.current,
      count,
    });

  }

  return(
      <main>
        <h1>Render Sequence Logger</h1>
        <p>count: {count}</p>
        <button onClick={handleClick}>Increase count</button>
      </main>
  )
}