import React from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'

const LocationItem = ({ Item }) => {
    return (
        <View style={styles.block}>
            <View style={styles.block_top}>
                <View style={styles.left}>
                    <Image resizeMode='stretch' style={{ width: '100%', height: '100%' }} source={Item.image1} />


                </View>
                <View style={styles.right}>
                    <View style={styles.right_Top}>
                        <Image style={{ width: '100%', height: '100%' }} source={Item.image2} />

                    </View>
                    <View style={styles.right_bottom}>
                        <View style={{ flex: 0.483, backgroundColor: 'black' }}>
                            <Image style={{ width: '100%', height: '100%' }} source={Item.image3} />

                        </View>
                        <View style={{ flex: 0.483, backgroundColor: 'green' }}>
                            <Image style={{ width: '100%', height: '100%' }} source={Item.image4} />

                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.block_bottom}>
                <View style={{ paddingTop: 16 }}>
                    <View style={{ flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={{ paddingRight: 5, color: '#000000', fontStyle: 'normal', fontSize: 14, fontWeight: '600', fontFamily: 'Roboto-Bold' }}>Lý Sơn, Quảng Ngãi</Text>
                        <Text style={{ color: '#494949', fontSize: 12, fontWeight: 'normal' }}>(5 ngày )</Text>
                    </View>
                    <View >
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 25, height: 25, borderRadius: 5, marginRight: 6 }} source={require('../../assets/avatar.jpg')} />
                            <View>
                                <Text style={{ fontSize: 13, color: '#000000', fontWeight: 'normal' }}>Nguyễn Phương Nam</Text>
                                <Text style={{ fontSize: 9, color: '#494949' }}> 10 giờ trước</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ paddingTop: 16,alignItems:'flex-end' }}>
                    <View style={{ flexDirection: 'row', paddingBottom: 6 }}>
                        <Image style={{ height: 15, width: 10, marginRight: 5 }} source={require('../../assets/location.png')} />
                        <Text style={{ color: '#3076FE', fontSize: 12 ,textAlign:'right'}}>Việt Nam</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#FF5F24', height: 27, justifyContent: 'center', alignItems: 'center', width: 130, borderRadius: 5 }}>
                        <Text>4,500,00 đ/người</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    block: {
        height: 238,
        marginHorizontal: 16,
        marginTop:10,shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation:2,
    },
    block_top: {
        flex: 0.7,

        flexDirection: 'row',

    },
    block_bottom: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
     
    },
    left: {
        flex: 0.4,

        paddingRight: 6
    },
    right: {
        flex: 0.6,


    },
    right_Top: {
        flex: 0.49,

    },

    right_bottom: {
        flex: 0.51,

        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 6
    }

})
export default LocationItem