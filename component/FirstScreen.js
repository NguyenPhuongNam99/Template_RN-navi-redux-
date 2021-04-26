
// import React , { useEffect }from 'react';

// import {
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     useColorScheme,
//     View,
//     Image
// } from 'react-native';

// const FirstScreen = ({navigation}) => {
   
//     //   useEffect(()=>{
//     //     setTimeout(() => navigation.navigate("Home"), 2000);
//     //   })
//     // useEffect(() => {
//     //     setTimeout(() => {
//     //         navigation.navigate("Home");
//     //     }, 3000);
//     // })

//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.container}>
//                 <View style={styles.header}>
//                     <View  style={styles.tinyLogo}>
//                         <Image
                      
//                         source={require('../assets/logo.png')}
//                         resizeMode='center'
//                     />
//                     <Image
//                         style={styles.header_title}
//                         source={require('../assets/ok.png')}
//                         resizeMode='contain'
//                     />
//                     </View>
                    
                    
//                     <Image
//                         style={styles.map}
//                         source={require('../assets/map.png')}
//                         resizeMode='stretch'
//                     />
//                     <Image
//                         style={styles.cloud1}
//                         source={require('../assets/cloud.png')}
//                         resizeMode='stretch'
//                     />
//                     <Image
//                         style={styles.cloud2}
//                         source={require('../assets/map3.png')}
//                         resizeMode='stretch'
//                     />
//                     <Image
//                         style={styles.group}
//                         source={require('../assets/Group1.png')}

//                     />
//                     <Image
//                         style={styles.home}
//                         source={require('../assets/home1.png')}

//                     />
//                     <Text style={{position:'absolute',bottom:0,color:'#4F3018',fontSize:13}}>Welcome !</Text>
//                 </View>

//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     header: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'relative'
//     },
//     tinyLogo: {
//         position: 'absolute',
//         top: '-4%',
//         left: '35%',
//         width: '80%'

//     },
//     header_title: {
//      position:'absolute',
//      top:'83%',
//      left:'10%'

//     },
//     map: {
//         position: 'absolute',
//         top: '35%',
//         left: '1%',
//         width: '100%'
//     },
//     group: {
//         position: 'absolute',
//         top: '26%',
//         left: '1%',
//         width: '100%'
//     },
//     home: {
//         position: 'absolute',
//         top: '67%',
//         left: '1%',
//         width: '100%'
//     },
//     cloud1: {
//         position: 'absolute',
//         top: '18%',
//         left: '5%'
//     }, cloud2: {
//         position: 'absolute',
//         top: '5%',
//         right: '1%'
//     }
// });

// export default FirstScreen;
import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';

export default class FirstScreen extends Component {
  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
    );
  }
};