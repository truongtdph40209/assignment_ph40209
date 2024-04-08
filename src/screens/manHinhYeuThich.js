import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import SanPhamYeuThic from '../components/manhinhyeuthic/sanPhamYeuThic';
import { Provider } from 'react-redux';
import store from '../components/redux/store';
const ManHinhYeuThich = () => {



    return (
        <View style={styles.container}>

            <Provider store={store}>
                <SanPhamYeuThic />
            </Provider>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'

    },

})

export default ManHinhYeuThich;
