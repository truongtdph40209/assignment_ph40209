import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import SanPhamDaXem from '../components/manhinhchinh/footer/sanPhamDaXem';
import { addYeuthAPI } from '../components/redux/actions/yeuthichAction';
import { useDispatch } from 'react-redux';



const ManHinhChiTiet = () => {


    const navigation = useNavigation()
    const route = useRoute()

    const { data } = route.params

    const [soluongcmt, setSoluongcmt] = useState(2);

    const handleXemThem = () => {
        setSoluongcmt(prev => prev + 2);
    };
    const handleAnBot = () => {
        setSoluongcmt(prev => Math.max(0, prev - 2));
    };





    const dispatch = useDispatch();
    const btn_yeuthich = ()=>{
        const dulieumoi = {
     
            img: data.img,
            tensp: data.tensp,
            gia: data.gia,
            giacu: data.giacu,
          
        }
 
        dispatch(addYeuthAPI(dulieumoi))
        .then(() => {
            // console.log(result);
 

            alert('da them vao yeu thic!');
        })
        .catch((error) => {
            console.error('Error add yeu thic:', error);
        });
 
 
    }
 
    

    return (
        
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../image/icon_back.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, color: 'black' }}>Chi tiết sản phẩm</Text>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        <TouchableOpacity onPress={btn_yeuthich}>
                            <Image source={require('../image/icon_yeuthich.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../image/icon_hoicham.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Image style={{ width: '100%', height: 353, resizeMode: 'stretch' }} source={{ uri: data.img }} />
                    <Text style={{ fontSize: 18, color: '#000000', marginTop: 20 }}>{data.tensp}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <View>
                            <Text style={{ fontSize: 20, color: '#E42828', fontWeight: 'bold' }}>{data.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                            <Text style={{ fontSize: 14, color: '#00000080', textDecorationLine: 'line-through' }}>{data.giacu.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../image/icon_share.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../image/icon_sao.png')} />
                            <Image source={require('../image/icon_sao.png')} />
                            <Image source={require('../image/icon_sao.png')} />
                            <Image source={require('../image/icon_sao.png')} />
                            <Image source={require('../image/icon_sao.png')} />
                        </View>
                        <Text style={styles.txt}>5</Text>
                        <Text style={styles.txt}>|</Text>
                        <Text style={styles.txt}>Đã bán 2k+</Text>
                    </View>



                    <View style={styles.horizontalLine}></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#F17E87', fontSize: 16, fontWeight: '500' }}>Miễn phí trả hàng</Text>
                        <Text style={{ color: '#F17E87', fontSize: 16, fontWeight: '500' }}>Chính hãng 100%</Text>
                        <Text style={{ color: '#F17E87', fontSize: 16, fontWeight: '500' }}>Giao miễn phí</Text>

                    </View>



                    <View style={{ marginTop: 30 }}>
                        <Text style={{ color: '#000000', fontSize: 14, fontWeight: '600' }}>Mô tả sản phẩm</Text>
                        <Text style={{ color: '#00000099', fontSize: 14, marginTop: 10 }}>
                            {data.desc}
                        </Text>
                    </View>
                </View>

                <View>
                    <View style={styles.horizontalLine}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000000', fontSize: 14, fontWeight: '600' }}>Bình luận</Text>
                        {
                            soluongcmt > 0 && (
                                <TouchableOpacity>
                                    <Text style={{ color: '#000000', fontSize: 14, fontWeight: '600' }} onPress={handleAnBot}>Ẩn bớt</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>

                    {
                        data.binhluan.slice(0, soluongcmt).map((item, index) => (
                            <View style={{ marginTop: 10 }} key={index}>
                                <TouchableOpacity style={{ flexDirection: 'row', gap: 10 }}>
                                    <Image source={require('../image/icon_avtnull.png')} />
                                    <View style={{ borderBottomWidth: 1, width: '85%', paddingBottom: 20, borderColor: 'gray' }}>
                                        <Text style={{ color: '#000000CC', fontSize: 14, fontWeight: '600' }}>{item.username}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={require('../image/icon_sao.png')} />
                                            <Image source={require('../image/icon_sao.png')} />
                                            <Image source={require('../image/icon_sao.png')} />
                                            <Image source={require('../image/icon_sao.png')} />
                                            <Image source={require('../image/icon_sao.png')} />

                                        </View>
                                        <Text style={{ color: '#000000CC', fontSize: 14, marginTop: 10 }}>{item.comment}</Text>
                                    </View>


                                </TouchableOpacity>

                            </View>
                        ))

                    }
                    {
                        data.binhluan.length > soluongcmt && (
                            <TouchableOpacity style={{ alignItems: 'center', marginTop: 20, }} onPress={handleXemThem}>
                                <Text style={{ color: '#F17E87', fontSize: 16 }}>
                                    Xem Thêm
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <TextInput   placeholder='Nhập bình luận của bạn' style={{ borderBottomWidth: 1, borderBottomColor: 'gray', paddingLeft: 20, width: '88%' }} />
                    <TouchableOpacity>
                        <Image source={require('../image/icon_sendcmt.png')} />
                    </TouchableOpacity>
                </View>


                <SanPhamDaXem />

            </ScrollView>


            <View style={{ flexDirection: 'row', paddingVertical: 20, gap: 20 }}>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#F17E87', height: 44, flex: 2, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ fontWeight: 'bold', color: '#F17E87' }}>THÊM VÀO GIỎ HÀNG</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#F17E87', height: 44, flex: 1.4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F17E87', borderRadius: 5 }}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>MUA NGAY</Text>

                </TouchableOpacity>
            </View>

        </View>

    );
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FFF'
    },
    txt: {
        color: '#000000CC',
        fontSize: 16
    },
    horizontalLine: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
        marginTop: 20
    },
})

export default ManHinhChiTiet;
