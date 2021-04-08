import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

import {useDispatch,useSelector} from 'react-redux'
const Counbt =()=>{
    const dispatch = useDispatch();
    const count = useSelector(state=>state.count)
    const item = useSelector(state=>state.chitietkm)
    const incre =()=>{
        dispatch({type:'Up'}),
        console.log('da')
    }
    return(
        <View style={styles.container} >
            <View style={styles.header}>
               <Text style={{backgroundColor:'green',width:50,height:60}}>
                {item.price}
               </Text>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    conatiner:{
        flex:1
    },
    header:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:40
    },
    po:{
        marginHorizontal:20,
        width:50,
        height:30,
        backgroundColor:'green'
    }
})
export default Counbt;