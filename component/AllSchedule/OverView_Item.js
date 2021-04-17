import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

const OverView_Item = ({ item }) => {
    return (
        <View style={{ height: 240 ,width:150,marginLeft:16,marginTop:10}}>
        <View style={styles.blockImage, { flex: 0.83, backgroundColor: 'green',borderRadius:5 }}>
            <Image style={styles.imageBlock} source={item.image} />
            <Text style={{position:'absolute',bottom:3,left:12,color:'#FFFFFF',fontSize:14,fontWeight:'bold'}}>{item.timerDate}</Text>
        </View>
        <View style={{ flex: 0.27 }}>
            <Text style={{color:'#000000',fontWeight:'bold',marginTop:8,marginBottom:3}}>{item.date}</Text>
            <Text style={{color:'#969696',fontSize:13}}>{item.text}</Text>
        </View>
    </View>

    )
}
const styles= StyleSheet.create({
    blockImage: {

        width: 150,
        backgroundColor: 'green',
        marginLeft: 16,
        position: 'relative',
        flex: 0.8
    },
    imageBlock: {
        width: '100%',
        height: '100%',
        borderRadius:5
    },
})
export default OverView_Item