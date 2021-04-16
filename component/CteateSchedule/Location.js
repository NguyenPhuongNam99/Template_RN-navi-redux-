import React from 'react';
import {View,Text,StyleSheet, TextInput, FlatList,Image,Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LocationSchedule} from '../../Data/LocationData'
import {useDispatch,useSelector} from 'react-redux'
const Location =({navigation})=>{
    const dispatch = useDispatch();
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Bạn có chắc muốn hủy không",
      "",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => navigation.navigate('ScreenSuggest')}
      ]
    );
    const check =(item)=>{
        dispatch({type:'ADDLOCATIOON',item:item})
        navigation.navigate('ScreenSuggest')
    }
    const pass =(item2 )=>{
        dispatch({type:'ADDDESTINATION',adddestination:item2})
    }
    const LocationDetail =({Item,check,pass})=>{

        const xuly =()=>{
            check && check();
            pass && pass();
        }
        return(
            <TouchableOpacity style={styles.block} onPress={xuly} >
            <Image source={Item.image} style={styles.image} />
            <View style={styles.blockLocation}>
                <Text style={styles.location}>{Item.location}</Text>
                <Text>{Item.title}</Text>
            </View>    
        </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="search" size={14} color="#9A9A9A" />
                </TouchableOpacity>
                <TextInput
                    style={{ flex: 1,paddingHorizontal:10,fontSize:12
                        }}
                    placeholder="Bạn muốn đi đâu"
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#B6B6B6'
                />
                <TouchableOpacity onPress={createTwoButtonAlert}>
                    <Text style={{color:'#828282',fontSize:12}}>Hủy</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data ={LocationSchedule}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item})=>{
                        return(
                        <LocationDetail  Item={item} check ={()=>check(item)} pass={()=>pass(item)}/>
                        )
                    }}
                />
        
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flexDirection:'row',
        height:50,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:16
    },
    block:{
        flexDirection:'row',
        paddingVertical:9,
        marginHorizontal:16
    },
    image:{width:21,height:18,alignSelf:'center'},
    blockLocation:{
        paddingLeft:7
    },
    location:{
        color:'#000000',
        fontSize:13,
        fontWeight:'bold',
        fontFamily:'sf-ui-display-cufonfonts'
    }
})
export default Location;