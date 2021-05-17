import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from 'react-native';

const HotelDetail = () => {
    return (

    
        <View style={styles.container}>
          
            <View style={styles.Header}>
                <Image style={styles.imageBanner} source={require('../../assets/ksd.jpg')} />
                <TouchableOpacity style={styles.back}>
                    <Image source={require('../../assets/back1.png')} />
                </TouchableOpacity>
                <View style={styles.titleBanner}>
                    <Text style={styles.title}>Khách sạn Mường Thanh, Holiday</Text>
                    <View style={styles.blockLocation}>
                        <Image style={styles.imageLocation} source={require('../../assets/loc.png')} />
                        <Text style={styles.titleLocation}>Lý Sơn ,Quảng Ngãi</Text>
                    </View>
                </View>
                <View style={styles.Destionation}>
                    <View style={{ paddingVertical: 14, paddingHorizontal: 16, color: '#333333' }}>
                        <View style={styles.des1}>
                            <Text style={styles.text1}>Địa chỉ :</Text>
                            <Text style={styles.text2}>  Thôn Phú Nghĩa, Xã Phú Kim, Thạch Thất ,Hà Nội</Text>
                        </View>
                        <View style={[styles.des1, { paddingVertical: 2 }]}>
                            <Text style={styles.text1}>Giờ mở cửa :</Text>
                            <Text style={styles.text2}>  05:00-23:00</Text>
                        </View>
                        <View style={[styles.des1, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <View style={[styles.left, { flexDirection: 'row' }]}>
                                <Text style={styles.text1}>Gía :</Text>
                                <Text style={styles.text2}>  850.000 đ - 6.950.000 đ</Text>
                            </View>
                            <View>
                                <Image source={require('../../assets/sa.png')} />
                            </View>

                        </View>
                    </View>
                </View>


                <View style={styles.map}>
                    <Image style={styles.imageMap} source={require('../../assets/map6.png')} />
                </View>

               
                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.textTouchable}>Chọn phòng</Text>
                </TouchableOpacity>


            </View>
  
        </View>
      
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    Header: {
        height: 240,
        backgroundColor: 'green',
        zIndex:100
    },
    imageBanner: {
        width: '100%',
        height: '100%'
    },
    titleBanner: {
        marginHorizontal: 15,
        position: 'absolute',
        top: '48%',
        left: 15,zIndex:100
    },
    back: {
        width: 8,
        height: 10,
        position: 'absolute',
        top: 30,
        left: 16,
        zIndex: 100
    },
    imageLocation: {
        width: 8,
        height: 10,
        marginRight: 6,
        zIndex:100

    },
    title: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        zIndex:100
    },
    titleLocation: {
        fontSize: 10,
        fontWeight: 'normal',
        color: '#FFFFFF',
        zIndex:100
    },
    blockLocation: {
        flexDirection: 'row',
        paddingTop: 7
    },
    Destionation: {
        height: 90,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: 190,
        left: 0,

        zIndex: 100,
        marginHorizontal: 15,
        width: '93%',
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,
        // marginLeft:15,
        // marginRight:15,
        // width:'92%'

    },
    des1: {
        flexDirection: 'row',

    },
    text1: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#333333'
    },
    text2: {
        fontSize: 13,
        color: '#333333'
    },
    map: {
        marginTop: 60,
        height: 140
    },
    imageMap: {
        width: '100%',
        height: '100%'
    },
    Top: {
        // flex:1,
        // backgroundColor:'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    block: {
        flex: 1,
        height: 104,
        backgroundColor: 'green',
        marginHorizontal: 15
    },
    block1: {
        flex: 1,
        height: 104,
        backgroundColor: 'orange',

    },
    block2: {
        flex: 1,
        height: 104,
        backgroundColor: 'blue',
        marginHorizontal: 15
    },
    opcaity:{
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0,
        left:0
    },
    sum:{
        position:'absolute',
        top:'45%',
        left:'43%'
    },
    touchable:{
        marginHorizontal:15,
        backgroundColor:'#FF5F24',
        borderRadius:5,
        justifyContent:'center',
        height:35,
        alignItems:'center',
        marginVertical:16
    },
    textTouchable:{
        fontSize:14,
        fontWeight:'500',
        color:'#FFFFFF'
    }

})
export default HotelDetail