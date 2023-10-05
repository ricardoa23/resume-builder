import { DegreeTypes } from "./degreeTypes";

export interface Education {
    degreeType: DegreeTypes;
    major: string;
    universityName: string;
    gpa: number;
    graduationDate: Date;
}