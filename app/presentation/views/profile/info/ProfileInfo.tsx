import {Button, Text, View} from "react-native";
import {PropsStackNavigation} from "../../../Interfaces/StackNavigation";
import viewModel from "./ViewModel";

export const ProfileInfoScreen = ({navigation, route}: PropsStackNavigation) => {
    const {deleteSession} = viewModel.ProfileViewModel()
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Ventana de perfil</Text>
          <Button title={"Cerrar Sesión"} onPress={() => {
              deleteSession();
              navigation.navigate("LoginScreen")
          }}></Button>
      </View>
    );
}