import {Button, Text, View} from "react-native";

export const ProfileInfoScreen = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Ventana de perfil</Text>
          <Button title={"Cerrar Sesión"} onPress={() => {}}></Button>
      </View>
    );
}