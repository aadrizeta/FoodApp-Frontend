import * as React from "react";
import {Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {RoundedButton} from "../../components/RoundedButton";
import {FormInputInlineWithIcon} from "../../components/FormInputInlineWithIcon";
import {useState} from "react";

function RegistroScreen() {
    // const [nombre, setNombre]= useState<string>("")
    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        onChangeRegister,
        register

    }

    return (
        <View style={styles.container}>

            <View style={stylesRegister.imageContainer}>
                <Image
                    style={stylesRegister.image}
                    source={require("../../../../assets/logo.png")}
                ></Image>
                <Text style={styles.title}>Food App</Text>
            </View>

            <View style={stylesRegister.formContainer}>
                <Text style={styles.formTitle}>Formulario de registro</Text>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/user.png")}
                    placeholder={"Nombre"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => alert("")}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/my_user.png")}
                    placeholder={"Apellidos"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={() => alert("")}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/email.png")}
                    placeholder={"Correo electrónico"}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    onPressFormInterface={() => alert("")}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/phone.png")}
                    placeholder={"Teléfono"}
                    keyboardType="numeric"
                    secureTextEntry={false}
                    onPressFormInterface={() => alert("")}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={() => alert("")}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/confirm_password.png")}
                    placeholder={"Repetir contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={() => alert("")}
                ></FormInputInlineWithIcon>

                <View>
                    <RoundedButton text={"Finalizar"} onPressFromInterface={
                        () => {
                            register()
                            ToastAndroid.show("Boton presionado", ToastAndroid.LONG)
                        }></RoundedButton>
                </View>

            </View>

        </View>
    );
}

const stylesRegister = StyleSheet.create({
    imageContainer: {
        marginTop: 40,
        alignSelf: "center",
    },
    image: {
        width: 95,
        height: 95,
    },
    formContainer: {
        width: '95%',
        backgroundColor: "white",
        paddingVertical: 25,
        paddingHorizontal: 20,
        marginHorizontal: "auto",
        marginTop: 50,
        borderRadius: 10,
    },
})

export default RegistroScreen;
