import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,TextInput, ImageBackground} from 'react-native'

const Login =()=>{
    const image =require('../../assets/logo.png');
    return(
        <View style={styles.container}>
        {/* <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>Inside</Text>
        </ImageBackground> */}
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default Login;