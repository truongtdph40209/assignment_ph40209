import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SanPhamMoi = () => {
    const navigation = useNavigation()
    const data = [
        {
            id: '1',
            img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/3/7/638454104625932893_honor-x7b-dd.jpg",
            tensp: 'Honor X7b 8GB-256GB',
            gia: 4790000,
            giacu: 5290000,
            desc:'Nguyên liệu: Sữa bột, men tiêu hóa, các vitamin (A, E, B12,B1,D3), khoáng, chất điện giải và đường lactose….. Sữa bột cao cấp Bio Milk dành cho chó mèo, giúp các bé tăng cân, bổ sung dinh dưỡng, rất dể tiêu hóa tương tự sữa mẹ, có tác dụng thay thế sữa mẹ trong trường hợp chó, mèo mất sữa, kém sữa hoặc thiếu sữa do bầy con quá đông, đồng thời là nguồn bổ sung chất dinh dưỡng cho chó mèo còi cọc, chậm lớn. Thay thế sữa mẹ trong khi chó mèo mẹ mất, chó mèo mẹ ít sữa, hoặc bầy con quá đông.',
            binhluan: [
                {
                    username: 'Trinh Dinh Truong',
                    comment: 'San pham oke day'
                },
                {
                    username: 'Abc',
                    comment: 'San Pham Oke Day'
                },
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
            ]
        },
        {
            id: '2',
            img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/1/25/638417729562660990_xiaomi-poco-m6-pro-dd-docquyen-bh.jpg",
            tensp: 'Xiaomi 8GB-256GB',
            gia: 5990000,
            giacu: 6490000
            ,
            desc:'Nguyên liệu: Sữa bột, men tiêu hóa, các vitamin (A, E, B12,B1,D3), khoáng, chất điện giải và đường lactose….. Sữa bột cao cấp Bio Milk dành cho chó mèo, giúp các bé tăng cân, bổ sung dinh dưỡng, rất dể tiêu hóa tương tự sữa mẹ, có tác dụng thay thế sữa mẹ trong trường hợp chó, mèo mất sữa, kém sữa hoặc thiếu sữa do bầy con quá đông, đồng thời là nguồn bổ sung chất dinh dưỡng cho chó mèo còi cọc, chậm lớn. Thay thế sữa mẹ trong khi chó mèo mẹ mất, chó mèo mẹ ít sữa, hoặc bầy con quá đông.',
            binhluan: [
                {
                    username: 'Trinh Dinh Truong',
                    comment: 'San pham oke day'
                },
                {
                    username: 'Abc',
                    comment: 'San Pham Oke Day'
                },
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
            ]
        }
        ,
        {
            id: '3',
            img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/1/11/638405567889290705_honor-x9b-dd-dq-1.jpg",
            tensp: 'Honor 5G 12GB-256GB',
            gia: 8990000,
            giacu: 9990000,
            desc:'Nguyên liệu: Sữa bột, men tiêu hóa, các vitamin (A, E, B12,B1,D3), khoáng, chất điện giải và đường lactose….. Sữa bột cao cấp Bio Milk dành cho chó mèo, giúp các bé tăng cân, bổ sung dinh dưỡng, rất dể tiêu hóa tương tự sữa mẹ, có tác dụng thay thế sữa mẹ trong trường hợp chó, mèo mất sữa, kém sữa hoặc thiếu sữa do bầy con quá đông, đồng thời là nguồn bổ sung chất dinh dưỡng cho chó mèo còi cọc, chậm lớn. Thay thế sữa mẹ trong khi chó mèo mẹ mất, chó mèo mẹ ít sữa, hoặc bầy con quá đông.',
            binhluan: [
                {
                    username: 'Trinh Dinh Truong',
                    comment: 'San pham oke day'
                },
                {
                    username: 'Abc',
                    comment: 'San Pham Oke Day'
                },
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
            ]
        },

        {
            id: '4',
            img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638158962810512367_ss-galaxy-s22-dd-icon.jpg",
            tensp: 'Samsung S22 5G 128GB',
            gia: 13990000,
            giacu: 1599000,
            desc:'Nguyên liệu: Sữa bột, men tiêu hóa, các vitamin (A, E, B12,B1,D3), khoáng, chất điện giải và đường lactose….. Sữa bột cao cấp Bio Milk dành cho chó mèo, giúp các bé tăng cân, bổ sung dinh dưỡng, rất dể tiêu hóa tương tự sữa mẹ, có tác dụng thay thế sữa mẹ trong trường hợp chó, mèo mất sữa, kém sữa hoặc thiếu sữa do bầy con quá đông, đồng thời là nguồn bổ sung chất dinh dưỡng cho chó mèo còi cọc, chậm lớn. Thay thế sữa mẹ trong khi chó mèo mẹ mất, chó mèo mẹ ít sữa, hoặc bầy con quá đông.',
            binhluan: [
                {
                    username: 'Trinh Dinh Truong',
                    comment: 'San pham oke day'
                },
                {
                    username: 'Abc',
                    comment: 'San Pham Oke Day'
                },
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
                ,
                {
                    username: 'Nguyen Van a',
                    comment: 'san pham oke day'
                }
            ]
        },

    ]


  

    const btn_chitiet = (data) => {
        navigation.navigate('ManHinhChiTiet', {data})
    }
    return (
        <View>
            <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: '#F17E87', fontSize: 24, fontWeight: 'bold' }}>Sản phẩm mới</Text>
                <TouchableOpacity><Text>Xem tất cả</Text></TouchableOpacity>
            </View>
            <View style ={{ backgroundColor: '#FFEBEE',  borderRadius: 10}}>
                <FlatList
                    data={data}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => btn_chitiet(item)} style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 7 }}>
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

export default SanPhamMoi;
