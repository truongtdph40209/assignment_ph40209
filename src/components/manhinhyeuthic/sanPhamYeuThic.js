import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteYeuthApi, fetchYeuthic } from '../redux/actions/yeuthichAction';

const SanPhamYeuThic = () => {

    const API = `http://192.168.1.4:3000/sanphamyeuthich`
    const [data, setdata] = useState([]);
    // useEffect(() => {
        
    //     fetch(API).then(res => res.json()).then(data => {
    //         setdata(data)
    //     }).catch()
    // }, [data]);

    const listYeuthich = useSelector(state => state.listYeuthich.listYeuthich);
    const dispatch = useDispatch();

    useEffect(() => {
     
        dispatch(fetchYeuthic());
         
    }, [dispatch]);


    const btn_boYeuthich =  async(id) => {
        dispatch(deleteYeuthApi(id)).then(() => console.log('delete succes')).catch(err => console.log(err))
    }


    


    return (
        <View style ={{flex: 1, padding: 20, gap: 5}}>
            <TextInput
                style={styles.input}
                placeholder='Tìm kiếm sản phẩm yêu thích'
                placeholderTextColor={'#00000080'}
                inlineImageLeft='icon_search'
                inlineImagePadding={20}
            />

            <FlatList
                data={listYeuthich}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity>
                        <View style ={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 10, borderRadius: 10, borderColor:'#F17E87', justifyContent: 'space-between', marginTop: 10}}>
                            <Image style ={{width: 90, height: 90}} source={{uri: item.img}}/>
                            <View>
                                <Text style={{ fontSize: 17, color: '#000' }}>{item.tensp}</Text>
                                <Text style={{ fontSize: 14, color: 'gray', textDecorationLine: 'line-through' }}>{item.giacu.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                                <Text style={{ fontSize: 18, color: '#E42828' }}>{item.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                            </View>
                            <TouchableOpacity onPress={() => btn_boYeuthich(item.id)}>
                                <Image style ={{width: 40, height: 35}} resizeMode='stretch' source={require('../../image/icon_tim.png')}/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            
            
            />
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

export default SanPhamYeuThic;
