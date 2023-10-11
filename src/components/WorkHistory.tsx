import React, { useState, ChangeEvent } from "react";
import { formatDateToMonthYear as dateFormatter } from "../utilities/common";
import { WorkHistory as WokrHistoryType } from "../utilities/workHistory";

/* TODO: Complete the list below
    * - create form for  user to input work history
    + - set up next page taking users work history and generating fields for each job
    * - create a button to remove work history
    * - create a button to add more work history (max of 4)
*/

const initialWorkHistory: WokrHistoryType = {
  title: "",
  company: "",
  startDate: new Date(),
  endDate: new Date(),
  duties: [],
};

const WorkHistory: React.FC = () => {
  const [workHistory, setWorkHistory] = useState<WokrHistoryType[]>([]);

  const handleAddJob = () => {
    setWorkHistory([
      ...workHistory,
      { ...initialWorkHistory, startDate: new Date(), endDate: new Date() },
    ]);
  };

  const handleRemoveJob = (index: number) => {
    const updatedWorkHistory = [...workHistory];
    updatedWorkHistory.splice(index, 1);
    setWorkHistory(updatedWorkHistory);
  }

  const handleInputChange = (
    index: number,
    field: keyof WokrHistoryType,
    value: any
  ) => {
    const updatedWorkHistory = [...workHistory];
    updatedWorkHistory[index][field] = value;
    setWorkHistory(updatedWorkHistory);
  };

  const handleNext = () => {
    localStorage.setItem("jobs", JSON.stringify(workHistory));
  };



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


  return (
    <>
      {workHistory.map((job, index) => (
        <div key={index}>
          {/* Other input fields */}{" "}
          <label htmlFor="positionTitle">Title of the Position</label>
          <input
            type="text"
            name="positionTitle"
            value={job.title}
            onChange={(e) => handleInputChange(index, "title", e.target)}
          />
          <label htmlFor="companyName"> Name of the Company</label>
          <input
            type="text"
            name="companyName"
            value={job.company}
            onChange={(e) => handleInputChange(index, "company", e.target)}
          />
          <label htmlFor="startDate"> Start Date</label>
          <input
            type="month"
            name="startDate"
            value={dateFormatter(job.startDate)}
            onChange={(e) => handleInputChange(index, "startDate", e.target)}
          />
          <label htmlFor="endDate"> End Date</label>
          <input
            type="month"
            name="endDate"
            value={dateFormatter(job.endDate)}
            onChange={(e) => handleInputChange(index, "endDate", e.target)}
          />
          <h3>Are you still working here</h3>
          <input type="checkbox" />
          <button type="button" onClick={() => handleRemoveJob(index)}>Remove Job</button>
        </div>
      ))}
      <button onClick={handleAddJob}>Add Job</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default WorkHistory;
