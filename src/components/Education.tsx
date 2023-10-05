import { useState, ChangeEvent } from "react";
import { DegreeTypes } from "../utilities/degreeTypes";
import { Education as EducationInterface } from "../utilities/education";
import { formatDateToMonthYear } from "../utilities/dateFormatter";

/* FIXME: the following code is not complete. You will need to add/fix additional:
 * - Remove the test function
 * - Catch redering errors with an error boundary
 * - Add a back button

 */

const initialEducation: EducationInterface = {
  degreeType: undefined,
  major: "",
  gpa: undefined,
  universityName: "",
  graduationDate: new Date(),
};

const Education: React.FC = () => {
  const [degrees, setDegrees] = useState<EducationInterface[]>([
    initialEducation,
  ]);

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const newDegrees = [...degrees];
    const { name, value } = e.target;
  
    switch (name) {
      case "degreeSelect":
        newDegrees[index].degreeType = value as DegreeTypes;
        break;
      case "graduationDate":
        newDegrees[index].graduationDate = new Date(`${value}-01`);
        break;
      case "gpa":
        newDegrees[index].gpa = parseFloat(value);
        break;
      case "universityName": // handling universityName
        newDegrees[index].universityName = value;
        break;
      case "major": // handling major
        newDegrees[index].major = value;
        break;
      default:
        console.warn(`Unhandled input name: ${name}`);
    }
  
    setDegrees(newDegrees);
  };

const handleAddDegree = () => {
  setDegrees([...degrees, { ...initialEducation, graduationDate: new Date() }]);
};


  const handleRemoveDegree = (index: number) => {
    const newDegrees = [...degrees];
    newDegrees.splice(index, 1);
    setDegrees(newDegrees);
  };

  const handleNext = () => {

    localStorage.setItem("education", JSON.stringify(degrees));
    verifyEducationObjectInLocalStorage(); // FIXME: remove this line
  };

  const verifyEducationObjectInLocalStorage = () => {
    const educationJSON = localStorage.getItem("education");
  
    if (!educationJSON) {
      console.log("No education array found in local storage.");
      return false;
    }
  
    try {
      const educationArray = JSON.parse(educationJSON) as EducationInterface[];
  
      if (!Array.isArray(educationArray) || educationArray.length === 0) {
        console.log("Education data in local storage is not a non-empty array.");
        return false;
      }
  
      for (const education of educationArray) {
        if (!education) {
          console.log("One of the education objects in local storage is null or undefined.");
          return false;
        }
  
        if (!Object.values(DegreeTypes).includes(education.degreeType as DegreeTypes)) {
          console.log("Invalid degreeType in one of the education objects.");
          return false;
        }
  
        if (typeof education.major !== "string" || education.major.trim() === "") {
          console.log("Invalid major in one of the education objects.");
          return false;
        }
  
        if (typeof education.universityName !== "string" || education.universityName.trim() === "") {
          console.log("Invalid universityName in one of the education objects.");
          return false;
        }
  
        if (typeof education.gpa !== "number" || isNaN(education.gpa) || education.gpa < 0 || education.gpa > 4) {
          console.log("Invalid GPA in one of the education objects.");
          return false;
        }
  
        if (!education.graduationDate || typeof((new Date(education.graduationDate))) !== 'object' ) {
          console.log('Invalid graduationDate in one of the education objects.');
          return false;
        }
      }
  
      console.log('Valid education array found in local storage:', educationArray);
      return true;
    } catch (error) {
      console.error('Failed to parse education array from local storage:', error);
      return false;
    }
  };
  
  
  

  return (
    <>
      <h1>Let's Add your Education</h1>
      {degrees.map((degree, index) => (
        <div key={index}>
          <label htmlFor="degreeSelect">Degree Type</label>
          <select
            name="degreeSelect"
            id="degreeSelect"
            value={degree.degreeType}
            onChange={(e) => handleChange(e, index)}
          >
            <option value="" hidden defaultValue={this}>
              Select a degree type
            </option>
            {listDegrees()}
          </select>
          <label htmlFor="major">Major</label>
          <input
            type="text"
            name="major"
            id="major"
            value={degree.major}
            onChange={(e) => handleChange(e, index)}
          />
          <label htmlFor="gpa">GPA</label>
          <input
            type="number"
            name="gpa"
            id="gpa"
            max="4"
            step="0.00"
            placeholder="0.00"
            value={degree.gpa}
            onChange={(e) => handleChange(e, index)}
          />
          <label htmlFor="universityName">University Name</label>
          <input
            type="text"
            name="universityName"
            id="universityName"
            value={degree.universityName}
            onChange={(e) => handleChange(e, index)}
          />
          <label htmlFor="graduationDate">Graduation Date</label>
          <input
            type="month"
            name="graduationDate"
            id="graduationDate"
            value={formatDateToMonthYear(degree.graduationDate)}
            onChange={(e) => handleChange(e, index)}
          />
          <button type="button" onClick={() => handleRemoveDegree(index)}>
            Remove Degree
          </button>
        </div>
      ))}
      ;
      <button type="button" onClick={handleAddDegree}>
        Add Degree
      </button>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </>
  );
};

export default Education;