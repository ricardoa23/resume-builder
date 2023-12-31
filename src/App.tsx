import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import AccessModal from './components/AccessKeyModal'
import EducationLevel from './components/EducationLevel'
import MessageComponent from './components/MessageComponent'
import Education from './components/Education'
import WorkHistory from './components/WorkHistory'
import JobDetails from './components/JobDetails'
import FileTester from './components/FileTester'

function App() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const handleNext = (level: string) => {
    setSelectedLevel(level);
  };

  return (
    <>
    {/* Commented to prevent annoyance */}
    {/* <AccessModal></AccessModal> 
    <NavBar></NavBar>
    <LandingPage></LandingPage>
            {
          selectedLevel ? 
          <MessageComponent selectedLevel={selectedLevel} /> :
          <EducationLevel handleNext={handleNext} />
        }
      <Education /> 
       <WorkHistory /> 
      // <JobDetails / */}

    <FileTester />
    </>
  )
}

export default App
