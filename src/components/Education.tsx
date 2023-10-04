import react, { useState, ChangeEvent } from "react";
import { DegreeTypes } from "../utilities/degreeTypes";
import { Education as EducationInterface } from "../utilities/education";

/* FIXME: the following code is not complete. You will need to add/fix additional:
  * - Integrate additional Accomplishments
 * - I need to update the date object currently it shows:"2023-07-01T00:00:00.000Z"
  * - Remove the test function
  * - Catch redering errors with an error boundary
*/

const Education: React.FC = () => {
  const [ degreeType, setDegreeType ] = useState<DegreeTypes | null>(null);
  const [ major, setMajor ] = useState<string>("");
  const [ gpa, setGpa] = useState<number | null>(null);
  const [ universityName, setUniversityName ] = useState<string>("");
  const [ graduationDate, setGraduationDate ] = useState<string>("");

  // Function to map through DegreeTypes enum and create select options
  const listDegrees = () => {
    const degreeOptions = Object.values(DegreeTypes);
    return degreeOptions.map((degree, index) => {
      return (
        <option key={index} value={degree}>
          {degree}
        </option>
      );
    });
  };

  // Function to map through DegreeTypes enum and create select options
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "degreeSelect":
        setDegreeType(value as DegreeTypes);
        break;
      case "universityName":
        setUniversityName(value);
        break;
      case "major":
        setMajor(value);
        break;
      case "gpa":
        setGpa(parseFloat(value));
        break;
      case "graduationDate":
        setGraduationDate(value);
        break;
        default:
          console.warn(`handleChange function does not handle input named ${name}`);
          break;
    }
  };

  // Function to map through DegreeTypes enum and create select options
  const verifyEducationObjectInLocalStorage = () => {
    const educationJSON = localStorage.getItem('education');
    
    if (!educationJSON) {
      console.log('No education object found in local storage.');
      return false;
    }
  
    try {
      const education = JSON.parse(educationJSON) as EducationInterface;
  
      if (!education) {
        console.log('Education object in local storage is null or undefined.');
        return false;
      }
      
      if (!Object.values(DegreeTypes).includes(education.degreeType as DegreeTypes)) {
        console.log('Invalid degreeType in education object.');
        return false; // Early return if no data found
      }
  
      if (typeof education.major !== 'string' || education.major.trim() === '') {
        console.log('Invalid major in education object.');
        return false;
      }
  
      if (typeof education.universityName !== 'string' || education.universityName.trim() === '') {
        console.log('Invalid universityName in education object.');
        return false;
      }
  
      if (typeof education.gpa !== 'number' || isNaN(education.gpa) || education.gpa < 0 || education.gpa > 4) {
        console.log('Invalid GPA in education object.');
        return false;
      }
  
      if (!education.graduationDate || Object.prototype.toString.call(new Date(education.graduationDate)) !== '[object Date]') {
        console.log('Invalid graduationDate in education object.');
        return false;
      }
  
      console.log('Valid education object found in local storage:', education);
      return true;
  
    } catch (error) {
      console.error('Failed to parse education object from local storage:', error);
      return false;
    }
  };
  
 // Handler function to save education object to local storage and validate it
  const handleNext = () => {
  
    if (
      degreeType &&
      major &&
      gpa !== null &&
      universityName &&
      graduationDate
    ) {
      const education: EducationInterface = {
        degreeType,
        major,
        gpa,
        universityName,
        graduationDate: new Date(graduationDate),
      };
      localStorage.setItem("education", JSON.stringify(education));
      verifyEducationObjectInLocalStorage();
    }
    
  };

  return (
    <>
      <h1>Let's add your Education!</h1>
      <h2>Degree Type</h2>
      <select
        name="degreeSelect"
        id="degreeSelect"
        value={degreeType ? degreeType.toString() : ''}
        onChange={handleChange}
      >
        <option value="" hidden selected></option>
        {listDegrees()}
      </select>
      <h2>Name of School</h2>
      <input
        type="text"
        name="universityName"
        value={universityName}
        onChange={handleChange}
      />
      <h2>Major</h2>
      <input type="text" value={major} name="major" onChange={handleChange} />
      <h2>Graduation Date</h2>
      <input type="month" value={graduationDate} name="graduationDate" onChange={handleChange} />
      <h2>GPA</h2>
      <input
        type="number"
        name="gpa"
        max="4"
        step="0.00"
        placeholder="0.00"
        value={gpa !== null ? gpa : ''}
        onChange={handleChange}
      />
      {/* <h2>Additional accomplishments</h2>
      <p>
        Here's a chance to list additional accomplishments while you attended
        let's keep it to a max of <span>3</span> for now
      </p>
      <input type="text" /> */}
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Education;
