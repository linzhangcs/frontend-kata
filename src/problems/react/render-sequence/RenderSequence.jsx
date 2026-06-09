import {useEffect, useState, useRef} from 'react';

export default function RenderSequence() {
  const [count, setCount] = useState(0);
  const [id, setId] = useState(0);
  const renderId = useRef(0);

  renderId.current += 1;

  console.log('render starts', {
    renderId: renderId.current,
    count,
    id
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

  useEffect(() => {
    console.log('id effect runs', {id});
    return()=>{
      console.log('id cleanup runs', {id})
    }
  }, [id])

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
        <p>id: {id}</p>
        <button onClick={handleClick}>Increase count</button>
        <div>
          <h3>Set id</h3>
        <button onClick={() => setId(1)}>Load 1</button>
        <button onClick={() => setId(2)}>Load 2</button>
        <button onClick={() => setId(3)}>Load 3</button>
        </div>
      </main>
  )
}