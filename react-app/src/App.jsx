import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cats from './Cats'
import Dogs from './Dogs'
import Courses from './Courses'
import Users from './Users'

function App() {
  

  return (
    <>

      <h1>Neon cats</h1>
      <div className="card">
        <Cats />
      </div>

      <h1>Supabase dogs</h1>
      <div className="card">
        <Dogs />
      </div>

      <h1>Heroku MySQL courses</h1>
      <div className="card">
        <Courses />
      </div>

      <h1>Firebase users</h1>
      <div className="card">
        <Users />
      </div>
      
    </>
  )
}

export default App
