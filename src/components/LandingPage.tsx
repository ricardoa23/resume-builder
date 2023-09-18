import React from 'react'

const LandingPage = () => {
  return (
    <>
    <h1>Resume Builder</h1>
    <p className='introduction'>This Web Application allows users to create a create a resume from scratch and only input there job(s) descriptions and use Open AI's API to improve the resume and return a filled out template in a .docx file. You'll be able to choose from a set of resume templates.</p>

    <h2>How it Works</h2>
    <p className='how-it-works'>If you're creating a new resume just fill out the forms select a template you like and we'll do the rest. Your resume is written and optimized by AI. if you already have a resume you'd like to use just paste in you resume to the appropriate field and let us improve on your already great resume!</p>

    <h2>Technologies Used</h2>
    <p className='tech-used'>This single page web application was created using typescript and react using vite to initally set it up. the application uses <span><a href="">Open AI's API</a></span> </p>


{/* button */}
    <button>Get Started</button>

    {/* Disclaimer needs to be set up */}

    </>
  )
}

export default LandingPage