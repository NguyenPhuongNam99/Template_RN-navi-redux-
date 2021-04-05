import React from 'react';
import {View, Text,Image,TextInput,StyleSheet,TouchableOpacity,FlatList} from 'react-native';

const DestionationPopular = ({navigation})=>{
    const data =[
        {
            id:1,
            image:require('../assets/pb2.png')
        },
        {
            id:2,
            image:require('../assets/pb3.png')
        },
        {
            id:3,
            image:require('../assets/oke.jpg')
        },
        {
            id:4,
            image:require('../assets/pb5.png')
        },
    ]
    const check =(item )=>{
        if(item ==1 ){
            navigation.navigate('LocationDetail')
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{ width: 8, height: 12, }} source={require('../assets/search1.png')} />
                </TouchableOpacity>
                <Text style={styles.header_titlle}>Địa Điểm Phổ Biến</Text>
                <TouchableOpacity>
                    <Image style={{ width: 12, height: 12, }} source={require('../assets/search2.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.block}>
                <FlatList 
                data={data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item)=>item.id}
                renderItem={(({item})=>{
                    return(
                    <View style={{marginVertical:10,  height:180}}>
                        <TouchableOpacity onPress={()=>check(item.id)}>
                              <Image source={item.image} style={styles.tinilogo}/>
                        </TouchableOpacity>
                          
                      
                        
                    </View>
                    )
                })}
                />
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
 container:{
     flex:1
 } ,
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    // width:375,
    height: 70,

    alignItems: 'center',
    paddingHorizontal: 16
},
block:{
   
    marginHorizontal:16,
    marginVertical:16,marginBottom:20,flex:1
},
tinilogo:{
   width:'100%',
   height:'100%',
   resizeMode:'stretch'
//    height:'100%',backgroundColor:'green'
}
})
export default DestionationPopular