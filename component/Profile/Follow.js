import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList ,SafeAreaView} from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import Header from '../Header';
import { Followdata } from '../../Data/FollowData'
import {useSelector,useDispatch} from 'react-redux'
const Follow = ({ navigation }) => {
    const goback = () => {
        navigation.goBack()
    }
    const checkFollow = useSelector(state=>state.checkFollow)
    const dispatch= useDispatch();
    const isCheck = (item)=>{
        if(!checkFollow){
            dispatch({type:'UPDATECHECK'})
            dispatch({type:'ADDFOLLOW',item:item})
        }
    }
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Header Name='Người theo dõi' back={goback} />


            <View style={styles.block}>
                <FlatList
                    data={Followdata}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.Follow}>
                                <View style={styles.BlockImage}>
                                    <Image style={{ width: 34, height: 34, borderRadius: 17 }} source={item.image} />
                                    <Text style={styles.name}>{item.name}</Text>
                                </View>
                                {
                                    
                                    !checkFollow ? 
                                    <TouchableOpacity style={styles.touchabe} onPress={()=>isCheck(item)}>
                                    <Text style={styles.status}>{item.status}</Text>
                                </TouchableOpacity> 
                                :
                                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'#FF5F24',width:scale(73),height:moderateScale(20),
        alignSelf: 'center'}}>
                                    <Text style={{fontSize:10,color:'#FFFFFF'}}>{item.status}</Text>
                                </TouchableOpacity>
                                }
                              
                            
                            </View>

                           
        
                        )
                    }

                    }

                />
            </View>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    block: {
        marginVertical: 25,
       
      
    },
    Follow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderBottomWidth:1,
        borderBottomColor:'#B9B9B9',
        paddingBottom:7,
        paddingTop:7,
        paddingHorizontal:15,
        
        

    },
    BlockImage: {
        flexDirection: 'row'
    },
    name: {
        alignSelf: 'center',
        paddingLeft: 9
    }, touchabe: {
        borderWidth: 1,
        borderColor: '#FF5F24',
        justifyContent: 'center',
        alignItems: 'center',
        // padding:6,
        // paddingTop:3,
        // paddingBottom:3,
        padding: 6,
        borderRadius: 8,
        height: 20,
        alignSelf: 'center'

    },
    status: {
        fontSize: 10,
        color: '#FF5F24',
        lineHeight: 20
    }
})
export default Follow