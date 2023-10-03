import { DegreeTypes } from "./degreeTypes";
import { Certificate } from "./certificates";

export interface Education {
    degreeType: DegreeTypes;
    major: string;
    universityName: string;
    graduationDate: Date;
}