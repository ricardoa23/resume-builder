import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import AccessModal from './components/AccessKeyModal'

function App() {

  return (
    <>
    <AccessModal></AccessModal>
    <NavBar></NavBar>
    <LandingPage></LandingPage>
    </>
  )
}

export default App
