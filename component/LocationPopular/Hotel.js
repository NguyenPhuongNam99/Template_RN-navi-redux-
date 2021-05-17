import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { restaurant } from '../../HotelData'
import MultipleDetail from '../MultipleDetail'
import {useSelector,useDispatch} from 'react-redux'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Hotel = ({ navigation }) => {
    // const dispatch = useDispatch();
    // const item = useSelector(state=>state.chitietkm)
    const hotel = useSelector(state=>state.hotel)
    const [star, setStar] = useState([1, 2, 3, 4, 5]);
    const starA = require('../../assets/star.png')
    const CustomBar = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                {
                    star.map((item, key) => {
                        return (
                            <Image
                                key={item}
                                source={starA}
                                style={{
                                    width: 10,
                                    height: 10, marginRight: 3
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }
    // const back =()=>{
    //     navigation.goBack();
    // }
    const back = () => {
        console.log('da kichh go back')
        navigation.goBack()
    }
    return (
        <ScrollView>
            <View style={styles.coontainer}>
                <View style={{ height: 240 }}>
                    <Image style={{ width: '100%', height: '100%', backgroundColor: '#FFFFFF' }} source={hotel.image} />
                </View>
                <View style={styles.postion}>

                </View>
                {/* {item.name} */}
                <View>
                    <TouchableOpacity style={styles.postion1} onPress={() => back()}>
                        <Icon name="angle-left" size={19} color="#FFFFFF" />
                    </TouchableOpacity>
                    <View style={styles.block}>
                        <Text style={styles.text}> {hotel.name}</Text>
                        <View style={styles.block_body}>
                            <Image style={styles.image_location} source={require('../../assets/location1.png')} />
                            <Text style={styles.destination}>{hotel.des}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.block_title}>
                    <Text style={{ fontSize: 12, fontWeight: '600' }}><Text style={{ color: '#333333', fontWeight: '600', fontFamily: 'sf-ui-display-bold-58646a511e3d9', fontSize: 12 }}>Địa chỉ :</Text>  Thôn Đông, Xã An Vĩnh ,Lý Sơn, Quảng Ngãi</Text>
                    <Text style={{ fontSize: 12, fontWeight: '600' }}><Text style={{ color: '#333333', fontWeight: '600', fontFamily: 'sf-ui-display-bold-58646a511e3d9' }}>Giờ mở cửa :</Text> 10:00 -- 23:59</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontWeight: '600' }}><Text style={{ color: '#333333', fontWeight: '600', fontFamily: 'sf-ui-display-bold-58646a511e3d9' }}>Gía :</Text>  {hotel.price}</Text>
                        <CustomBar />
                    </View>
                </View>
                <View style={{ height: 60 }}>

                </View>
                <View style={styles.image_map}>
                    <Image
                        style={styles.map}
                        source={require('../../assets/map4.png')}
                    />
                </View>

                <View style={{ flexDirection: 'row',justifyContent:'space-evenly' }}>
                    <View style={styles.block_image}>
                        <Image style={styles.image_eat} source={require('../../assets/tp1.png')} />
                    </View>
                    <View style={styles.block_image}>
                        <Image style={styles.image_eat}  source={require('../../assets/tp2.png')} />
                    </View>
                    <View style={styles.block_image}>
                        <Image style={styles.image_eat} source={require('../../assets/tp3.png')} />
                        <View style={{ position: 'absolute', top: 0, left: 0, height:verticalScale(104), backgroundColor: 'rgba(0, 0, 0, 0.4)', width: '100%' }} />
                        <View>
                            <Image style={{ position: 'absolute', top: -50, left: '40%', width: 17, height: 17 }} source={require('../../assets/sum.png')} />
                        </View>

                    </View>
                </View>
                <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('SelectRoom_Header')}>
                    <Text style={styles.textTouchable}>Chọn phòng</Text>
                </TouchableOpacity>

                <View style={styles.text_header}>
                    <Text style={styles.textAll}>
                        <Text style={styles.text_title}>Nhà hàng hải sản Lý Sơn – Khói chiều</Text>  có không gian kiến trúc hình tròn độc đáo,
                 rộng rãi và thoáng đãng. Vị trí đắc địa, gần cầu cảng có thể nhìn ra biển.
                 Nên bạn có thể vừa ngắm cảnh, nghe sóng biển rì rào vừa thưởng thức các món ngon.
                </Text>
                    <View style={{ paddingTop: 13 }}>
                        <Text style={styles.textAll}>
                            Thực đơn rất đa dạng, đầy đủ các món đặc sản Lý Sơn như: gỏi tỏi, gỏi rong biển, ốc xà cừ,
                            nhum biển, cua huỳnh đế,….Đặc biệt, phong cách phục vụ của nhân viên rất chuyên nghiệp và tận tình.
                            Ngoài những món hải sản tươi sống, bạn có thể tìm mua các đặc sản làm quà cho bạn bè, người thân ở đây.
                    </Text>
                    </View>
                </View>

                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Nhà hàng lân cận</Text>
                    <TouchableOpacity>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={restaurant}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            //Tạo component rồi gọi đến
                            <MultipleDetail Item={item} />
                        }
                    />
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    postion: {
        width: '100%',
        height: 240,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute',
        top: 0,
        left: 0
    },
    block: {
        position: 'absolute',
        top: -139,
        left: 16
    },
    postion1: {
        position: 'absolute',
        top: -210,
        left: 16
    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'sf-ui-display-bold-58646a511e3d9'
    },
    block_body: {
        flexDirection: 'row',
        paddingTop: 10

    },
    image_location: {
        width: 8,
        height: 10
    },
    destination: {
        color: '#FFFFFF',
        fontSize: 10,
        paddingLeft: 8,
        fontFamily: 'sf-ui-display-cufonfonts',
        fontWeight: 'normal'
    },
    block_title: {
        height: 90,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: 190,
        left: 0,
        zIndex: 10,
        width: '92%',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginLeft: 16,
        marginRight: 16,
        paddingVertical: 14,
        paddingHorizontal: 17,
        borderRadius: 5,
        fontSize: 13
    },
    image_map: {
        height: 140,
        // backgroundColor:'green'

    },
    map: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    block_image: {
        height:verticalScale(104),
        width:scale(104),
        marginVertical: 16
    },
    image_eat: {
        width:'100%',
        height:'100%'

    },
    text_header: {
        marginHorizontal: 16,

        fontWeight: '600',
        color: '#333333',
        fontStyle: 'normal',

    },
    text_title: {
        fontFamily: 'sf-ui-display-bold-58646a511e3d9',

        fontSize: 12,
        fontWeight: '600',
        color: '#333333',
        fontStyle: 'normal',
    },
    textAll: {
        fontSize: 12,
        fontFamily: 'sf-ui-display-cufonfonts',
        lineHeight: 17
    },
    Discount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 19
    },
    discount_title: {
        color: '#000000',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: 'bold'
    }
    ,
    discount_title1: {
        color: '#9E9E9E',
        fontSize: 12,
        lineHeight: 14,
        fontWeight: 'normal'
    },
    touchable: {
        marginHorizontal: 15,
        backgroundColor: '#FF5F24',
        borderRadius: 5,
        justifyContent: 'center',
        height: 35,
        alignItems: 'center',
        marginVertical: 16
    },
    textTouchable: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF'
    }

})
export default Hotel;