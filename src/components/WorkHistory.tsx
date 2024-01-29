import React, { useState } from "react";
import { formatDateToMonthYear as dateFormatter } from "../utilities/common";
import { WorkHistory as WorkHistoryType } from "../interface/workHistory.ts";
import { verifyObjectInLocalStorage as verifyObject } from "../utilities/common";

/* TODO: Complete the list below
    * - create form for  user to input work history
    + - set up next page taking users work history and generating fields for each job
    * - create a button to remove work history
    * - create a button to add more work history (max of 4)
*/

const initialWorkHistory: WorkHistoryType = {
  title: "",
  company: "",
  startDate: new Date(),
  endDate: new Date(),
  duties: [],
};

const WorkHistory: React.FC = () => {
  const [workHistory, setWorkHistory] = useState<WorkHistoryType[]>([initialWorkHistory]);

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
    field: keyof WorkHistoryType,
    value: any
  ) => {
    const updatedWorkHistory = [...workHistory];
    updatedWorkHistory[index][field] = value;
    setWorkHistory(updatedWorkHistory);
  };

  const handleNext = () => {
    localStorage.setItem("jobs", JSON.stringify(workHistory));
    verifyObject("jobs");
  };



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
            onChange={(e) => handleInputChange(index, "title", e.target.value)}
          />
          <br /> {/* FIXME: Remove this for styling */}
          <label htmlFor="companyName"> Name of the Company</label>
          <input
            type="text"
            name="companyName"
            value={job.company}
            onChange={(e) => handleInputChange(index, "company", e.target.value)}
          />
          <br /> {/* FIXME: Remove this for styling */}
          <label htmlFor="startDate"> Start Date</label>
          <input
            type="month"
            name="startDate"
            value={dateFormatter(job.startDate)}
            onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
          />
          <br /> {/* FIXME: Remove this for styling */}
          <label htmlFor="endDate"> End Date</label>
          <input
            type="month"
            name="endDate"
            value={dateFormatter(job.endDate)}
            onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
          />
          <br /> {/* FIXME: Remove this for styling */}

          {/* <h3>Are you still working here</h3>
          <input type="checkbox" /> */}
          <br /> {/* FIXME: Remove this for styling */}
          <button type="button" onClick={() => handleRemoveJob(index)}>Remove Job</button>
        </div>
      ))}
      <button onClick={handleAddJob}>Add Job</button>
      <br /> {/* FIXME: Remove this for styling */}
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default WorkHistory;
