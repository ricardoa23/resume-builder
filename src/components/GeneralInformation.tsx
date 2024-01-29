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
      <div className="h-screen flex flex-col">
        <h1 className="text-4xl text-center ">General Information</h1>
        <div className="py-4 ps-4">
          <p>First Name</p>
          <input
            type="text"
            className="border border-solid border-primary rounded-md"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="py-4 ps-4">
          <p>Last Name</p>
          <input
            type="text"
            className="border border-solid border-primary rounded-md"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
          </div>
        <div className="py-4 ps-4">
          <p>Email (Optional)</p>
          <input type="text" className="border border-solid border-primary rounded-md"  name="email" value={email} onChange={handleChange} />
        </div>
        <div className="py-4 ps-4">
          <p>Phone Number (Optional)</p>
          <input type="text" className="border border-solid border-primary rounded-md" name="phone" value={phone} onChange={handleChange} />
        </div>
      <button className="bg-blue-200 border border-solid border-green-300 max-w-xs" onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default GeneralInformation;
