import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    </>
  )
}

export default App
