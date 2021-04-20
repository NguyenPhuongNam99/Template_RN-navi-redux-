import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
const FirstDay =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.block}>
                <Text> 7:00</Text>
                <View style={styles.blockBody}>
                    <View style={styles.top}>

                    </View>
                    <View s>

                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    block:{
        height:135,
        backgroundColor:'green'
    },
    blockBody:{
        height:130,
        backgroundColor:'blue'
    }
   
  
})
export default FirstDay