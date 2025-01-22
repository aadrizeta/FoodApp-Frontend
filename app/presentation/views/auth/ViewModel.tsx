import React, {useState} from "react";


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
}

export default {LoginViewModel};
