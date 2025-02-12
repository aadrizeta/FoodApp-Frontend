import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {RolesScreen} from "../views/Roles/Roles";
import {ProfileInfoScreen} from "../views/profile/info/ProfileInfo";
import {Image} from "react-native";
import RegistroScreen from "../views/auth/registro";
import {ClientCategoryListScreen} from "../views/client/category/list/CategoryList";
import {ClientOrderListScreen} from "../views/client/order/list/OrderList";

const Tab = createBottomTabNavigator();

export const ClientTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio"
                        options={{
                            title: "Inicio",
                            tabBarLabel: "Inicio",
                            tabBarIcon: ({color}) => (
                                <Image
                                    source={require("../../../assets/home.png")}
                                    style={{width: 25, height: 25}}
                                ></Image>
                            )}} component={ClientCategoryListScreen} />
            <Tab.Screen name= "AdminOrderListScreen" options={{
                title: "Pedidos realizados",
                tabBarLabel: "Pedidos",
                tabBarIcon: ({color}) => (
                    <Image
                        source={require("../../../assets/orders.png")}
                        style={{width: 25, height: 25}}
                    ></Image>)
            }} component={ClientOrderListScreen}></Tab.Screen>
            <Tab.Screen name="Perfil"
                        options={{
                            title: "Mi perfil"
                        }} component={ProfileInfoScreen} />
            {/*<Tab.Screen name="Registro" options={{title: "Mi registro"}} component={RegistroScreen} />*/}
        </Tab.Navigator>
    );
}