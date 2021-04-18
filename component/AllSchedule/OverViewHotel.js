import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import DetailVisit from './DetailVisit'
const OverViewHotel = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.blockHotel}>
                <Text style={styles.TitleHotel}>Khách sạn Phương Đông</Text>
                <View style={styles.HotelDetail}>
                    <Text style={styles.infoHotel}>- 1 Phòng VIP - 2 người</Text>
                    <Text style={styles.infoHotel}>- 4 ngày 3 đêm</Text>
                </View>
                <View style={styles.BlockPrice}>
                    <View style={styles.left}>
                        <Text style={styles.name}>Gía phòng</Text>
                        <Text style={styles.nightHotel}>(1 phòng/ đêm)</Text>
                    </View>
                    <View style={styles.right}>
                        <Text><Text style={styles.priceColor}>857,100</Text> VNĐ</Text>
                    </View>
                </View>
                <View style={styles.BlockPrice}>
                    <View style={styles.left}>
                        <Text style={styles.name}>Thuế và dịch vụ</Text>
                    </View>
                    <View style={styles.right}>
                        <Text><Text style={styles.priceColor}>857,100</Text> VNĐ</Text>
                    </View>
                </View>
            </View>
            <View style={styles.headeTouchavle}>
                <TouchableOpacity style={styles.touchableFind} onPress={()=>navigation.navigate(DetailVisit)}>
                    <Image source={require('../../assets/search3.png')} />
                    <Text style={styles.findPlant}>Tìm chuyến bay khác</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    blockHotel: {
        marginHorizontal: 15
    },
    TitleHotel: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    HotelDetail: {
        marginTop: 16
    },
    infoHotel: {
        color: '#000000',
        fontSize: 12,
        paddingBottom: 8
    },
    BlockPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    name: {
        fontSize: 13,
        fontWeight: '900',
        color: '#000000',

    },
    priceColor: {
        color: '#F8530D',
        fontSize: 14,

    },
    nightHotel: {
        color: '#979797',
        fontSize: 11
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
    headeTouchavle: {
        width: '100%', position: 'absolute',
        bottom: 10,
    }
})
export default OverViewHotel