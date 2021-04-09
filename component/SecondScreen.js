
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image, ImageBackground, TextInput, Touchable, TouchableOpacity
} from 'react-native';

const SecondScreen = () => {
    return (
        <View style={styles.container}>
             <ImageBackground source={require('../assets/b1.png')} style={styles.b1}>
             <View>
                 <Image style={styles.imagePO} source={require('../assets/b2.png')}/>
             </View>
            <View style={styles.blockLogo}>
                <Image  source={require('../assets/logo.png')} style={styles.imagelogo}/>
                <Image source={require('../assets/okgo.png')} style={styles.imagelogo1}/>
                <View>
                    <TextInput style={styles.input}/>
                </View>
            </View>
            </ImageBackground>
        </View>
     
       
    );
};

const styles = StyleSheet.create({
   
    container: {
        flex: 1
    },
     b1: {
        width: '100%',
        height: '100%',
        resizeMode:'cover'
    },
    imagePO:{
        width:'100%',
        height:'100%'
    },
    blockLogo:{
        position:'absolute',
        top:'7%',
        left:'34%',
        zIndex:100
    },
    imagelogo:{
        width:131,
        height:170,
    
    },
    imagelogo1:{
        marginTop:6
    },
    input:{
        height:50,
        flex:1,
       borderWidth:1
    }
   
});

export default SecondScreen;
