import {DeleteUserCase} from "../../../../domain/useCases/UserLocal/DeleteUser";

const ProfileViewModel = () => {
    const deleteSession = async () => {
        await DeleteUserCase();
    }
    return {
        deleteSession,
    }
}
export default {ProfileViewModel};