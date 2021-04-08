import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native'

const Profile =({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_title}>Thông tin cá nhân </Text>
            </View>
            <View style={styles.block_image}>
                <Image style={styles.image}  source={require('../../assets/nam.jpg')}/>
                <Text style={styles.name}>Nguyễn Phương Nam</Text>

            </View>
            <View style={styles.block_tab}>
                <TouchableOpacity style={styles.block}>
                    <Image style={styles.image_tab} source={require('../../assets/1.png')}/>
                    <Text style={styles.textTab}>Lịch trình của tôi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <Image style={styles.image_tab} source={require('../../assets/2a.png')}/>
                    <Text style={styles.textTab}>Khuyến mại</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block} onPress={()=>navigation.navigate('Favourite')}>
                    <Image style={styles.image_tab} source={require('../../assets/2b.png')}/>
                    <Text style={styles.textTab}>Yêu thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <Image style={styles.image_tab} source={require('../../assets/2c.png')}/>
                    <Text style={styles.textTab}>Đánh giá</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block} onPress={()=>navigation.navigate('Setting')}>
                    <Image style={styles.image_tab} source={require('../../assets/2d.png')}/>
                    <Text style={styles.textTab1}>Cài đặt</Text>
                </TouchableOpacity>

            </View>
        </View>
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
        height:200,
        backgroundColor:'#FFFFFF'
    },
    block:{
        flexDirection:'row',
        alignItems:'center',
        height:39
    },
    image_tab:{
        width:20,
        height:20,
        marginHorizontal:15
    },
    textTab:{
        borderBottomWidth:0.2,
        width:'83%',
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
export default Profile