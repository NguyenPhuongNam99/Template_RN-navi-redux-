import React from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet,FlatList} from 'react-native';
import {ScheduleNowData} from '../Data/ScheduleData';
import ScheduleNow_Item from '../component/ScheduleNow_Item'
const ScheduleHeader =({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{ width: 8, height: 12, }} source={require('../assets/search1.png')} />
                </TouchableOpacity>
                <Text style={styles.header_titlle}>Lịch trình gần đây</Text>
                <TouchableOpacity>
                    <Image style={{ width: 12, height: 12, }} source={require('../assets/search2.png')} />
                </TouchableOpacity>
            </View>
            {/* <View style={{ marginHorizontal: 10, marginTop: 10,flex:1 }}> */}
                    <FlatList
                        data={ScheduleNowData}
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <ScheduleNow_Item Item={item} />
                        }
                    />
                {/* </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        // width:375,
        height: 70,

        alignItems: 'center',
        paddingHorizontal: 16
    },
    header_titlle: {
        color: '#000000',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: 'bold'
    },

})
export default ScheduleHeader;