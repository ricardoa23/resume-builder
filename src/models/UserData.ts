type TUserData = {
    firstName: string;
    lastName: string;
    email?: string;
    phoneNumber?: string;
    getFullName(): () => string;
}