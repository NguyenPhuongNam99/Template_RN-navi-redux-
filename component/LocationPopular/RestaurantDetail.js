import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RestaurantDetail = () => {
    return (
        <View style={styles.coontainer}>
            <View style={{ height: 240 }}>
                <Image style={{ width: '100%', height: '100%', backgroundColor: '#FFFFFF' }} source={require('../../assets/tom.png')} />
            </View>
            <View style={styles.postion}>

            </View>

            <View>
                <TouchableOpacity>
                    <Icon style={styles.postion1} name="angle-left" size={19} color="#FFFFFF" />
                </TouchableOpacity>
                <View style={styles.block}>
                    <Text style={styles.text}>Nhà hàng hải sản Khói Chiều</Text>
                    <View >
                        <Image source={require('../../assets/location.png')}/>
                        <Text>Lý Sơn, Quảng Ngãi</Text>
                    </View>
                </View>
            </View>
        </View>
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
    block:{
        position: 'absolute',
        top: -100,
        left: 0
    },
    postion1: {
        position: 'absolute',
        top: -210,
        left: 16
    },
    text:{
        color:'#FFFFFF',
        fontSize:18,
        lineHeight:21
    }
})
export default RestaurantDetail;