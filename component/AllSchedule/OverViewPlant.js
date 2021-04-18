import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenWidth,

} from "react-native-responsive-dimensions";
const OverViewPlant = () => {
    return (
        <View style={styles.container}>
            <View >
                <View style={styles.shedule}>
                    <Text style={styles.sheduleAir}>Hà Nội - Quy Nhơn</Text>
                    <View>
                        <View style={styles.plantAir}>
                            <Text style={styles.sheduleAir}>HAN</Text>
                            <Image style={{ width: 10, height: 8 }} source={require('../../assets/ia.png')} />
                            <Text style={styles.sheduleAir}>UIH</Text>
                        </View>
                        <Text style={styles.timerAir}>Thứ 5, 5 tháng 12, 2019</Text>
                    </View>
                    <Image style={styles.imagViet} source={require('../../assets/viet.png')} />
                    <Text style={styles.nameAir}>Chuyến bay: VJ345</Text>
                </View>

                <View style={styles.BlockInfoAir}>
                    <View>
                        <Text style={styles.name}>HAN</Text>
                        <Text style={styles.timer}>13:00</Text>
                    </View>
                    <View style={{ width: responsiveWidth(20), borderBottomColor: '#828282', borderBottomWidth: 0.5 }} />
                    <View>
                        <Text style={{ textAlign: 'center' }}>1h35m</Text>
                        <Text>Hạng thương gia</Text>
                    </View>
                    <View style={{ width: responsiveWidth(20), borderBottomColor: '#828282', borderBottomWidth: 0.5 }} />
                    <View>
                        <Text style={styles.name}>UNI</Text>
                        <Text style={styles.timer}>13:00</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 25 }}>
                    <View style={{ padding: 'auto', borderBottomWidth: 1, width: responsiveWidth(40) }} />
                </View>


            </View>

            <View >
                <View style={styles.shedule}>
                    <Text style={styles.sheduleAir}> Quy Nhơn - Hà Nội </Text>
                    <View>
                        <View style={styles.plantAir}>
                            <Text style={styles.sheduleAir}>UNI</Text>
                            <Image style={{ width: 10, height: 8 }} source={require('../../assets/ia.png')} />
                            <Text style={styles.sheduleAir}>HAN</Text>
                        </View>
                        <Text style={styles.timerAir}>Thứ 5, 5 tháng 12, 2019</Text>
                    </View>
                    <Image style={styles.imagViet} source={require('../../assets/viet.png')} />
                    <Text style={styles.nameAir}>Chuyến bay: VJ345</Text>
                </View>

                <View style={styles.BlockInfoAir}>
                    <View>
                        <Text style={styles.name}>UNI</Text>
                        <Text style={styles.timer}>10:00</Text>
                    </View>
                    <View style={{ width: responsiveWidth(20), borderBottomColor: '#828282', borderBottomWidth: 0.5 }} />
                    <View>
                        <Text style={{ textAlign: 'center' }}>1h35m</Text>
                        <Text>Hạng thương gia</Text>
                    </View>
                    <View style={{ width: responsiveWidth(20), borderBottomColor: '#828282', borderBottomWidth: 0.5 }} />
                    <View>
                        <Text style={styles.name}>HNA</Text>
                        <Text style={styles.timer}>11:00</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 25 }}>
                    <View style={{ padding: 'auto', borderBottomWidth: 1, width: responsiveWidth(40) }} />
                </View>


            </View>


            <TouchableOpacity style={styles.touchableFind}>
                <Image source={require('../../assets/search3.png')} />
                <Text style={styles.findPlant}>Tìm chuyến bay khác</Text>
            </TouchableOpacity>
            <View style={styles.touchableEnd}>
                <Text style={styles.price}>2,600,000 đ/người</Text>
                <TouchableOpacity style={{ backgroundColor: '#FF5F24', width: 71, height: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                    <Text style={styles.order}>Đặt ngay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    shedule: {
        justifyContent: 'center',
        alignItems: 'center'
    }, plantAir: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10
    }, sheduleAir: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    timerAir: {
        fontSize: 12,
        marginTop: 8
    },
    imagViet: {
        width: 40,
        height: 15,
        marginTop: 16
    },
    nameAir: {
        fontSize: 12,
        color: '#828282', marginTop: 16
    },
    BlockInfoAir: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 18


    },
    name: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    timer: {
        fontWeight: '600',
        fontSize: 12
    },
    touchableFind: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        backgroundColor: "#FFFFFF",
        marginHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
    , findPlant: {
        color: '#FF5F24',
        fontSize: 12,
        fontWeight: '900',
        paddingLeft: 6,
        borderRadius: 5
    },
    touchableEnd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        height: 55,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 20,
        paddingHorizontal: 15
    },
    price: {
        fontSize: 16,
        color: '#FF5F24',
        fontWeight: 'bold',

    },
    order: {
        color: '#FFFFFF'
    },
})
export default OverViewPlant