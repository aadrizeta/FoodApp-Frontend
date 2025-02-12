import React, {useState} from "react";
import {Dimensions, FlatList, Text, View} from "react-native";
import viewModel from "./ViewModel";
import {RolesItem} from "./item";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Carousel from 'react-native-reanimated-carousel';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../../App";

interface PropsStackNavigation extends NativeStackScreenProps<RootStackParamList, "RolesScreen">{}

export const RolesScreen = ({navigation, route} : PropsStackNavigation) => {
    const {user} = viewModel.RolesViewModel();

    const width= Dimensions.get("window").width;
    const height= Dimensions.get("window").height;

    const [mode, setMode] = useState<any>('horizontal-stack');
    const [snapDirection, setSnapDirection] = useState<'left' | 'right'>('left')
    return(
        <GestureHandlerRootView>
            <View>
                {/*<FlatList data={user?.roles}*/}
                {/*          renderItem={( {item}) => <RolesItem role={item} width={width - 100} height={420}></RolesItem> }*/}
                {/*></FlatList>*/}

                <Carousel
                    loop = {false}
                    width={width -100}
                    height={height / 2}
                    autoPlay={true}
                    data={user?.roles!}
                    scrollAnimationDuration={5000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={
                    ({item}) =>
                        <RolesItem role={item} width={width - 100} height={420} navigation={navigation}></RolesItem>
                    }
                    modeConfig={{
                        snapDirection,
                        stackInterval: 40
                    }}
                    mode={mode}
                />
            </View>
        </GestureHandlerRootView>
    );
}