import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/people'>People</Link>
        </nav>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
