import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "./app/presentation/views/auth/Login";
import RegistroScreen from "./app/presentation/views/auth/registro";
import {ProfileInfoScreen} from "./app/presentation/views/profile/info/ProfileInfo";
import {RolesScreen} from "./app/presentation/views/Roles/Roles";

export type RootStackParamList = {
    LoginScreen: undefined,
    RegistroScreen: undefined,
    ProfileInfoScreen: undefined, // userId es el parametro que pasamos al componente ProfileInfoScreen
    RolesScreen: undefined, // userId es el parametro que pasamos al componente RolesScreen
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
                <Stack.Screen name={"RegistroScreen"} component={RegistroScreen} options={{headerShown: true, title: "Registro"}}></Stack.Screen>
                <Stack.Screen name={"ProfileInfoScreen"} component={ProfileInfoScreen} options={{headerShown: true}}></Stack.Screen>
                <Stack.Screen name={"RolesScreen"} component={RolesScreen} options={{headerShown: true}}/>
            </Stack.Navigator>

        </NavigationContainer>
    );
}

