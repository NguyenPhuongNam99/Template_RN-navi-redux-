import React,{useState} from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet, TextInput} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

const UpdateInfo =()=>{
    const [state,setState] = useState('https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg')
    const image =()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            setState(image.path)
          });
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTitle}>
                    <TouchableOpacity>
                        <Text>Hủy</Text>
                    </TouchableOpacity>
                    <Text>Sửa thông tin cá nhân</Text>
                    <TouchableOpacity>
                        <Text style={styles.save}>Lưu</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.avatar}>
                    <Image style={styles.imageAvatar} source={{uri:state}} />
                    <TouchableOpacity onPress={image}>
                        <Text style={styles.titleChange}>Thay đổi ảnh đại diện </Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.info}>
                <View style={styles.blockInfo}>
                    <Text style={{alignSelf:'center',flex:3}}>Họ tên </Text>
                    <TextInput placeholder='Phuong Nam' placeholderTextColor='#000000'  style={styles.input}/>
                </View>
                <View style={styles.blockInfo}>
                    <Text style={{alignSelf:'center',flex:3}}>Email </Text>
                    <TextInput placeholder='nguyenphuongnam@gmail.com' placeholderTextColor='#000000' style={styles.input}/>
                </View>
                <View style={[styles.blockInfo,{paddingBottom:9,paddingTop:10}]}>
                    <Text style={{alignSelf:'center',flex:3}}>Số điện thoại </Text>
                    <TextInput  value={'0973712797'} style={styles.input1}/>
                </View>
                {/* <View style={styles.blockInfo}>
                    <Text style={{alignSelf:'center',flex:3}}>Email </Text>
                    <TextInput   style={styles.input}/>
                </View>
                <View style={styles.blockInfo}>
                    <Text style={{alignSelf:'center',flex:3}}>Số điện thoại </Text>
                    {/* <TextInput value={''}  style={styles.input}/> */}
                    {/* <Text style={{paddingLeft:20,flex:7}}>0973712797</Text>
                </View> */}
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerTitle:{
        height:50,
        backgroundColor:'#FFFFFF',
        flexDirection:'row'
        ,justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:16
    },save:{
        color:'#FF5F24'
    },
    avatar:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:21
    },  
    imageAvatar:{
        height:70,
        width:70,
        borderRadius:30
    },
    titleChange:{
        color:'#FF5F24',
        paddingVertical:16

    },
    info:{
        borderTopWidth:0.3,
        borderBottomWidth:0.3,
        borderTopColor:'#B9B9B9',
        borderBottomColor:'#B9B9B9',
        
    },
    blockInfo:{
        flexDirection:'row',marginHorizontal:15,
       
        
    },
    input:{
        borderBottomWidth:0.2,
        height:36,
        flex:7,
        fontSize:13,
        paddingTop:10,
        lineHeight:20,
      marginLeft:70,
        borderBottomColor:'#B9B9B9',
        color:'#000000',
        fontSize:14
    },
    input1:{
    
        height:36,
        flex:7,
        fontSize:13,
        
        lineHeight:20,
      marginLeft:70,
      
    }
})
export default UpdateInfo