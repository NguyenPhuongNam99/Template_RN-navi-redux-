import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import Header from '../Header'
const TimeMySchedule =({navigation})=>{
    const goback =()=>{
        navigation.goBack()
    }
    return(
        <View style={styles.container}>
            <Header Name='Lịch trình đang đi' back ={goback} />
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default TimeMySchedule