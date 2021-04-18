import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { scheduleData2, data } from '../../Data/OverViewData'
import OverView_Item from './OverView_Item'
const OverView_Plan = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.blockbody}>
                <Text style={styles.plan}>Kế hoạch</Text>
                <TouchableOpacity>
                    <Text style={styles.all}>Tất cả  ></Text>
                </TouchableOpacity>
            </View>
            <View >
                <FlatList
                    data={scheduleData2}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <OverView_Item item={item} />
                    }
                />


            </View>
            <View style={styles.Infooke}>
                <Text style={styles.titleHeader}>Chuyến đi gồm </Text>
                <View style={styles.infoBlock}>
                    <Image style={styles.icon} source={require('../../assets/anh23.png')} />
                    <View>
                        <Text style={styles.infotitle}>Khách sạn </Text>
                        <Text>1 khách sạn, 5 ngày 4 đêm</Text>
                    </View>
                </View>

                <View style={styles.infoBlock}>
                    <Image style={styles.icon} source={require('../../assets/v33.png')} />
                    <View>
                        <Text style={styles.infotitle}>Máy bay</Text>
                        <Text>2 vé khứ hồi</Text>
                    </View>
                </View>
            </View>
            <View style={styles.Infomember}>
                <Text style={[styles.titleHeader, { marginTop: 20, marginBottom: 10 }]}>Thành viên</Text>
                <View style={styles.member}>
                    <Image style={styles.memberAvatar} source={require('../../assets/nam.jpg')} />
                    <Image style={styles.memberAvatar} source={require('../../assets/trang3.jpg')} />
                </View>
            </View>
            <View style={[styles.Infomember, { marginTop: 20 }]}>
                <Text style={styles.titleHeader}>Vé thăm quan</Text>
                <View style={styles.infoBlock}>
                    <Image style={styles.icon} source={require('../../assets/v34.png')} />
                    <View>
                        <Text style={styles.infotitle}>Vé vào</Text>
                        <Text>12 vé, 6 địa điểm</Text>
                    </View>
                </View>
            </View>


            
            <View style={styles.touchableEnd}>
                    <Text style={styles.price}>5,200,000 đ/người</Text>
                    <TouchableOpacity style={{ backgroundColor: '#FF5F24', width: 71, height: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                        <Text style={styles.order}>Đặt ngay</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    blockbody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    plan: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold'
    },
    all: {
        fontSize: 12,
        color: '#9E9E9E'
    },
    blockImage: {

        width: 150,
        backgroundColor: 'green',
        marginLeft: 16,
        position: 'relative',
        flex: 0.8
    },
    imageBlock: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    timer: {
        position: 'absolute',
        bottom: 20,
        left: 15,
        zIndex: 100
    },
    textTimer: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    transformBlock: {
        marginHorizontal: 15,
        marginVertical: 60
    },
    info: {
        flexDirection: 'row',
        marginHorizontal: 15
    },
    Infooke: {
        marginHorizontal: 15
    },
    titleHeader: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    icon: {
        width: 26,
        height: 18,
        marginRight: 10

    },
    infoBlock: {
        flexDirection: 'row',
        marginTop: 13
    },
    infotitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 4
    },
    infoName: {
        fontSize: 12,
        color: '#9A9A9A',
    },
    member: {
        flexDirection: 'row',

    }
    , memberAvatar: {
        width: 40,
        height: 40,
        borderRadius: 19,
        marginRight: 13
    },
    Infomember: {
        marginHorizontal: 15,

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
    }

})
export default OverView_Plan;