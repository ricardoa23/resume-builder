import React, { useState } from "react";
import { formatDateToMonthYear as dateFormatter } from "../utilities/common";
import { WorkHistory as WokrHistoryType } from "../utilities/workHistory";

/* TODO: Complete the list below
    * - create form for  user to input work history
    + - set up next page taking users work history and generating fields for each job
    * - create a button to remove work history
    * - create a button to add more work history (max of 4)
*/
const WorkHistory = () => {
  const [workHistory, setWorkHistory] = useState<WokrHistoryType[]>([]);

  const handleAddJob = () => {
    //TODO: add a new job to the workHistory array
    
  };

  const handleInputChange = (
    index: number,
    field: keyof WokrHistoryType,
    value: any
  ) => {
    const updatedWorkHistory = [...workHistory];
    updatedWorkHistory[index][field] = value;
    setWorkHistory(updatedWorkHistory);
  };

  return (
    <>
      {workHistory.map((job, index) => (
        <div key={index}>
          {/* Other input fields */}{" "}
          <label htmlFor="positionTitle">Title of the Position</label>
          <input type="text" name="positionTitle" value={job.title} onChange={(e) => handleInputChange(index, 'title', e.target)} />
          <label htmlFor="companyName"> Name of the Company</label>
          <input type="text" name="companyName" value={job.company} onChange={(e) => handleInputChange(index, 'company', e.target)}  />
          <label htmlFor="startDate"> Start Date</label>
          <input type="month" name="startDate" value={dateFormatter(job.startDate)} onChange={(e) => handleInputChange(index, 'startDate', e.target)}  />
          <label htmlFor="endDate"> End Date</label>
          <input type="month" name="endDate" value={dateFormatter(job.endDate)} onChange={(e) => handleInputChange(index, 'endDate', e.target)}  />
          <h3>Are you still working here</h3>
          <input type="checkbox" />
        </div>
      ))}
      <button onClick={handleAddJob}>Add Job</button>
    </>
  );
};

export default WorkHistory;
