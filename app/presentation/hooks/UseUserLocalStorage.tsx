import {useEffect, useState} from "react";
import {UserLogin} from "../../domain/entities/User";
import {GetUserUseCase} from "../../domain/useCases/UserLocal/GetUser";

export const UseUserLocalStorage = () => {

    const [user, setUser] = useState<UserLogin>();

    useEffect(() => {
        getUserSession()

    }, []);

    const getUserSession = async () => {
        const user = await GetUserUseCase();
        setUser(user);
    }

    return {
        user,
        getUserSession,
    }
}