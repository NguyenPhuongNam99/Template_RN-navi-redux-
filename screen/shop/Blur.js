import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BlurOverlay,{closeOverlay,openOverlay} from 'react-native-blur-overlay';
 
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
 

const Blur=()=>{
   
   const renderBlurChilds=()=> {
        return (
          <View style={styles.image}>
              <Text style={styles.instructions2}>{instructions}</Text>
 
              <Text style={styles.instructions2}>{instructions}</Text>
          </View>
        );
    }
 
  
        return (
 
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        openOverlay();
                    }}
                    style={{width: '90%', height: 36, backgroundColor: "#03A9F4", borderRadius: 4, margin: 16}}/>
 
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                
 
                <BlurOverlay
                    radius={14}
                    downsampling={2}
                    brightness={-200}
                    onPress={() => {
                        closeOverlay();
                    }}
                    customStyles={{alignItems: 'center', justifyContent: 'center'}}
                    blurStyle="dark"
                    children={renderBlurChilds()}
                />
                
            </View>
        );
    
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,color:'#03A9F4'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    instructions2: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 5,
    },
});
export default Blur