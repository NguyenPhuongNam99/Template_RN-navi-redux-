
import React , { useEffect }from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,Dimensions
} from 'react-native';

  import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const FirstScreen = ({navigation}) => {
   
    //   useEffect(()=>{
    //     setTimeout(() => navigation.navigate("Home"), 2000);
    //   })
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.navigate("Home");
    //     }, 3000);
    // })
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View  style={styles.tinyLogo}>
                        <Image
                      style={{width:'100%',height:'100%' }}
                        source={require('../assets/logo.png')}
                        resizeMode='center'
                    />
                  
                    </View>
                      <Image
                        style={styles.header_title}
                        source={require('../assets/ok.png')}
                        resizeMode='contain'
                    />
                    
                    <Image
                        style={styles.map}
                        source={require('../assets/map.png')}
                        resizeMode='stretch'
                    />
                    <Image
                        style={styles.cloud1}
                        source={require('../assets/cloud.png')}
                        resizeMode='stretch'
                    />
                    <Image
                        style={styles.cloud2}
                        source={require('../assets/map3.png')}
                        resizeMode='stretch'
                    />
                    <Image
                        style={styles.group}
                        source={require('../assets/Group1.png')}

                    />
                    <Image
                        style={styles.home}
                        source={require('../assets/home1.png')}

                    />
                    <Text style={{position:'absolute',bottom:0,color:'#4F3018',fontSize:13}}>Welcome !</Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    tinyLogo: {
        position: 'absolute',
        top: '8%',
        left: '39%',
        width:scale(76),height:verticalScale(99) 

    },
    header_title: {
     position:'absolute',
     top:Dimensions.get('window').width < 400 ? verticalScale(155) :verticalScale(130),
     left:Dimensions.get('window').width < 400 ? '40%':'42%'

    },
    map: {
        position: 'absolute',
        top: '35%',
        left: '1%',
        width: '100%'
    },
    group: {
        position: 'absolute',
        top: '26%',
        left: '1%',
        width: '100%'
    },
    home: {
        position: 'absolute',
        top: '67%',
        left: '1%',
        width: '100%'
    },
    cloud1: {
        position: 'absolute',
        top: '18%',
        left: '5%'
    }, cloud2: {
        position: 'absolute',
        top: '5%',
        right: '1%'
    }
});

export default FirstScreen;
// import React, { Component } from 'react';
// import { View,Button ,TouchableOpacity,Text} from 'react-native';


// const FirstScreen =()=> {
//   const loginWithFacebook = () => {
//     LoginManager.logInWithPermissions(["public_profile", "email"]).then(
//       function(result) {
//         if (result.isCancelled) {
//           console.log("==> Login cancelled");
//         } else {
//           console.log(
//             "==> Login success with permissions: " +
//               result.grantedPermissions.toString()
//           );
//         }
//        },
//        function(error) {
//         console.log("==> Login fail with error: " + error);
//        }
//      );
//   }
  
//     return (
//       <View>
      
//       <TouchableOpacity onPress={() => loginWithFacebook()}>
//   <Text> Login With Facebook </Text>          
// </TouchableOpacity>
//       </View>
//     );
  
// };
// export default FirstScreen