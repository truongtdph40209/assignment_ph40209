import React from 'react';
import { View, StyleSheet } from 'react-native';
import ManHinhChiTiet from '../screens/manHinhChiTiet';
import ManHinhChao from '../screens/manHinhChao';
import ManHinhDangNhap from '../screens/manHinhDangNhap';
import ManHinhDangKi from '../screens/manHinhDangKi';
import ManHinhCaiDat from '../screens/manHinhCaiDat';
import ManHinhYeuThich from '../screens/manHinhYeuThich';
import ManHinhChinh from '../screens/manHinhChinh';
import BottonTab from './bottonTab';

import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '../components/redux/store';

const Stack = createStackNavigator()
const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='ManHinhChao'
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
            }}>
            <Stack.Screen name="ManHinhChiTiet" component={ManHinhChiTiet1} />
            <Stack.Screen name="ManHinhChao" component={ManHinhChao} />
            <Stack.Screen name="ManHinhDangNhap" component={ManHinhDangNhap1} />
            <Stack.Screen name="ManHinhDangKi" component={ManHinhDangKi1} />

            <Stack.Screen name="ManHinhCaiDat" component={ManHinhCaiDat} />
            <Stack.Screen name="ManHinhYeuThich" component={ManHinhYeuThich} />
            <Stack.Screen name="ManHinhChinh" component={ManHinhChinh} />

            <Stack.Screen name="BottonTab" component={BottonTab} />

        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

const ManHinhChiTiet1 = () => {
    return(
        <Provider store={store}>
            <ManHinhChiTiet/>
        </Provider>
    )
}


const ManHinhDangKi1 = () => {
    return(
        <Provider store={store}>
            <ManHinhDangKi/>
        </Provider>
    )
}
const ManHinhDangNhap1 = () => {
    return(
        <Provider store={store}>
            <ManHinhDangNhap/>
        </Provider>
    )
}

export default StackNavigation;
