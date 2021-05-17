import React ,{useState} from 'react';
import {View,Text,StyleSheet, TextInput, FlatList,Image,Alert,SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LocationSchedule} from '../../Data/LocationData'
import {useDispatch,useSelector} from 'react-redux'
import { text } from 'react-native-communications';
const Location =({navigation})=>{
    const [data,setData] = useState(LocationSchedule)
    const [search,setSearch] = useState('')
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
    const searchBar =(text)=>{
        if (text){
            const masterData = data.filter((item)=>{
                const itemData = item.location ? item.location.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            });
            setData(masterData)
            setSearch(masterData)
        }
        else{
            setData(data)
            setSearch(text)
        }
    }
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="search" size={14} color="#9A9A9A" />
                </TouchableOpacity>
                <TextInput
                    style={{ flex: 1,paddingHorizontal:10,fontSize:12
                        }}
                        value={search}
                    placeholder="Bạn muốn đi đâu"
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#B6B6B6'
                    onChangeText={(text)=>searchBar(text)}
                />
                <TouchableOpacity onPress={createTwoButtonAlert}>
                    <Text style={{color:'#828282',fontSize:12}}>Hủy g</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data ={data}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item})=>{
                        return(
                        <LocationDetail  Item={item} check ={()=>check(item)} pass={()=>pass(item)}/>
                        )
                    }}
                />
        
            </View>
        </View>
        </SafeAreaView>
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