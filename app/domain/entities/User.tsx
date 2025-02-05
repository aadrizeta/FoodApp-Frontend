import {RoleInterface} from "./Role";

export interface UserInterface {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    token?: string;
}

export type UserLoginInterface = Pick<UserInterface, "email" | "password">;

export interface UserLogin extends UserInterface{
    token: string;
    roles: RoleInterface[];
}