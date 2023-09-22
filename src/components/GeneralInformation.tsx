import  React from 'react'
import { resumeData } from '../utilities/resumeData'
import { UserProfile } from '../utilities/userProfile'
import { WorkHistory } from '../utilities/workHistory'

const GeneralInformation = () => {
// TODO: Add a form to collect the following information:
// firstName
// lastName
// email
// phone
// TODO: Add logic to use the input from the form to update the user profile
//TODO: Add a Next button to move on to the Work History
  



  return (
    <>
    <div>
      <h1>General Information</h1>
      {/* firstName */}
      <p>First Name</p>
      <input type="text"  />
      {/* lastName */}
      <p>Last Name</p>
      <input type="text"  />
      {/* email */} 
      <p>Email (Optional)</p>
      <input type="text"  />
      {/* phone */}
      <p>Phone Number (Optional)</p>
      <input type="text"  />                   
    </div>
    </>
  )
}

export default GeneralInformation