import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productAction';


const api = 'http://192.168.1.4:3000/sanphamdaxem'

const SanPhamHot = () => {


    const navigation = useNavigation()


    const listPro = useSelector(state => state.listPro.listPro);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    const btn_chitiet = (data) => {
        navigation.navigate('ManHinhChiTiet', { data })

        // fetch(api, {
        //     method: 'POST',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then(res => res.json()).then(() => console.log('add da xem succes')).catch(err => console.log(err));
    }

    return (
        <View>
            <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: '#F17E87', fontSize: 24, fontWeight: 'bold' }}>Sản phẩm hot</Text>
                <TouchableOpacity><Text>Xem tất cả</Text></TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#FFEBEE', borderRadius: 10 }}>
                <FlatList
                    data={listPro}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => btn_chitiet(item)} style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20, marginTop: 7 }}>
                            <Image style={styles.image} source={{ uri: item.img }} />
                            <View>
                                <Text style={{ fontSize: 17, color: '#000' }}>{item.tensp}</Text>
                                <Text style={{ fontSize: 14, color: 'gray', textDecorationLine: 'line-through' }}>{item.giacu.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                                <Text style={{ fontSize: 18, color: '#E42828' }}>{item.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 155,
        height: 160,
        borderRadius: 10
    },

})

export default SanPhamHot;
