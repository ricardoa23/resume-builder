import { DegreeTypes } from "../utilities/degreeTypes.ts";

export interface Education {
    degreeType: DegreeTypes | undefined | "";
    major: string;
    universityName: string;
    gpa: number | undefined | "";
    graduationDate: Date;
}