import {AuthRepositoryImpl} from "../../../data/repositories/AuthRepository";
import {UserInterface} from "../../entities/User";

const {register} = new AuthRepositoryImpl()

export const RegisterAuthUseCase = (user: UserInterface) => {
    return register(user)
}