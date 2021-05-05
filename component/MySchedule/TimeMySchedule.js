import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../Header'
import { TimeMySchedule_Data } from '../../Data/TimeMySchedule_Data'
import { color } from 'react-native-reanimated';
const TimeMySchedule = ({ navigation }) => {
    const goback = () => {
        navigation.goBack()
    }
    const getBackground =(id)=>{
        let color;
        if(id==3){
             color='#FFB498'
        }
       
        else if(id>3 || id <3){
            color='#A0A0A0'
        }

       return color;
    }
    // const getbackGroundItem =(id)=>{
    //     let color;
    //     if(id==8){
    //         return color='#FFB498'
    //     }
    //     else{
    //         return color='#A0A0A0'
    //     }
    // }
    return (
        <View style={styles.container}>
            <Header Name='Lịch trình đang đi' back={goback} />
            <ScrollView style={{flex:9}}>
                <View style={styles.block}>
                    {
                        TimeMySchedule_Data.map((item) => {
                            return (
                                <View >
                                    <Text style={{ fontSize: 14, color:getBackground(item.id), fontWeight: 'bold', marginLeft: 20 }}>{item.ngay}</Text>
                                    <Text style={{ color: '#A0A0A0', fontSize: 12, marginLeft: 20, marginTop: 13, paddingBottom: 8 }}>{item.timer}</Text>
                                    <View >
                                        {
                                            item.thongtin.map((val, index) => {
                                            
                                                return (
                                                    <View style={styles.blockBottom}>
                                                        <View style={styles.left}>
                                                            <Text style={[styles.text,{backgroundColor:getBackground(item.id)}]}>{index + 1}</Text>
                                                            {
                                                                index + 1 == item.thongtin.length ? <View /> : <View style={[styles.textBottom,{color:getBackground(item.id)}]}></View>
                                                            }

                                                            {
                                                                val.minute ?
                                                                    <Text style={{  fontSize: 12,color:getBackground(item.id) }}>{val.minute}</Text>
                                                                    : null
                                                            }

                                                        </View>
                                                        <View style={styles.center}>
                                                            <Text style={{ color:getBackground(item.id)  }}>{val.title}</Text>
                                                            {
                                                                val.text ?
                                                                    <Text style={{ color:getBackground(item.id), fontSize: 12, paddingTop: 16 }}>{val.text}</Text>
                                                                    :
                                                                    null
                                                            }

                                                        </View>
                                                        {
                                                            val.star ?
                                                                <View style={styles.right}>
                                                                    <Text style={{ fontSize: 13 }}>10 </Text>
                                                                    <Image source={require('../../assets/star2.png')} />
                                                                </View>
                                                                :
                                                                <View style={styles.right}>

                                                                </View>

                                                        }

                                                    </View>
                                                )
                                            })
                                        }
                                    </View>

                                </View>
                            )
                        })
                    }
 <TouchableOpacity style={{
                    height: 30, flex: 1,
                    backgroundColor: '#FFB498', justifyContent: 'center', alignItems: 'center', marginBottom: 20,marginHorizontal:15,borderRadius:5,
                }}>
                    <Text style={{color:'#FFFFFF'}}>Chúc mừng bạn đã hoàn thành chuyến đi</Text>
                </TouchableOpacity>
                </View>
               
                
            </ScrollView>
            <View style={styles.bottom}>
                    <View style={{flexDirection:'row'}}>
                        <Text>Địa chỉ </Text>
                        <Text style={{color:'#E83F00',paddingLeft:10}}>7,860,000 đ/2 người</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={styles.leftB}>
                            <Text>Điểm thưởng :</Text>
                            <View style={{flexDirection:'row',paddingLeft:15}}>
                                <Text>116</Text>
                                <Image style={{marginLeft:8}} source={require('../../assets/star2.png')} />
                            </View>
                        </View>
                        <View style={styles.rightB}>
                            <TouchableOpacity style={{backgroundColor:'#FF5F24',justifyContent:'center',alignItems:'center',height:20,borderRadius:5}}>
                                <Text style={{color:'#FFFFFF',padding:8}}>Đánh giá chuyến đi</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    block: {
        flex: 1
        
    },
    bottom: {
        height: 84,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        backgroundColor:'#FFFFFF',
        padding:16,
        flexDirection:'column',
        justifyContent:'space-between',
        flex:0.1
    },
    blockBottom: {
        height: 70,
        flexDirection: 'row',

        marginBottom: 13
    },
    left: {
        flex: 1.5,

        alignItems: 'center',

    },
    leftB:{
        flexDirection:'row'
    },
    center: {
        flex: 7,
        // backgroundColor:'orange',

    },
    right: {
        flex: 1.5,

        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    text: {
        width: 15,
        height: 15,
        // backgroundColor: 'black',
        borderRadius: 20,
        color: '#FFFFFF',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 11
    },
    textBottom: {
        height: 42,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 0.4,
        borderColor: '#C5C5C5',
        marginTop: 4

    }
})
export default TimeMySchedule