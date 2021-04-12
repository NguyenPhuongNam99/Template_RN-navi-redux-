import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native'
import Header from '../Header'
import SelectShedule_item from './SelectShedule_item'
import {SelectScheduleData} from '../../Data/ScheduleData'
const SelectSchedule =({navigation})=>{
    const goback =()=>{
        navigation.goBack()
    }
    return(
        <View style={styles.container}>
            <Header Name ='Chọn lịch trình'  back ={goback}/>
           
            {/* <View style={{ marginHorizontal: 10, marginTop: 10,flex:1 }}> */}
                    <FlatList
                        data={SelectScheduleData}
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <SelectShedule_item Item={item} />
                        }
                    />
        </View>
    )
}
const styles= StyleSheet.create({
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

export default SelectSchedule;