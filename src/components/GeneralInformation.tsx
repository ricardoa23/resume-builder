import React, { useState } from "react";
import { UserProfile } from "../interface/userProfile.ts";

const GeneralInformation: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
    }
  };

  const handleNext = () => {
    const userProfile: UserProfile = {
      firstName,
      lastName,
      email: email || undefined,
      phoneNumber: phone || undefined,
    };
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  };

  return (
    <>
      <div>
        <h1>General Information</h1>
        <p>First Name</p>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <p>Last Name</p>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <p>Email (Optional)</p>
        <input type="text" name="email" value={email} onChange={handleChange} />
        <p>Phone Number (Optional)</p>
        <input type="text" name="phone" value={phone} onChange={handleChange} />
      </div>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default GeneralInformation;
