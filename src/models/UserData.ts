

type TUserData = {
    firstName: string;
    lastName: string;
    email?: string;
    phoneNumber?: string;
    getFullName(): () => string;
}

class UserData implements TUserData {
    firstName: string;
    lastName: string;
    email?: string;
    phoneNumber?: string;
    constructor(fistName: string, lastName: string, email?: string, phoneNumber?: string) {
        this.firstName = fistName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

}