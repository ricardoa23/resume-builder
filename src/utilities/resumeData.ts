import { UserProfile } from "./userProfile";
import { WorkHistory } from "./workHistory";


export interface resumeData {
    UserProfile: UserProfile,
    WorkHistory: WorkHistory[]
}
