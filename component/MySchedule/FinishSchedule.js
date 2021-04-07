import React from 'react';
import {View, Text,Image,StyleSheet,FlatList} from 'react-native'
import {FinishScheduleData} from '../../Data/ScheduleData'
import ScheduleNow_Item from '../../component/ScheduleNow_Item'
const FinishShedule =()=>{
    return(
        <View style={styles.container}>
  <FlatList
                        data={FinishScheduleData}
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <ScheduleNow_Item Item={item} />
                        }
                    />
        </View>
    )
}
const styles =StyleSheet.create({
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

export default FinishShedule;