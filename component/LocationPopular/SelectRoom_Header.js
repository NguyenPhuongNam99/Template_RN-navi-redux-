import React from 'react';
import {View,Text,Image,Touchable,StyleSheet, FlatList} from 'react-native'
import {Selectroom} from '../../Data/SelectRoom_Data'
import Header from '../Header';
import SelectRoom from '../LocationPopular/SelectRoom'
import {useDispatch,useSelector} from 'react-redux'
const SelectRoom_Header =({navigation})=>{
    const goback=()=>{
        navigation.goBack()
    }
    const dispatch=useDispatch();
  
    const pass =(item)=>{   
        navigation.navigate('ReverseRoom')
        dispatch({type:'SelectRoom',select:item})
    }
    return(
        <View style={styles.container}>
            <Header Name='Chọn Phòng' back ={goback}/>

            <View style={styles.title}>
                <Text style={styles.text}>Gía hiển thị/1 phòng/1 đêm</Text>
            </View> 

            <FlatList 
            data={Selectroom}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>
            <SelectRoom Item ={item}  pass={()=>pass(item)}/>
        }
            />
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        height:25,
        backgroundColor:'#EAEAEA',
        marginVertical:16,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#828282',
        fontSize:13
    },
})
export default SelectRoom_Header;