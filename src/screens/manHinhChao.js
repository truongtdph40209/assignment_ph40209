import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ManHinhChao = () => {

    const navigation = useNavigation();
    setTimeout(() => {
        navigation.navigate("ManHinhDangNhap")
    }, 3000);
    return (
        <View style={styles.container}>
            <Image style ={{width: 250, height: 250}} source={require('../image/logo.png')}/>
            <Text style={styles.txt_gioithieu}>Trịnh Đình Trường</Text>
            <Text style={styles.txt_gioithieu}>PH40209</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt_gioithieu:{
        fontSize: 20,
        textAlign: 'center',
        color: '#27AAE2',
        fontWeight: 'bold'
    }
})

export default ManHinhChao;
