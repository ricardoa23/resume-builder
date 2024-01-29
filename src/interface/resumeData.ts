import { UserProfile } from "./userProfile.ts";
import { WorkHistory } from "./workHistory.ts";
import { Education } from "./education.ts";
import { Certificate } from "./certificates.ts";
import { Award } from "./awards.ts";


export interface resumeData {
    UserProfile: UserProfile,
    Education?: Education[],
    Certificates?: Certificate[],
    WorkHistory: WorkHistory[],
    Awards?: Award[]
}
