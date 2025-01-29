import {AuthRepositoryImpl} from "../../../data/repositories/AuthRepository";
import {UserInterface} from "../../entities/User";

const {login} = new AuthRepositoryImpl()

export const LoginAuthUseCase = async (user: { email: string; password: string }) => {
    return login(user)
}