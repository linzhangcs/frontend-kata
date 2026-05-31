import {useMemo, useState} from 'react';

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const doubled = useMemo(() => {
    console.log('calculating doubled...');
    return count*2;
  }, [count]);

  return(
      <div>
        <p>count: {count}</p>
        <p>theme: {theme}</p>
        <p>doubled: {doubled}</p>

        <button onClick={() => setCount(c => c + 1)}> Add to count by 1</button>
        <button onClick={() => setCount(0)}> Reset count</button>

        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}> Toggle theme</button>
      </div>
  );
}