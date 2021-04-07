import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ScheduleNow_Item = ({ Item }) => {
    return (
        <View style={styles.container_header}>
            <View style={styles.top}>
                <View style={styles.left}>
                    <Image style={{ width: '100%', height: '100%', borderTopLeftRadius: 5 }} source={Item.image} />

                </View>
                <View style={styles.right}>
                    <View style={{ flex: 1 }}>
                        <Image resizeMode='stretch' style={{ width: '100%', height: '100%', borderTopLeftRadius: 5 }} source={Item.image2} />

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 6 }}>
                        <View style={{ flex: 0.5, marginRight: 6 }}>
                            <Image style={{ width: '100%', height: '100%', borderTopLeftRadius: 5 }} source={Item.image4} />

                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image style={{ width: '100%', height: '100%', borderTopLeftRadius: 5 }} source={Item.image3} />

                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={{ flex: 5, marginTop: 16, marginHorizontal: 16 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>{Item.title} </Text>
                        <Text>{Item.time}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 3, }}>
                        <View style={{ paddingRight: 12 }}>
                            <Image style={{ width: 25, height: 25, borderRadius: 14 }}
                                resizeMode='cover'
                                source={Item.avatar} />
                        </View>

                        <View >
                            <Text>{Item.name}</Text>
                            <Text style={{ color: '#494949', fontSize: 8 }}>{Item.timmer}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 5, alignItems: 'flex-end', marginTop: 16, marginHorizontal: 16 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 12, height: 13, borderRadius: 14, marginBottom: 5 }}

                            source={Item.location} />
                        <Text>{Item.des}</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#FF5F24', width: 104, height: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 4 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'normal', }}>5,200,000 đ/ người</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:5}}>
                        <Image style={{ width: 14, height: 14, marginBottom: 5,marginRight:10 }}
                            resizeMode='stretch'
                            source={Item.share} />
                        <Image style={{ width: 16, height: 14, marginBottom: 5 }}

                            source={Item.tym} />
                    </View>

                </View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container_header: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1,

        backgroundColor: '#FFFFFF',
        // marginVertical: 16,
        // paddingTop: 10,
        // paddingBottom: 10,
        marginHorizontal: 13,
        height: 250,
        marginHorizontal: 15,
        marginVertical: 15

    },
    top: {
        flex: 0.64,
        flexDirection: 'row'
    },
    bottom: {
        flex: 0.36, flexDirection: 'row', justifyContent: 'space-between'
    },
    left: {
        flex: 4,
        marginRight: 7
    },
    right: {
        flex: 6,
        flexDirection: 'column'
    }
    // header_shedule: {
    //     flexDirection: 'row', 
    //     marginHorizontal: 10,

    //     marginHorizontal:10
    //     // width:373,
    //     // backgroundColor:'green'
    // },
    // left1: {
    //     flex: 1,
    //     // width:'100%'

    //     // flex:1,backgroundColor:'green'
    // },
    // right1: {
    //     flex: 2,
    //     // width:199


    // },
    // header_shedule: {
    //     flexDirection: 'row', marginHorizontal: 4
    // },
    // left1: {
    //     flex: 1,

    // },
    // right1: {
    //     flex: 4, marginHorizontal: 14

    // },
    // schedule_bottom: {
    //     flexDirection: 'row', marginTop: 5
    // },
    // header_title_block: {
    //     marginTop: 16,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginHorizontal: 16
    // }
})
export default ScheduleNow_Item