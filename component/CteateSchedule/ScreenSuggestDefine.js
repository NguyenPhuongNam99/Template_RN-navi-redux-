import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import FinishItem from '../MySchedule/FinishItem';
import { ScheduleNowData } from '../../Data/ScheduleData'
import Header from '../Header'
const ScreenSuggestDefine = ({navigation}) => {
    const goback = ()=>{
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Header Name ='Gợi ý' back={goback}/>
            <FlatList
                data={ScheduleNowData}
                // horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <FinishItem Item={item} />
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
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
export default ScreenSuggestDefine;