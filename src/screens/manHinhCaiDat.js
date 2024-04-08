import React, { useCallback, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker'
import { MyTheme, useTheme } from '../theme/myTheme';
const ManHinhCaiDat = () => {
    
    return (
        <MyTheme>
            <BodyApp />
        </MyTheme>
    );
}

const BodyApp = () => {
    const navigation = useNavigation()
    const [hinhAnh, setHinhAnh] = useState(null)

    const chonAnh = useCallback(() => {
        // định nghĩa option để gắn cho imagepicker
        let option = {
            mediaType: 'photo',
            selectionLimit: 0
        }
        // khởi động camera để chụp ảnh
        ImagePicker.launchImageLibrary(option, setHinhAnh);
    }, []);
    // sử dụng hook để thao tác với theme
    const { theme, toggleTheme } = useTheme();
    return (
            <View style={[styles.container, { backgroundColor: theme === 'light' ? '#fff' : '#000' }]}>
                <ScrollView>
                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../image/icon_back.png')} />
                        </TouchableOpacity>
                        <Text style={[{ color: '#000', fontSize: 20 }, { color: theme === 'light' ? '#000' : '#fff' }]}>Tài khoản</Text>
                        <Image source={require('../image/icon_hoicham.png')} />
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 50 }}>
                        {
                            (typeof (hinhAnh?.assets) != 'undefined') ?
                                hinhAnh?.assets.map((objImage, index) => {
                                    return (
                                        <TouchableOpacity onPress={chonAnh} key={index} style={{ margin: 10 }}>
                                            <Image key={index}
                                                source={{ uri: objImage.uri }}
                                                style={{ width: 80, height: 80, borderRadius: 50 }}
                                            />
                                        </TouchableOpacity>
                                    )


                                })
                                : <TouchableOpacity onPress={chonAnh}><Image style={{ width: 80, height: 80 }} source={require('../image/image_avt.png')} /></TouchableOpacity>
                        }
                        <Text style={{ color: '#F17E87', fontSize: 20 }}>Trịnh Đình Trường</Text>

                    </View>
                    <View style={{ marginTop: 50, gap: 20 }}>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <Image source={require('../image/icon_user.png')} />
                                <Text style={[{ fontSize: 18, color: '#000000CC' },{ color: theme === 'light' ? '#000' : '#fff' }]}>Thông tin tài khoản</Text>
                            </TouchableOpacity>
                            <View style={{ borderBottomWidth: 1, marginTop: 14, borderBottomColor: 'gray' }}></View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <Image source={require('../image/icon_donhang.png')} />
                                <Text style={[{ fontSize: 18, color: '#000000CC' },{ color: theme === 'light' ? '#000' : '#fff' }]}>Đơn hàng của tôi</Text>
                            </TouchableOpacity>
                            <View style={{ borderBottomWidth: 1, marginTop: 14, borderBottomColor: 'gray' }}></View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <Image source={require('../image/icon_yeuthich.png')} />
                                <Text style={[{ fontSize: 18, color: '#000000CC' },{ color: theme === 'light' ? '#000' : '#fff' }]}>Yêu thích</Text>
                            </TouchableOpacity>
                            <View style={{ borderBottomWidth: 1, marginTop: 14, borderBottomColor: 'gray' }}></View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <Image source={require('../image/icon_danhgia.png')} />
                                <Text style={[{ fontSize: 18, color: '#000000CC' },{ color: theme === 'light' ? '#000' : '#fff' }]}>Đánh giá của tôi</Text>
                            </TouchableOpacity>
                            <View style={{ borderBottomWidth: 1, marginTop: 14, borderBottomColor: 'gray' }}></View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <Image source={require('../image/icon_voucher.png')} />
                                <Text style={[{ fontSize: 18, color: '#000000CC' },{ color: theme === 'light' ? '#000' : '#fff' }]}>Ví Voucher</Text>
                            </TouchableOpacity>
                            <View style={{ borderBottomWidth: 1, marginTop: 14, borderBottomColor: 'gray' }}></View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={toggleTheme} style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <Image source={require('../image/icon_theme.png')} />
                                <Text style={[{ fontSize: 18, color: '#000000CC' },{ color: theme === 'light' ? '#000' : '#fff' }]}>Đổi theme</Text>
                            </TouchableOpacity>
                            <View style={{ borderBottomWidth: 1, marginTop: 14, borderBottomColor: 'gray' }}></View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <Image source={require('../image/icon_phanhoi.png')} />
                                <Text style={[{ fontSize: 18, color: '#000000CC' },{ color: theme === 'light' ? '#000' : '#fff' }]}>Phản hồi</Text>
                            </TouchableOpacity>
                            <View style={{ borderBottomWidth: 1, marginTop: 14, borderBottomColor: 'gray' }}></View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('ManHinhDangNhap') } style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <Image source={require('../image/icon_dangxuat.png')} />
                                <Text style={[{ fontSize: 18, color: '#000000CC' },{ color: theme === 'light' ? '#000' : '#fff' }]}>Đăng xuất</Text>
                            </TouchableOpacity>
                            <View style={{ borderBottomWidth: 1, marginTop: 14, borderBottomColor: 'gray' }}></View>
                        </View>

                    </View>

                </ScrollView>
            </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#FFF',
        paddingHorizontal: 20

    },

    khung:{
        // height: 100,
        borderWidth: 1,
        borderColor: 'red'
      }
     

})

export default ManHinhCaiDat;
