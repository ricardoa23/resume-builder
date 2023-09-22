import  React from 'react'
import { resumeData } from '../utilities/resumeData'
import { UserProfile } from '../utilities/userProfile'
import { WorkHistory } from '../utilities/workHistory'

const GeneralInformation = () => {

  



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