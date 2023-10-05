import React, { useState } from "react";

interface EducationLevelProps {
  handleNext: (level: string) => void;
}

const EducationLevel: React.FC<EducationLevelProps> = ({ handleNext }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //FIXME: This may not be needed update delete if not used
  };

  const handleClick = () => {
    const selectedLevel = (document.getElementById("educationLevel") as HTMLSelectElement).value;
    handleNext(selectedLevel);
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
    </>
  );
};

export default EducationLevel;
