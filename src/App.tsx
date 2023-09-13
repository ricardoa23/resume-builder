import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleLineInput from './components/SingleLineInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SingleLineInput title='test'></SingleLineInput>
    </>
  )
}

export default App
