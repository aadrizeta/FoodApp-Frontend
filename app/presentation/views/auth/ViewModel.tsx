import React, {useEffect, useState} from "react";
import {ApiDelivery} from "../../../data/sources/remote/api/ApiDelivery";
import {RegisterAuthUseCase} from "../../../domain/useCases/auth/RegisterAuth";
import {LoginAuthUseCase} from "../../../domain/useCases/auth/LoginAuth";
import {UserLogin} from "../../../domain/entities/User";
import {SaveUserUseCase} from "../../../domain/useCases/UserLocal/SaveUser";
import {GetUserUseCase} from "../../../domain/useCases/UserLocal/GetUser";

const LoginViewModel = () => {
    const [errorMessage, setErrorMessage]= useState<string>("");
    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    useEffect(()=>{
        getUserSession()
    })

    const getUserSession = async () => {
        const getUser = await GetUserUseCase();
        console.log("Sesion del usuario: " + JSON.stringify(getUser));
    }

    const onChangeLogin = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const login = async () => {
        if (validateForm()){
            const response = await LoginAuthUseCase(values)
            if (!response.success){
                setErrorMessage(response.message)
            }
            else {
                await SaveUserUseCase(response.data as UserLogin)
            }
        }
    }
    const validateForm = () => {
        if (values.email === "") {
            setErrorMessage("Correo electrónico obligatorio")
            return false;
        }
        if (values.password === "") {
            setErrorMessage("Contraseña obligatoria")
            return false;
        }
        return true;
    }

    return {
        ...values,
        onChangeLogin,
        login,
        errorMessage,
    }
}

const RegisterViewModel = () => {
    const [errorMessage, setErrorMessage] = useState(String);
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email:"",
        password: "",
        phone: "",
    })
    const onChangeRegister = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }
    const register = async () => {
        if (validateForm()){
            const response = await RegisterAuthUseCase(values)
            console.log("RESULT: " + JSON.stringify(response))
        }
    }
    const validateForm = () => {
        if (values.firstName === "") {
            setErrorMessage("Nombre obligatorio")
            return false;
        }
        if (values.lastName === "") {
            setErrorMessage("Nombre obligatorio")
            return false;
        }
        if (values.email === "") {
            setErrorMessage("Correo obligatorio")
            return false;
        }
        if (values.password === "") {
            setErrorMessage("Contraseña obligatoria")
            return false;
        }
        if (values.phone === ""){
            setErrorMessage("telefono obligatorio")
            return false;
        }
        return true;
    }

    return {
        ...values,
        onChangeRegister,
        register,
        errorMessage,
        validateForm
}
}

export default {LoginViewModel, RegisterViewModel};




