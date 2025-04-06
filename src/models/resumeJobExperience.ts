type TJobExperienceData = {
    jobTitle: string;
    companyName: string;
    jobDescription: string[] | null;
    startDate: Date;
    endDate?: Date;
    currentEmployer?: boolean;
}