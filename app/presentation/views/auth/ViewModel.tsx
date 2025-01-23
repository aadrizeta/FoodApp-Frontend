import React, {useState} from "react";
import {ApiDelivery} from "../../../data/sources/remote/api/ApiDelivery";


/*
* x[] = [1, 2, 3]
* b = [...x, 4]
*
* */

const LoginViewModel = () => {
    //const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");

    /*
   *
   * en property llega email o password
   * value llega el valor de input
   *
   * array[email] = value
   *
   * */

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const onChangeLogin = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    return {
        ...values,
        onChangeLogin,
    }

    const RegisterViewModel = () => {
        const [values, setValues]= useState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repeatPassword: ""
        })

        const onChangeRegister = (property: string, value: any) => {
            setValues({...values, [property]: value})
        }

        const register = await ApiDelivery.post()
    }
}

export default {LoginViewModel};





























