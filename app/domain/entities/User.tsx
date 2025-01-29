export interface UserInterface {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    repeatPassword: string;
}

export type UserLoginInterface = Pick<UserInterface, "email" | "password">;
