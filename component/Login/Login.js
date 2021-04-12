import React from 'react';
import { ScrolView,StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ImageBackground, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {

  return (
    <ImageBackground style={styles.container} source={require('../../assets/b1.png')}>
     
      <Image style={styles.image} source={require('../../assets/b2.png')} /> 
      <View style={{
        position: 'absolute',
        top: '5%', left: '37%', zIndex: 100
      }}>
        <Image style={styles.position} source={require('../../assets/logo.png')} />
        
      </View>
      <Image style={{ position:'absolute',top:'32%',left:'40%',zIndex:100}} source={require('../../assets/ok.png')} />
      <View style={{position:'absolute',top:'40%',left:8,marginHorizontal:15,width:'89%'}}>
              <Image style={{position:'absolute',top:'40%',left:10,zIndex:100}} source={require('../../assets/flag.png')} />
              <TextInput style={{paddingLeft:80,borderRadius:30,width: '100%',borderWidth:1,zIndex:100,backgroundColor:'rgba(0, 0, 0, 0.5)'}}/>

      
      </View>
     
      <TouchableOpacity style={{position:'absolute',top:'45%',left:10,width:'94%',justifyContent:'center',alignItems:'center',height:45,backgroundColor:'#FF5F24',borderRadius:22,marginTop:48}}>
                <Text style={{color:'red',fontSize:20,fontWeight:'bold',color:'#FFFFFF'}}>OK</Text>
       </TouchableOpacity>

       <TouchableOpacity style={{position:'absolute',top:'65%',left:10,width:'95%',justifyContent:'center',alignItems:'center',height:45,backgroundColor:'#055EEE',borderRadius:22,marginTop:48,flexDirection:'row',zIndex:100}}>
       <Icon name="facebook-square" size={19} color="white" />
       <Text style={{color:'#FFFFFF',fontSize:15,paddingLeft:20}}>Đăng nhập với Facebook</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{position:'absolute',top:'75%',left:10,width:'95%',justifyContent:'center',alignItems:'center',height:45,backgroundColor:'#055EEE',borderRadius:22,marginTop:48,flexDirection:'row',zIndex:100}}>
        <Image style={{position:'absolute',top:1,left:1,borderRadius:14
      }}  source={require('../../assets/gg.png')}/>
       <Text style={{color:'#FFFFFF',fontSize:15,paddingLeft:20}}>Đăng nhập với Facebook</Text>
       </TouchableOpacity>
     
      
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  image: {
    width: '100%',
    height: '100%', zIndex: 100
  },
  position: {

  }
})
export default Login;