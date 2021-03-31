import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

const ScheduleNow_Item = ({ Item }) => {
    return (
        <View style={styles.container_header}>


            <View style={styles.header_shedule}>
                <View style={styles.left1}>
                    <Image style={{ width: 120, height: 160, borderTopLeftRadius: 5 }} source={Item.image} />
                </View>
                <View style={styles.right1}>
                    <Image style={{ width: 174, height: 77, marginHorizontal: 6, borderRadius: 5 }} resizeMode='cover' source={Item.image2} />
                    <View style={styles.schedule_bottom}>
                        <Image style={{ width: 84, height: 77, marginHorizontal: 6, }} resizeMode='cover' source={Item.image4} />
                        <Image style={{ width: 84, height: 77, }} resizeMode='cover' source={Item.image3} />
                    </View>
                </View>


            </View>
            <View style={styles.header_title_block}>
                <View style={styles.left_header}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>{Item.title} </Text>
                        <Text>{Item.time}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 3, paddingRight: 4 }}>
                        <Image style={{ width: 25, height: 25, marginHorizontal: 6, borderRadius: 14 }}
                            resizeMode='cover'
                            source={Item.avatar} />
                        <View >
                            <Text>{Item.name}</Text>
                            <Text>{Item.timmer}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.right_header}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 12, height: 13, marginHorizontal: 6, borderRadius: 14 }}

                            source={Item.location} />
                        <Text>{Item.des}</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#FF5F24', width: 104, height: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 5,marginTop:4 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'normal', }}>5,200,000 đ/ người</Text>
                    </TouchableOpacity>
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

        elevation: 5,
    },
    header_shedule: {
        flexDirection: 'row', marginHorizontal: 4
    },
    left1: {
        flex: 1,

    },
    right1: {
        flex: 4,

    },
    schedule_bottom: {
        flexDirection: 'row', marginTop: 5
    },
    header_title_block: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16
    }
})
export default ScheduleNow_Item