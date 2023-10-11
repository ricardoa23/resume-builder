//date Formatter helper function
export const formatDateToMonthYear = (date: Date | undefined) => {
  if (!date) return "";
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${year}-${month}`;
};

export const verifyObjectInLocalStorage = (objectKey: string) => {
  const localStorageObject = localStorage.getItem(objectKey);
  if (!localStorageObject) {
    console.log("Object not found in local storage");
    return false;
  }

  try {
    const localStorageObjectParsed = JSON.parse(localStorageObject);

    if (Array.isArray(localStorageObjectParsed)) {
      localStorageObjectParsed.forEach((item, index) => {
        console.log(`Item ${index}:`);
        const objectKeys = Object.keys(item);
        objectKeys.forEach((key) => {
          console.log(`key: ${key}`);
          console.log(`${key}: ${item[key]}`);
        });
      });
    } else {
      const objectKeys = Object.keys(localStorageObjectParsed);
      objectKeys.forEach((key) => {
        console.log(`key: ${key}`);
        console.log(`${key}: ${localStorageObjectParsed[key]}`);
      });
    }

    return true;
  } catch (error) {
    console.log(`Not working: ${error}`);
    return false;
  }
};

//original verifiation function for education
// const verifyEducationObjectInLocalStorage = () => {
//   const educationJSON = localStorage.getItem("education");

//   if (!educationJSON) {
//     console.log("No education array found in local storage.");
//     return false;
//   }

//   try {
//     const educationArray = JSON.parse(educationJSON) as EducationInterface[];

//     if (!Array.isArray(educationArray) || educationArray.length === 0) {
//       console.log("Education data in local storage is not a non-empty array.");
//       return false;
//     }

//     for (const education of educationArray) {
//       if (!education) {
//         console.log("One of the education objects in local storage is null or undefined.");
//         return false;
//       }

//       if (!Object.values(DegreeTypes).includes(education.degreeType as DegreeTypes)) {
//         console.log("Invalid degreeType in one of the education objects.");
//         return false;
//       }

//       if (typeof education.major !== "string" || education.major.trim() === "") {
//         console.log("Invalid major in one of the education objects.");
//         return false;
//       }

//       if (typeof education.universityName !== "string" || education.universityName.trim() === "") {
//         console.log("Invalid universityName in one of the education objects.");
//         return false;
//       }

//       if (typeof education.gpa !== "number" || isNaN(education.gpa) || education.gpa < 0 || education.gpa > 4) {
//         console.log("Invalid GPA in one of the education objects.");
//         return false;
//       }

//       if (!education.graduationDate || typeof((new Date(education.graduationDate))) !== 'object' ) {
//         console.log('Invalid graduationDate in one of the education objects.');
//         return false;
//       }
//     }

//     console.log('Valid education array found in local storage:', educationArray);
//     console.log(Object.keys(educationArray[0]));
//     return true;
//   } catch (error) {
//     console.error('Failed to parse education array from local storage:', error);
//     return false;
//   }
// };

//original verifiation function for workHistory

  // const verifyJobObjectInLocalStorage = () => {
  //   const jobs = localStorage.getItem("jobs");
  //   if (!jobs) {
  //   console.log("No jobs in local storage");
  //   return false;
  //   }

  //   try {
  //     const jobsArray = JSON.parse(jobs);

  //     if(!Array.isArray(jobsArray) || jobsArray.length === 0) {
  //       console.log("Jobs array is empty");
  //       return false;
  //     }
      
    
  //   }
  // }
