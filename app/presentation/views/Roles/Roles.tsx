import React from "react";
import {FlatList, Text, View} from "react-native";
import {PropsStackNavigation} from "../../Interfaces/StackNavigation";
import viewModel from "./ViewModel";

export const RolesScreen = ({navigation, route} : PropsStackNavigation) => {
    const {user} = viewModel.RolesViewModel();

    return(
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <FlatList
              data={user?.roles}
              renderItem={( {item}) => <Text>{item.name}</Text>}>
          </FlatList>
      </View>
    );
}