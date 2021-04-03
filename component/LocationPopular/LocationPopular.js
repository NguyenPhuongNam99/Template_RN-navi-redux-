import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { LocationPopular_Data } from '../../Data/LocationPopular_Data';
import Header from '../Header';
const LocationPopular = ({ navigation }) => {
    const goback = () => {
        navigation.goBack();
    }
    return (

        <View style={styles.container}>
            <Header Name='Địa điểm phổ biến' back={goback} />
            <View style={styles.flat}>
                <FlatList
                    data={LocationPopular_Data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.headerTop}>

                                <View style={styles.header}>

                                    <Image style={styles.tinilogo} source={item.imgae} />
                                </View>
                                <View style={styles.postion}>
                                    <Text style={styles.text}>{item.tile}</Text>
                                </View>
                                <View style={styles.blur}>
                                </View>
                                <View style={styles.footer}>
                                    <Image style={styles.image} source={require('../../assets/location1.png')}/>
                                    <Text style={styles.text1} >{item.name}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },
    headerTop: {
       
        flex:1,
        backgroundColor:' rgba(0, 0, 0, 0.25)',
        marginVertical: 16,
        height:'100%'
       
    },
    flat:{
        
   marginHorizontal:16 ,marginBottom:150
    },
    header: {
        height: 180,
        backgroundColor: 'green',position:'relative'
      
    },
    tinilogo: {
        width: '100%',
        borderRadius:15
    },
    position: {

        color: 'red',

        backgroundColor: 'green'
    },
    blur:{
        height:180,
        backgroundColor:' rgba(0, 0, 0, 0.25)',
        position:'absolute',
        width:'100%',
    },
    text:{
           
        color:'#FFFFFF'
        ,fontWeight:'600',
        fontSize:16,
        lineHeight:19,
        fontFamily:'sf-ui-display-bold-58646a511e3d9',
        position:'absolute',top:-100,left:'40%'
     },
     footer:{
        flexDirection:'row',
        position:'absolute',
        bottom:16,
        left:16
     },
     image:{
         width:11,
         height:14,
         marginRight:6,
         color:'#FFFFFF'
     },
     text1:{
         color:'#FFFFFF',
         fontStyle:'normal',
         fontWeight:'normal',
         fontSize:14,fontFamily:'sf-ui-display-cufonfonts'
     }
})
export default LocationPopular;