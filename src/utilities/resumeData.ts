import { UserProfile } from "./userProfile";
import { WorkHistory } from "./workHistory";
import { Education } from "./education";
import { Certificate } from "./certificates";
import { Award } from "./awards";


export interface resumeData {
    UserProfile: UserProfile,
    Education?: Education[],
    Certificates?: Certificate[],
    WorkHistory: WorkHistory[],
    Awards?: Award[]
}
