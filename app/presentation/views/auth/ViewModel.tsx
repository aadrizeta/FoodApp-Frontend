import React, {useState} from "react";
import {ApiDelivery} from "../../../data/sources/remote/api/ApiDelivery";
import {RegisterAuthUseCase} from "../../../domain/useCases/auth/RegisterAuth";
import {LoginAuthUseCase} from "../../../domain/useCases/auth/LoginAuth";

const LoginViewModel = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const onChangeLogin = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const login = async () => {
        const response = await LoginAuthUseCase(values)
        console.log("Result: " + JSON.stringify(response))
    }

    return {
        ...values,
        onChangeLogin,
        login
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
        repeatPassword: ""
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
        if (values.repeatPassword === "") {
            setErrorMessage("Confirmar contraseña obligatoria")
            return false;
        }
        if (values.password !== values.repeatPassword){
            setErrorMessage("Contraseñas no coinciden")
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




