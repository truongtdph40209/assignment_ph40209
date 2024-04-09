import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BASE_URL from '../../../../env/port';

const api = `${BASE_URL}sanphamdaxem`

const SanPhamDaXem = () => {

    const navigation = useNavigation()
    const [data, setdata] = useState([]);
    useEffect( () => {
        
         fetch(api).then(res => res.json()).then(data => {
            setdata(data)
        }).catch()
    }, [data]);


    const btn_chitiet = (data) => {
        navigation.navigate('ManHinhChiTiet', {data})
        
    }
    return (
        <View>
            <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: '#F17E87', fontSize: 24, fontWeight: 'bold' }}>Sản phẩm đã xem</Text>
                <TouchableOpacity><Text>Xem tất cả</Text></TouchableOpacity>
            </View>
            <View style ={{ backgroundColor: '#FFEBEE',  borderRadius: 10, padding: 10, }}>
                <FlatList
                    data={data}
                    horizontal={true}
                    keyExtractor={item => item.id}
                    scrollEnabled={true}
                    contentContainerStyle={styles.row}
                    showsHorizontalScrollIndicator={false} 
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => btn_chitiet(item)} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
    row:{
        justifyContent: 'center',
        gap: 10
    }

})

export default SanPhamDaXem;
