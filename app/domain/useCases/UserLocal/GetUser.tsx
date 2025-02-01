import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";

const {getUser} = new UserLocalRepositoryImpl();

export const GetUserUseCase = async () => {
    return await getUser()
}