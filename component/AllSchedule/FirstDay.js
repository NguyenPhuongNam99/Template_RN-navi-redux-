import React, { useState } from 'react'
import { FisrtDay_Data } from '../../Data/OverViewDay_Data'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Alert, Modal, Pressable } from 'react-native'
import FirstDay_Item from './FirstDay_Item'
import {useDispatch,useSelector} from 'react-redux'
const FirstDay = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const check =(item)=>{
        dispatch({type:'ADD_ID',itemDelete:item})
        console.log('da kick de lay id')
        console.log('id la',{id_delete})
        setModalVisible(!modalVisible)
    }
    const goback =()=>{
        navigation.goBack()
    }
    const dispatch = useDispatch();
    const id_delete = useSelector(state=>state.id_delete)
    const overview = useSelector(state=>state.overviewDay)
    const deleteitem =()=>{
        dispatch({type:'DELETE_ITEM',id_delete})
        setModalVisible(!modalVisible)
    }
    return (

        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"


                }}>

                    <View style={{
                        backgroundColor: '#FFFFFF',
                        height:135, width: 300, borderRadius: 10
                    }}>
                         <Text style={{ fontSize: 14, paddingTop: 16,fontFamily:'Roboto-Medium',fontWeight:'normal',paddingHorizontal:16 }}>Bạn có chắc muốn xóa địa điểm này không</Text>
                        <View style={styles.blockTouchable}>
                            <TouchableOpacity style={styles.touchable} onPress={()=>setModalVisible(!modalVisible)}>
                                <Text style={styles.cancel}>Hủy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={deleteitem} style={styles.touchable1}>
                                <Text style={styles.delete}>Xóa</Text>
                                
                            </TouchableOpacity>
                        </View>
                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() =>
                                setModalVisible(!modalVisible)}>
                                <Text style={{ fontSize: 14, color: '#9A9A9A', fontWeight: 'bold' }}>Cancel</Text>
                            </TouchableOpacity>

                        </View> */}
                    </View>

                </View>
            </Modal>
            <View style={{flex:9}}>
                  <FlatList
                data={overview}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <FirstDay_Item item={item}  check={()=>check(item.id)} />
                }
            />
            </View>
          
            <TouchableOpacity style={{marginHorizontal:15,marginTop:20,borderWidth:1,borderColor:'#FFB59A',borderRadius:5,borderStyle:'dashed',height:25,flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Image  source={require('../../assets/adddd.png')}/>
                <Text style={{color:'#FF5F24',fontSize:12,paddingLeft:6}}>Thêm điểm đi</Text>
            </TouchableOpacity>
             <View style={styles.touchableEnd}>
                <Text style={styles.price}>2,600,000 đ/người</Text>
                <TouchableOpacity style={{ backgroundColor: '#FF5F24', width: 71, height: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                    <Text style={styles.order}>Đặt ngay</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    blockTouchable:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:0.3,
        position:'absolute',
        bottom:0,
        flex:1,
        borderTopColor:'#8F8F8F'
    },
    touchable:{
        justifyContent:"center",
        alignItems:'center',
        flex:1,
        borderRightWidth:0.3,
        height:30,
        borderRightColor:'#8F8F8F'
    },
    touchable1:{
        justifyContent:"center",
        alignItems:'center',
        flex:1,
       
        height:30
    },
    cancel:{
        color:'#979797'
    },
    delete:{
        color:'#FF2424'
    },
    touchableEnd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        height: 55,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 20,
        paddingHorizontal: 15
    },
    price: {
        fontSize: 16,
        color: '#FF5F24',
        fontWeight: 'bold',

    },
    order: {
        color: '#FFFFFF'
    }



})
export default FirstDay