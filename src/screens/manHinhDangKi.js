import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addUserAPI } from '../components/redux/actions/userAction';






const ManHinhDangKi = () => {
    const navigation = useNavigation();
    const [taikhoan, settaikhoan] = useState('');
    const [matkhau1, setmatkhau1] = useState('');
    const [matkhau2, setmatkhau2] = useState('');

    const [buttonColor, setbuttonColor] = useState('#0000001A');
    const [textColor, settextColor] = useState('#00000080');


    useEffect(() => {
        if (taikhoan == '' || matkhau1 == '' || matkhau2 == '') {
            setbuttonColor('#0000001A')
            settextColor('#00000080')
        } else {
            setbuttonColor('#F17E87')
            settextColor('#FFF')

        }
    }, [taikhoan, matkhau1, matkhau2]);

    const dangnhapScreen = () => {
        navigation.goBack()
    }



    const dispatch = useDispatch();// của redux
    const handleAddUser = ()=>{
        if (matkhau1 != matkhau2) {
            alert('pass khong trung')
            return;
        }

        let duLieuThem = {  
            taikhoan: taikhoan,
            matkhau: matkhau1
        };
       
        
 
        dispatch(addUserAPI(duLieuThem))
        .then(() => {
            console.log('dk thanh cong');
            navigation.navigate('ManHinhDangNhap')
        })
        .catch((error) => {
            console.error('Error add user:', error);
        });
 
 
    }
 





    return (
        <View style ={{flex: 1}}>
            <View style={styles.container}>
                <View>
                   <TouchableOpacity onPress={dangnhapScreen}>
                        <Image source={require('../image/icon_back.png')}/>
                    </TouchableOpacity>
                    <Text style ={{fontSize: 20, color: '#000', textAlign: 'center'}}>Đăng ký</Text>
                </View>
                <View style={styles.box1}>
                    <Text style ={{color: '#00000080'}}>Vui lòng điền vào các ô dưới đây</Text>
                    <Text style ={{width: 244, textAlign: 'center', color: '#000'}}>Chỉ vài bước đơn giản bạn đã trở thành khách hàng của PETP Shop</Text>
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
                        onChangeText={text => setmatkhau1(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Nhập lại mật khẩu'
                        placeholderTextColor={'#00000080'}
                        secureTextEntry={true}
                        inlineImageLeft='icon_lock'
                        inlineImagePadding={20}
                        onChangeText={text => setmatkhau2(text)}
                    />
                </View>
        
                <View>
                    <TouchableOpacity onPress={handleAddUser} style={{ backgroundColor: buttonColor, height: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', color: textColor }}>ĐĂNG KÝ</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ textAlign: 'center', marginTop: 20 }}>─────── Hoặc đăng nhập ─────── </Text>
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
                <Text style ={{color:'#00000080'}}>Bạn đã có tài khoản? </Text>
                <TouchableOpacity onPress={dangnhapScreen}><Text style ={{color: '#F17E87', fontWeight: 'bold'}}>Đăng nhập ngay</Text></TouchableOpacity>
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
        marginTop: 20

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

export default ManHinhDangKi;
