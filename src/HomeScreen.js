// import React from "react";
// import { View, Button, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from "react-native";

// import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// import { data } from '../Data/HomeData'
// const HomeScreen = () => {
//   const Item = ({ item }) => {
//     return (
//       <TouchableOpacity >
//         <View style={{ flexDirection: 'column', paddingHorizontal: 23, paddingTop: 29 }}>

//           <Image style={{ width: 35, height: 35 }} source={item.img} />


//           <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '500', lineHeight: 14 }}>Hotel</Text>
//         </View>
//       </TouchableOpacity>

//     )
//   }
//   return (
//     <View style={styles.center}>
//       <View style={styles.top}>
//         <Image style={{ width: '100%', height: '100%' }} source={require('../assets/a.png')} />
//         <View style={{ position: 'absolute', top: verticalScale(20), paddingHorizontal: moderateScale(15) }}>
//           <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Khám Phá</Text>
//           <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'normal' }}>Lên lịch trình, đặt vé máy bay, khách sạn, tìm kiếm
//           các tour lịch và các hoạt động vui chơi giải trí
//           </Text>
//         </View>
//         <View style={{ position: 'absolute', top: verticalScale(80), }}>
//           <FlatList
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             data={data}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) =>
//               <Item item={item} />
//             }
//           />
        
         

        

//         </View>
//         <View style={{position:'absolute',bottom:verticalScale(-21),width:'100%'}}>
//           <TextInput
//               style={styles.input}
//               placeholder='Bạn muốn đi đâu ?'
//               placeholderTextColor='#B6B6B6'

//             />
//             <Image style={{ position: 'absolute', top: 10, left: 10, zIndex: 100 }} source={require('../assets/search.png')} />
//           </View>
          

//       </View>



//       {/* <View style={styles.block}>
//         <View style={styles.child}>
//           <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../assets/anh2.jpg')} />
//         </View>
//         <View style={styles.child}>
//           <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../assets/anh2.jpg')} />
//         </View>
//         <View style={styles.child}>
//           <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../assets/anh2.jpg')} />
//         </View>
//       </View> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,


//   },
//   top: {
//     height: verticalScale(213),
//     backgroundColor: 'green'
//   },
//   block: {
//     height: verticalScale(104),
//     marginTop: verticalScale(50),
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',

//   },
//   child: {
//     height: verticalScale(104),
//     backgroundColor: 'orange',
//     width: scale(104)
//   },
//   input: {
//       height: 40,
//       // width:358,
//       marginTop: 7,
//       borderWidth: 1,
//       backgroundColor: '#F7F7F7',
//       borderColor: '#F7F7F7',
//       borderRadius: 5,
//       shadowColor: "rgba(140, 178, 236, 0.3)",
//       shadowOffset: {
//           width: 0,
//           height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       fontSize: 12,
//       elevation: 10,
//       marginHorizontal:10
//   },
// });

// export default HomeScreen;



// import MapView ,{PROVIDER_GOOGLE } from 'react-native-maps'
// import React from "react";
// import { View,StyleSheet } from "react-native";

// const HomeScreen =()=>{
//   return(
//     <View style={styles.container}>
//      <MapView
//        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//        style={styles.map}
//        region={{
//          latitude: 37.78825,
//          longitude: -122.4324,
//          latitudeDelta: 0.015,
//          longitudeDelta: 0.0121,
//        }}
//      >
//      </MapView>
//    </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//   flex:1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// })
// export default HomeScreen



// import MapView ,{PROVIDER_GOOGLE } from 'react-native-maps'
// import React from "react";
// import { View,StyleSheet } from "react-native";
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
// const HomeScreen =()=>{
//   const signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       this.setState({ userInfo });
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (e.g. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//       } else {
//         // some other error happened
//       }
//     }
//   };
//   const isSignedIn = async () => {
//     const isSignedIn = await GoogleSignin.isSignedIn();
//     this.setState({ isLoginScreenPresented: !isSignedIn });
//   };
//   return(
//     <View style={styles.container}>
//         <GoogleSigninButton
//     style={{ width: 192, height: 48 }}
//     size={GoogleSigninButton.Size.Wide}
//     color={GoogleSigninButton.Color.Dark}
//     onPress={signIn}
//     />
//    </View>
//   )
// }
// const styles = StyleSheet.create({
//   container:{
//     flex:1
//   }
// })
// export default HomeScreen



// Example of Google Sign In in React Native Android and iOS App
// https://aboutreact.com/example-of-google-sign-in-in-react-native/

// Import React in our code
import React, {useState, useEffect} from 'react';

// Import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

// Import Google Signin
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
const HomeScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);

  useEffect(() => {
    // Initial configuration
    GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      scopes: [],
      // Repleace with your webClientId
      // Generated from Firebase console
      webClientId: '14036446631-da7qus8k46shnqb8ghi4tk7s3fulag29.apps.googleusercontent.com',
      offlineAccess:true
    });
    // Check if user is already signed in
    _isSignedIn();
  }, []);

  const _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      alert('User is already signed in');
      // Set User Info if user is already signed in
      _getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
    setGettingLoginStatus(false);
  };

  const _getCurrentUserInfo = async () => {
    try {
      let info = await GoogleSignin.signInSilently();
      console.log('User Info --> ', info);
      setUserInfo(info);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Unable to get user's info");
        console.log("Unable to get user's info");
      }
    }
  };

  const _signIn = async () => {
    // It will prompt google Signin Widget
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      setUserInfo(userInfo);
    } catch (error) {
      console.log('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (
          error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
        ) {
        alert('Play Services Not Available or Outdated');
      } else {
        alert(error.message);
      }
    }
  };

  const _signOut = async () => {
    setGettingLoginStatus(true);
    // Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // Removing user Info
      setUserInfo(null); 
    } catch (error) {
      console.error(error);
    }
    setGettingLoginStatus(false);
  };

  if (gettingLoginStatus) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.titleText}>
            Example of Google Sign In in React Native
          </Text>
          <View style={styles.container}>
            {userInfo !== null ? (
              <>
                <Image
                  source={{uri: userInfo.user.photo}}
                  style={styles.imageStyle}
                />
                <Text style={styles.text}>
                  Name: {userInfo.user.name}
                </Text>
                <Text style={styles.text}>
                  Email: {userInfo.user.email}
                </Text>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={_signOut}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              </>
            ) : (
              <GoogleSigninButton
                style={{width: 312, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={_signIn}
              />
            )}
          </View>
          <Text style={styles.footerHeading}>
            Google SignIn in React Native
          </Text>
          <Text style={styles.footerText}>
            www.aboutreact.com
          </Text>
        </View>
      </SafeAreaView>
    );
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  imageStyle: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 30,
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});