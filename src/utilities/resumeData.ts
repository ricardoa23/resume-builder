import { UserProfile } from "./userProfile";
import { WorkHistory } from "./workHistory";
import { Education } from "./education";
import { Certificate } from "./certificates";


export interface resumeData {
    UserProfile: UserProfile,
    Education?: Education[],
    Certificates?: Certificate[],
    WorkHistory: WorkHistory[]

}
