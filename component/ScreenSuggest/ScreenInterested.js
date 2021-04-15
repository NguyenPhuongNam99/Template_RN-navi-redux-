import React from 'react';
import {View,Text,Image,TouchableOpacity,CheckBox,StyleSheet,FlatList} from 'react-native'
import { ScreenSuggestData } from '../../Data/ScreenSuggest_Data';
const ScreenInterested =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.back} source={require('../../assets/back.png')}/>
                <Text style={styles.title}>Có thể bạn quan tâm</Text>
                <Image  source={require('../../assets/select.png')}/>
            </View>
            <View style={styles.body}>
            <FlatList
                            style={{ marginTop: 16,flex:1}}
                            numColumns={2}
                            showsHorizontalScrollIndicator={false}
                            data={ScreenSuggestData}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.blockFlat}>
                                        <View style={{ flex: 0.8, backgroundColor: 'yellow' }}>
                                            <Image source={item.image} style={{ width: '100%', height: '100%' }} />
                                            <CheckBox style={styles.checkbox} />
                                        </View>
                                        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text >{item.title}</Text>
                                        </View>
                                    </View>
                                )
                            }}

                        />
            </View>
             <View style={styles.footer}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        backgroundColor:'#FFFFFF',
        height:50,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',paddingHorizontal:15,
        flex:1
    },
    back:{
        width:8,
        height:12
    },
    title:{
        color:'#000000',
        fontSize:14,
        fontWeight:'bold'
    },
    body:{
        flex:8,
       
        flexDirection:'row',
        flexWrap:'wrap',justifyContent:'space-between' 
    },
    footer:{
        flex:1,
        backgroundColor:'orange'
    },
    blockFlat: {
        backgroundColor: '#FFFFFF', height: 162, width: 162, marginLeft: 16, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2, borderRadius: 5
    },
    checkbox:{
        position:'absolute',
        top:0,
        right:0,zIndex:100,
        color:'green'
    }


})
export default ScreenInterested;