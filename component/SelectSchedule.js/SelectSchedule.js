import React from 'react';
import {View,Text,StyleSheet,FlatList,SafeAreaView} from 'react-native'
import Header from '../Header'
import SelectShedule_item from './SelectShedule_item'
import {SelectScheduleData} from '../../Data/ScheduleData'
const SelectSchedule =({navigation})=>{
    const goback =()=>{
        navigation.goBack()
    }
    const check =()=>{
        navigation.navigate('EvaluationSchedule')
    }
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Header Name ='Chọn lịch trình'  back ={goback}/>
           
                    <FlatList
                        data={SelectScheduleData}
                     
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <SelectShedule_item Item={item} check={check} />
                        }
                    />
        </View>
        </SafeAreaView>
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