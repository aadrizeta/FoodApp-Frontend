import * as React from "react";
import {Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesRegistro";
import {RoundedButton} from "../../components/RoundedButton";
import {FormInputInlineWithIcon} from "../../components/FormInputInlineWithIcon";
import viewModel from "./ViewModel";
import {useNavigation} from "@react-navigation/native";
import stylesLogin from "./StylesLogin";
import {RootStackParamList} from "../../../../App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useEffect} from "react";

function RegistroScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const {email, password, repeatPassword, firstName, lastName, phone, onChangeRegister, register, errorMessage, validateForm} = viewModel.RegisterViewModel();

    useEffect(() => {
        if (errorMessage != ""){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])

    return (
        <View style={styles.container}>

            <View style={styles.contenedorImagen}>
                <Image style={styles.imagen} source={require("../../../../assets/logo.png")}/>
                <Text style={stylesLogin.title}>Food App</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Formulario de registro</Text>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/user.png")}
                    placeholder={"Nombre"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeRegister('firstName', text)}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/my_user.png")}
                    placeholder={"Apellidos"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeRegister('lastName', text)}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/email.png")}
                    placeholder={"Correo electrónico"}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeRegister('email', text)}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/phone.png")}
                    placeholder={"Teléfono"}
                    keyboardType="numeric"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeRegister('phone', text)}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={(text) => onChangeRegister('password', text)}
                ></FormInputInlineWithIcon>

                <View>
                    <RoundedButton text={"Finalizar"} onPressFromInterface={
                        () => {
                            register()
                            validateForm()
                        }}></RoundedButton>
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
