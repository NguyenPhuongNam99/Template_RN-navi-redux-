
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

        // <View style={styles.container}>

        //     <Image
        //         style={styles.image}
        //         source={require('../asses/b1.png')}
        //     />
        //     <Image
        //         style={styles.tinyLogo}
        //         source={require('../asses/b2.png')}
        //     />
        //     <Image

        //         style={styles.Logo}
        //         source={require('../asses/logo.png')}
        //     />
        //     <TextInput  style={styles.input} keyboardType='numeric'/>
        // </View>
        <ImageBackground source={require('../assets/b1.png')} style={styles.b1}>
            {/* <Image
                style={styles.tinyLogo}
                source={require('../asses/b2.png')}
            />
               <Image
           
                   style={styles.Logo}
                   source={require('../asses/logo.png')}
               />
                    <TextInput  style={styles.input} keyboardType='numeric'/> */}
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/b2.png')}
                />
              {/* <View style={{alignItems:'center',justifyContent:'center'}}>
                   <TouchableOpacity style={{backgroundColor:'green'}}> */}
                    <Text style={{paddingTop:100}}>hello Viet Nam</Text>
                {/* </TouchableOpacity>
              </View> */}
               
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    b1: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1
    },
    // image: {
    //     flex: 1, resizeMode: 'stretch', width: '100%', height: '100%'
    // },
    tinyLogo: {

        width: '100%',
      


    },
    Logo: {
        position: 'absolute',
        top: '10%',
        left: '33%',
        //    width:132,
        //    height:169
        // marginTop:30
    },
    input: {

        
        borderWidth: 1,
        width: '100%',
        height: 50,
        borderRadius: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginLeft: 2
    }, input1: {
        height: 40,
       
        borderWidth: 1,paddingTop:300
    },
});

export default SecondScreen;
