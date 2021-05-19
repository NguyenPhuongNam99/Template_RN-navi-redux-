import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet,SafeAreaView} from 'react-native'
import Header from '../Header'

const Setting =({navigation})=>{
    const goback =()=>{
        navigation.goBack();
    }
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
         
             <Header Name='Cài đặt' back ={goback} />
            <View style={styles.block_tab}>
                <TouchableOpacity style={styles.block}>
                   
                    <Text style={styles.textTab} onPress={()=>navigation.navigate('PolycySetting')}>Chính sách bảo mật</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block} onPress={()=>navigation.navigate('TermOfUse')}>
                  
                    <Text style={styles.textTab}>Điều khoản sử dụng </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block} >
                 
                    <Text style={styles.textTab}>Hướng dẫn thanh toán </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block} onPress={()=>navigation.navigate('Login')}>
               
                    <Text style={styles.textTab}>Đăng xuất </Text>
                </TouchableOpacity>
              

            </View>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E5E5E5'
    },
    header:{
        backgroundColor:'#FFFFFF',
        height:60,
        alignItems:'center',
        justifyContent:'center'
    },
    header_title:{
        textAlign:'center',
        color:'#000000',
        fontSize:14,
        fontWeight:'bold',
        fontFamily:'Roboto-Medium'
        
    },
    block_image:{
        marginTop:25,
        marginBottom:25,
        backgroundColor:'#FFFFFF',
        height:80,
        flexDirection:'row',
        alignItems:'center'        
    },
    image:{
        width:60,
        height:60,
        borderRadius:27,
        marginHorizontal:15
    },
    name:{
        color:'#000000',
        fontSize:15,
        fontWeight:'500',
        fontFamily:'Roboto-Medium'
    },
    block_tab:{
        height:167,
        backgroundColor:'#FFFFFF',
        marginTop:25
    },
    block:{
        flexDirection:'row',
        alignItems:'center',
        height:39,
        paddingHorizontal:16
    },
   
    textTab:{
        borderBottomWidth:0.2,
        width:'100%',
        borderBottomColor:'#B9B9B9',
        paddingVertical:7,
        color:'#000000',
        fontSize:13,
        fontWeight:'500',
        fontFamily:'sf-ui-display-semibold-58646eddcae92'
    },
    textTab1:{
       
        color:'#000000',
        fontSize:13,
        fontWeight:'500',
        fontFamily:'sf-ui-display-semibold-58646eddcae92'
    }
})
export default Setting