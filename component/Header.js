import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';

const Header =({Name,navigation,back})=>{
    return(
        <View style={styles.header}>
        <TouchableOpacity onPress={back}>
            <Image style={{ width: 8, height: 12, }} source={require('../assets/search1.png')} />
        </TouchableOpacity>
        <Text style={styles.header_titlle}>{Name}</Text>
        <Text></Text>
        {/* <TouchableOpacity>
            <Image style={{ width: 12, height: 12, }} source={require('../assets/search2.png')} />
        </TouchableOpacity> */}
    </View>
    )
}
const styles =StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        // width:375,
        height: 58,

        alignItems: 'center',
        paddingHorizontal: 16
    },
    header_titlle: {
        color: '#000000',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: 'bold'
    },
})
export default Header