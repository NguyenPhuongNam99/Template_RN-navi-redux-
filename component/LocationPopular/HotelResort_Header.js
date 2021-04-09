import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet, FlatList} from 'react-native'
import Header from '../Header'
import HotelResort from './HotelResort'
import {Hotel} from '../../HotelData'
const HotelResort_Header =({ navigation })=>{
    const goback = () => {
        navigation.goBack();
    }
    return(
        <View style={styles.container}>
            <Header Name='Khách sạn' back={goback} />
            <View style={styles.flat}>
                   <FlatList 
            data={Hotel}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>
                <HotelResort  Item ={item}/>
        }
            />
            </View>
         
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    flat:{
        flex:1
    }
   
})
export default HotelResort_Header;