import React, { useState, useEffect } from "react";
import { WorkHistory as WorkHistoryType } from "../interface/workHistory.ts";

// FIXME: Add Logic to get to move on once the last job is reached LN: 42
// Styling

const JobDetails: React.FC = () => {
  const [jobs, setJobs] = useState<WorkHistoryType[]>([]);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [currentDuties, setCurrentDuties] = useState<string[]>([""]);

  useEffect(() => {
    const jobsData = localStorage.getItem("jobs");
    if (jobsData) {
      setJobs(JSON.parse(jobsData));
    }
  }, []);

  const handleDutyChange = (index: number, value: string) => {
    const updatedDuties = [...currentDuties];
    updatedDuties[index] = value;
    setCurrentDuties(updatedDuties);
  };

  const handleAddDuty = () => {
    if (currentDuties.length < 4) {
      setCurrentDuties([...currentDuties, ""]);
    } else {
      alert("Maximum of 4 duties allowed");
    }
  };

  const handleNextJob = () => {
    const updatedJobs = [...jobs];
    updatedJobs[currentJobIndex].duties = currentDuties;
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    if (currentJobIndex < jobs.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
      setCurrentDuties(jobs[currentJobIndex + 1].duties || [""]);
    } else {
      alert("No more jobs to add");
    }
  };

  return (
    <div>
      {jobs.length > 0 && (
        <>
          <h3>
            What did you do as a {jobs[currentJobIndex].title} while working at{" "}
            {jobs[currentJobIndex].company}?
          </h3>
          {currentDuties.map((duty, index) => (
            <input
              key={index}
              type="text"
              value={duty}
              onChange={(e) => handleDutyChange(index, e.target.value)}
              placeholder="Describe a responsibility or achievement"
            />
          ))}
          {currentDuties.length < 4 && (
            <button onClick={handleAddDuty}>Add Another Duty</button>
          )}
          <button onClick={handleNextJob}>Next</button>
        </>
      )}
    </div>
  );
};

export default JobDetails;
