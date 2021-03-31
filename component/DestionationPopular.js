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
            image:require('../assets/pb4.png')
        },
        {
            id:4,
            image:require('../assets/pb5.png')
        },
    ]
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
                    <View style={{flex:1,marginVertical:10}}>
                        <Image source={item.image} style={styles.tinilogo}/>
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
    flex:1,
    marginHorizontal:16,
    marginVertical:16
},
tinilogo:{
    flex:1
}
})
export default DestionationPopular