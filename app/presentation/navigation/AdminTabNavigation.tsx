import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {RolesScreen} from "../views/Roles/Roles";
import {ProfileInfoScreen} from "../views/profile/info/ProfileInfo";
import {Image} from "react-native";
import RegistroScreen from "../views/auth/registro";
import {AdminCategoryListScreen} from "../views/admin/category/list/CategoryList";
import {AdminOrderListScreen} from "../views/admin/order/list/OrderList";

const Tab = createBottomTabNavigator();

export const AdminTabNavigator = () => {
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
                            )}} component={AdminCategoryListScreen} />
            <Tab.Screen name= "AdminOrderListScreen" options={{
                title: "Pedidos realizados",
                tabBarLabel: "Pedidos",
                tabBarIcon: ({color}) => (
                    <Image
                        source={require("../../../assets/orders.png")}
                        style={{width: 25, height: 25}}
                    ></Image>)
            }} component={AdminOrderListScreen}></Tab.Screen>
            <Tab.Screen name="Perfil"
                        options={{
                            title: "Mi perfil"
                        }} component={ProfileInfoScreen} />
            {/*<Tab.Screen name="Registro" options={{title: "Mi registro"}} component={RegistroScreen} />*/}
        </Tab.Navigator>
    );
}