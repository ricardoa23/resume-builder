import React, { useState } from "react";
import MessageComponent from "./MessageComponent";

const EducationLevel: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(e.target.value);
  };

  const handleClick = () => {
    if (selectedLevel === "highSchool" || selectedLevel === "someCollege") {
      setShowMessage(true);
    }
  };

  return (
    <>
      <div>What's your highest level of education?</div>
      <select name="educationLevel" id="educationLevel" onChange={handleChange}>
        <option value="" selected hidden>
          Select your education level
        </option>
        <option value="highSchool">High School</option>
        <option value="someCollege">Some College</option>
        <option value="bachelor">Bachelor's Degree</option>
        <option value="master">Master's Degree</option>
        <option value="phd">PhD</option>
      </select>
      <button onClick={handleClick}>Next</button>
      {showMessage && <MessageComponent selectedLevel={selectedLevel} />}
    </>
  );
};

export default EducationLevel;
