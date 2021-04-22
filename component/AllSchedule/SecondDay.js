import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
const SecondDay =()=>{
    const dispatch = useDispatch()
    const overview = useSelector(state=>state.overviewDay)
    console.log('ooo',{overview})
    return(
        <View style={styles.container}>
            <Text>Ngày 2</Text>
            <View>
                {/* <Text>  {overview[1].title}</Text> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default SecondDay