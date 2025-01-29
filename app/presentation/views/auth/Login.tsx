import React, {useState} from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";
import {RoundedButton} from "../../components/RoundedButton";
import {FormInputInlineWithIcon} from "../../components/FormInputInlineWithIcon";
import viewModel from "./ViewModel";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../../App";

export function LoginScreen(){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    // const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");

    const {email, password, onChangeLogin, login} = viewModel.LoginViewModel();

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../../../../assets/logo.png")}
                ></Image>
                <Text style={styles.title}>Food App</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>INICIAR SESIÓN</Text>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/email.png")}
                    placeholder={"Correo electrónico"}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeLogin('email', text)}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={(text) => onChangeLogin('password', text)}
                ></FormInputInlineWithIcon>

                <View>
                    <RoundedButton onPressFromInterface={() => {
                        login();
                        ToastAndroid.show("Login Exitoso", ToastAndroid.SHORT);
                    }} text={"Entrar"}/>
                </View>

                <View style={{marginTop: 30}}>
                    <TouchableOpacity
                        style={styles.redirectButton}
                        onPress={() => {
                        navigation.navigate("RegistroScreen")
                    }}>
                        <Text style={styles.redirectButtonText}>Registrame</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    );
}
