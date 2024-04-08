import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/manhinhchinh/header/header';
import SanPhamHot from '../components/manhinhchinh/body/sanPhamHot';
import SanPhamMoi from '../components/manhinhchinh/body/sanPhamMoi';
import SanPhamDaXem from '../components/manhinhchinh/footer/sanPhamDaXem';
import { Provider } from 'react-redux';
import store from '../components/redux/store';

const ManHinhChinh = () => {

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />

                <Provider store={store}>
                    <View style={styles.box}>
                        <SanPhamHot />
                    </View>
                </Provider>
              
                    <View style={styles.box}>
                        <SanPhamMoi />
                    </View>
          

              
                <View style={styles.box}>
                    <SanPhamDaXem />
                </View>



            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',

    },
    box: {
        backgroundColor: '#FFEBEE',
        borderRadius: 10,
        marginTop: 10,
        paddingBottom: 5
    }



})

export default ManHinhChinh;
