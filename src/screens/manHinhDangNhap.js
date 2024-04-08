import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../components/redux/actions/userAction';
const ManHinhDangNhap = () => {
    const navigation = useNavigation();
    const [taikhoan, settaikhoan] = useState('');
    const [matkhau, setmatkhau] = useState('');
    const [buttonColor, setbuttonColor] = useState('#0000001A');
    const [textColor, settextColor] = useState('#00000080');


    useEffect(() => {
        if (taikhoan == '' || matkhau == '') {
            setbuttonColor('#0000001A')
            settextColor('#00000080')
        } else {
            setbuttonColor('#F17E87')
            settextColor('#FFF')

        }
    }, [taikhoan, matkhau]);

    const dangkiScreen = () => {
        navigation.navigate('ManHinhDangKi')
    }
 

    const  listUser =  useSelector(state=>state.listUser.listUser);
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    
    const btn_login = () => {
        if (listUser.some(data => {
            return data.taikhoan == taikhoan && data.matkhau == matkhau
        })) {
            alert('Dang Nhap Thanh Cong')
            navigation.navigate('BottonTab')
        }else{
            alert('Xem Lai Tai Khoan Mat Khau')
        }
    

    }
    




    return (
        <View style ={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.box1}>
                    <Image  style ={{width: 200, height: 200}} source={require('../image/logo.png')} />
                </View>
                <View style={styles.box2}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email/Số điện thoại'
                        placeholderTextColor={'#00000080'}
                        inlineImageLeft='icon_user'
                        inlineImagePadding={20}
                        onChangeText={text => settaikhoan(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Mật khẩu'
                        placeholderTextColor={'#00000080'}
                        secureTextEntry={true}
                        inlineImageLeft='icon_lock'
                        inlineImagePadding={20}
                        onChangeText={text => setmatkhau(text)}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.text}>Quên mật khẩu?</Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity onPress={btn_login} style={{ backgroundColor: buttonColor, height: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', color: textColor }}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ textAlign: 'center', marginTop: 20 }}>──────    Hoặc đăng nhập     ────── </Text>
                <View style={{ gap: 10, marginTop: 20 }}>
                    <TouchableOpacity style={styles.buttonDN}>
                        <Image style={{ position: 'absolute', top: 13, left: 15 }} source={require('../image/icon_google.png')} />
                        <Text style={{ textAlign: 'center', color: '#FFF' }}>Tiếp tục với Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonDN}>
                        <Image style={{ position: 'absolute', top: 13, left: 15 }} source={require('../image/icon_facebook.png')} />
                        <Text style={{ textAlign: 'center', color: '#FFF' }}>Tiếp tục với Facebook</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.footer}>
                <Text style ={{color:'#00000080'}}>Bạn chưa có tài khoản? </Text>
                <TouchableOpacity onPress={dangkiScreen}><Text style ={{color: '#F17E87', fontWeight: 'bold'}}>Đăng kí ngay</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        height: '100%'
    },
    box1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,

    },
    input: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        paddingVertical: 10,
        marginTop: 10,
        color:'#00000080'
    },
    text: {
        color: '#F27E88',
        fontSize: 13,
        textAlign: 'right',
        marginTop: 10
    },
    buttonDN: {
        backgroundColor: '#F27E88',
        padding: 10,
        borderRadius: 20,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'

    },
    footer: {
        backgroundColor: '#00000014',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 56,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }


})

export default ManHinhDangNhap;
