import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 140, height: 70, marginLeft: -15 }} source={require('../../../image/logo.png')} />
                <Image style={{ width: 50, height: 50, position: 'absolute', right: 0, top: 17 }} source={require('../../../image/icon_cart.png')} />
            </View>
            <TextInput
                style={styles.input}
                placeholder='Tìm kiếm sản phẩm ở đây...'
                placeholderTextColor={'#00000080'}
                inlineImageLeft='icon_search'
                inlineImagePadding={20}
            />
            <Image resizeMode="stretch" style={{ width: '100%', height: 200, marginTop: 10, borderRadius: 10 }} source={require('../../../image/banner.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#F17E87',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15
    }
})

export default Header;
