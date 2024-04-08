import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManHinhCaiDat from '../screens/manHinhCaiDat';
import ManHinhYeuThich from '../screens/manHinhYeuThich';
import ManHinhChinh from '../screens/manHinhChinh';



const Tab = createBottomTabNavigator()
const BottonTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            

           
        }}>
            <Tab.Screen name="ManHinhChinh" component={ManHinhChinh} options={{
                tabBarIcon: () => (
                    <Image source={require('../image/icon_home.png')} />
                )
            }} />
            <Tab.Screen name="ManHinhYeuThich" component={ManHinhYeuThich} options={{
                tabBarIcon: () => (
                    <Image source={require('../image/icon_tim.png')} />
                )
            }}/>
            <Tab.Screen name="ManHinhCaiDat" component={ManHinhCaiDat} options={{
                tabBarIcon: () => (
                    <Image source={require('../image/icon_canhan.png')} />
                )
            }}/>

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 70,
        borderTopWidth: 0,
     

    


    }
})

export default BottonTab;
