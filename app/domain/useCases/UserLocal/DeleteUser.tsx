import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";

const {deleteItem} = new UserLocalRepositoryImpl()

export const DeleteUserCase = async () => {
    return await deleteItem()
}