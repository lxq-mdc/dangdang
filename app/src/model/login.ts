export interface ILogin {
    nickname: string;
    password: string;
    phone:string;
    email:string;
    username:string
}

// export const createEmptyLogin = (): ILogin => ({
//     username: "",
//     password: ""
// });

export interface IUser {
    userId: string;
}
