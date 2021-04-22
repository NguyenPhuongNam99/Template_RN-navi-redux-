import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const FirstDay_Item = ({ item,check}) => {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={{ paddingVertical: 7 }}>{item.miuteHeader}</Text>
                <View style={styles.blockBody}>
                    
                        <View style={styles.top}>
                            <View style={styles.topLeft}>
                                <Image style={styles.imageBlock} source={item.image} />
                            </View>
                            <View style={styles.topRight}>
                                <View style={styles.titleBlock}>
                                    <Text style={styles.titleChild}>{item.title}</Text>
                                    <TouchableOpacity onPress={check}>
                                        <Image style={styles.x} source={require('../../assets/x.png')} />
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.titleBlock}>
                                    <Text style={styles.minute}>{item.minute}</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.option}>Chọn điểm khác</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                   

                    <View style={styles.bottom}>
                        <View style={styles.BottomTop}>
                            <View style={styles.blockBottom}>
                                <Image source={require('../../assets/car.png')} />
                                <Text style={styles.km}>{item.km}</Text>
                            </View>
                            <View style={styles.blockBottom}>
                                <Image source={require('../../assets/clock.png')} />
                                <Text style={styles.minuteClock}>{item.clock}</Text>
                            </View>
                            <View style={styles.blockBottom}>
                                <Image source={require('../../assets/book.png')} />

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 7
    },
    block: {
        height: 135,

        marginHorizontal: 15,
        marginBottom: 36,
        flex: 1,

    },
    blockBody: {
        height: 130,

        justifyContent: 'space-between',

    },
    top: {
        flex: 0.7,
        // backgroundColor:'green',
        flexDirection: 'row', shadowColor: "green",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.94,

        elevation: 1,
     
    },
    bottom: {
        marginTop: 15,
        flex: 0.3,
        borderWidth: 1,
        borderColor: '#FFB59A',
        borderStyle: 'dashed',
        borderRadius: 5

    },
    topLeft: {
        flex: 0.32,

    },
    topRight: {
        flex: 0.68,

        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    imageBlock: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        alignSelf:'center'
    },
    titleBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 10
    },
    titleChild: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Roboto-Medium'
    },
    minute: {
        color: '#FF5F24',
        fontSize: 12,
        fontWeight: '700'
    },
    x: {
        width: 14,
        height: 14
    },
    option: {
        color: 'rgba(255, 95, 36, 0.7)',
        fontSize: 12
    },

    BottomTop: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'

    },
    blockBottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 9,
        alignItems: 'center'
    },
    km: {
        color: '#3076FE',
        fontSize: 11,
        paddingLeft: 5
    },
    minuteClock: {
        color: '#FF5F24',
        fontSize: 11,
        paddingLeft: 5

    }

})
export default FirstDay_Item;