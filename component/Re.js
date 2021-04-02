import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Re = () => {
    return (
        <View style={styles.conatiner}>
            <View style={styles.top}>
                <View style={styles.left}>
                <Image style={{ width: '100%', height: '100%', borderRadius: 5 }} resizeMode='cover' source={require('../assets/thu.png')} />

                </View>
                <View style={styles.right}>
                    <View style={styles.block1}>
                    <Image resizeMode='contain' style={{ width: '100%', height: '100%', borderRadius: 5 }} resizeMode='cover' source={require('../assets/thu.png')} />

                    </View>
                    <View style={styles.block2}>
                        <View style={styles.nho}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 5 }} resizeMode='cover' source={require('../assets/thu.png')} />

                        </View>
                        <View style={styles.nho1}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 5 }} resizeMode='cover' source={require('../assets/thu.png')} />

                        </View>
                    </View>
                </View>
            </View>



            <View style={styles.bottom}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    conatiner: {
        height: 250,
        backgroundColor:'green'
    },
    top: {
        flex: 0.64,
        flexDirection: 'row',marginHorizontal:16
    },
    bottom: {
        flex: 0.36
    },
    left: {
        flex: 4,
        backgroundColor: 'red',
        marginRight: 7
    },
    right: {
        flex: 6,
        // backgroundColor:'green'

    },
    block1: {
        flex: 1,
        backgroundColor: 'blue',
        marginBottom: 7
    },
    block2: {
        flex: 1,
        backgroundColor: 'yellow',
        flexDirection:'row'
    },
    nho:{
        flex:1,backgroundColor:'red',marginRight:16
    },
    nho1:{
        flex:1,backgroundColor:'orange'
    }


})
export default Re;