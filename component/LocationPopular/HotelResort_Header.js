import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet, FlatList} from 'react-native'
import Header from '../Header'
import HotelResort from './HotelResort'
import {Hotel} from '../../HotelData'
import {useDispatch,useSelector} from 'react-redux'
const HotelResort_Header =({ navigation })=>{
    const goback = () => {
        navigation.goBack();
    }
    const dispatch = useDispatch();
    const check =(item)=>{
        navigation.navigate('Hotel'),
        dispatch({type:'CheckHotel',hotel:item})
    }
    return(
        <View style={styles.container}>
            <Header Name='Khách sạn' back={goback} />
            <View style={styles.flat}>
                   <FlatList 
            data={Hotel}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>
                <HotelResort  Item ={item}  check={()=>check(item)} />
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