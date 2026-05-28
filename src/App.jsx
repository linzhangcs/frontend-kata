import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DebouncedSearch from "./problems/components/debounced-search/DebouncedSearch.jsx";

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <DebouncedSearch />
        </div>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
