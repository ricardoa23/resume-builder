import { DegreeTypes } from "./degreeTypes";

export interface Education {
    degreeType: DegreeTypes | undefined | "";
    major: string;
    universityName: string;
    gpa: number | undefined | "";
    graduationDate: Date;
}