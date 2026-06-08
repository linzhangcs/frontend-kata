import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DebouncedSearch from "./problems/components/debounced-search/DebouncedSearch.jsx";
import UseMemoExample from "./drills/api-usage/react-hooks/useMemo/examples.jsx";
import RenderSequence from "./problems/react/render-sequence/RenderSequence.jsx";

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <DebouncedSearch />
        </div>
      </section>
      <section>
        <UseMemoExample />
      </section>
      <section>
        <RenderSequence />
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
