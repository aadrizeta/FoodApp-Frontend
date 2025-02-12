import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "./app/presentation/views/auth/Login";
import RegistroScreen from "./app/presentation/views/auth/registro";
import {ProfileInfoScreen} from "./app/presentation/views/profile/info/ProfileInfo";
import {RolesScreen} from "./app/presentation/views/Roles/Roles";
import {useFonts} from "expo-font";
import {ActivityIndicator} from "react-native";
import {AppColors} from "./app/presentation/theme/AppTheme";
import {AdminTabNavigator} from "./app/presentation/navigation/AdminTabNavigation";
import {ClientTabNavigator} from "./app/presentation/navigation/ClientTabNavigation";

export type RootStackParamList = {
    LoginScreen: undefined,
    RegistroScreen: undefined,
    ProfileInfoScreen: undefined, // userId es el parametro que pasamos al componente ProfileInfoScreen
    RolesScreen: undefined, // userId es el parametro que pasamos al componente RolesScreen
    AdminTabNavigator: undefined
    ClientTabNavigator: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

    const [fontsLoaded] = useFonts({
        "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
        "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    });
    if (!fontsLoaded){
        return <ActivityIndicator size={"large"} color={AppColors.primary}></ActivityIndicator>
    }
    else {
        return (
            <NavigationContainer>

                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
                    <Stack.Screen name={"RegistroScreen"} component={RegistroScreen} options={{headerShown: true, title: "Registro"}}></Stack.Screen>
                    <Stack.Screen name={"ProfileInfoScreen"} component={ProfileInfoScreen} options={{headerShown: true}}></Stack.Screen>
                    <Stack.Screen name={"RolesScreen"} component={RolesScreen} options={{headerShown: true}}/>
                    <Stack.Screen name={"AdminTabNavigator"} component={AdminTabNavigator} options={{headerShown: true}}/>
                    <Stack.Screen name={"ClientTabNavigator"} component={ClientTabNavigator} options={{headerShown: true}}/>
                </Stack.Navigator>

            </NavigationContainer>
        );
    }

}

