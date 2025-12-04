import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cats from './Cats'
import Dogs from './Dogs'

function App() {
  

  return (
    <>

      <h1>Neon cats</h1>
      <div className="card">
        <Cats />
      </div>

      <div className="card">
        <Dogs />
      </div>
      
    </>
  )
}

export default App
