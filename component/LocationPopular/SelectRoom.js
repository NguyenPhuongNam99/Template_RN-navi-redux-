import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import Header from '../Header'
const SelectRoom =({Item,check,pass})=>{
    const goback=()=>{
        navigation.goBack()
    }
    return(
        <View style={styles.container}>
            {/* <Header Name='Chọn Phòng' back ={goback}/>

            <View style={styles.title}>
                <Text style={styles.text}>Gía hiển thị/1 phòng/1 đêm</Text>
            </View> */}

            <View style={styles.block}>
                <View style={styles.image}>
                    <Image style={styles.imageRoom} source={Item.image} />
                </View>
                <View style={styles.blockTitle}>
                    <View style={styles.titleTop}>
                        <Text style={styles.name}>{Item.name}</Text>
                        <Text style={styles.detail}>Xem chi tiết</Text>
                    </View>
                    <View style={styles.Sub}>
                          <Text style={styles.type}>Loại giường - giường đôi</Text>
                        <Text style={styles.type}>Thêm loại giường - giường nhỏ</Text>
                    </View>

                  <View style={styles.Subfooter}>
                        <Text style={styles.pay}>Thanh toán ngay | Không hoàn tiền</Text>
                    <Text style={styles.room}> Còn 5 phòng với giá này !</Text>
                  </View>
                  

                    <View style={styles.blockRight}>
                        
                            <Text>
                                <Text style={{color:'#FF2424',fontSize:15}}>  {Item.price}</Text>   VND
                           
                          </Text>
                        <Text style={styles.bonus}> (Chưa bao gồm thuế và phí)</Text>
                    
                        
                        <TouchableOpacity style={styles.Touchable} onPress={pass} >
                            <Text style={styles.textTouch}>Chọn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        
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
    block:{
        height:371,
        backgroundColor:'#FFFFFF',
        marginHorizontal:15,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 2,
        borderBottomLeftRadius:3,
        borderBottomRightRadius:3,
        marginVertical:10
    },
    image:{
        height:115,
       
    },
    blockTitle:{
        paddingHorizontal:15
    },
    imageRoom:{
        width:'100%',
        height:'100%',
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    titleTop:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:10
    },
    name:{
        color:'#707070',
        fontSize:14
    },
    detail:{
        fontSize:12,
        color:'#ED8A19'
    },
    Sub:{
        marginTop:18
    },
    type:{
        fontSize:12,
        color:'#000000',
        fontWeight:'bold',
        paddingBottom:11
      
    },blockRight:{
        alignItems:'flex-end',
        
    },
    Subfooter:{
        marginTop:30
    },
    pay:{
        color:'#828282',
        fontSize:12,
        paddingBottom:10
    },
    room:{
        fontSize:12,
        color:'#FF0000'
    },
    bonus:{
        fontSize:12,
        fontWeight:'900'
    },
    Touchable:{
        backgroundColor:'#FF5F24',
        height:32,
        padding:8,
        borderRadius:18,
        marginTop:3
    },
    textTouch:{
        fontSize:12,
        color:'#FFFFFF'
    }
})

export default SelectRoom