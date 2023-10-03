import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import AccessModal from './components/AccessKeyModal'
import EducationLevel from './components/EducationLevel'
import MessageComponent from './components/MessageComponent'

function App() {

  return (
    <>
    {/* Commented to prevent annoyance */}
    {/* <AccessModal></AccessModal> 
    <NavBar></NavBar>
    <LandingPage></LandingPage> */}
    <EducationLevel />
    </>
  )
}

export default App
