import NavBar from './components/navbar'
import Counters from './components/counters'
import './App.css'
import React from 'react'

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </>
  )
}

export default App
