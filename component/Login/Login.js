import React, { useState, useEffect } from 'react';
import { ScrolView, StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ImageBackground, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useSelector, useDispatch } from 'react-redux'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
const Login = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);
  const [selectedValue, setSelectedValue] = useState();
  const [text, onChangeText] = React.useState(null);
  // /(84|0[3|5|7|8|9])+([0-9]{8})\b/
  const [loggedIn, setloggedIn] = useState(false);
  // const [userInfo, setuserInfo] = useState([]);
  const [checklogin, setChecklogin] = useState(false);
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch();
  const validateten = (text1) => {
    let reg = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (reg.test(text1) === false) {
      setPhone(text1)
      setChecklogin(false)
      return false;


    } else {
      setPhone(text1);
      setChecklogin(true)


    }
  }
  useEffect(() => {
    // Initial configuration
    GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      // scopes: [],
      // // Repleace with your webClientId
      // // Generated from Firebase console
      // webClientId: '14036446631-k3k5f8ga4qge67na5dnihrhb8etgijib.apps.googleusercontent.com',
      // offlineAccess:true
    });
    // Check if user is already signed in
    // _isSignedIn();
  }, []);
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
      navigation.navigate('TabNavigation')
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
  const check = () => {
    dispatch({ type: 'ADDLOGIN', valueLogin: phone })
    navigation.navigate('BookScreen')
    console.log('ddda login', phone)
  }


  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      function (result) {
        if (result.isCancelled) {
          console.log("==> Login cancelled");
        } else {
          console.log(
            "==> Login success with permissions: " +
            result.grantedPermissions.toString()
          );
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              console.log(data.accessToken.toString())
            }
          )
          navigation.navigate('TabNavigation')
        }

      },
      function (error) {
        console.log("==> Login fail with error: " + error);
      }
    );
  }
  return (
    <ImageBackground style={styles.container} source={require('../../assets/b1.png')}>

      <Image style={styles.image} source={require('../../assets/b2.png')} />
      <View style={{
        position: 'absolute',
        top: '5%', left: '30%', zIndex: 1000
      }}>
        <View style={styles.positionok}>
          <Image style={{ width: '100%', height: '100%' }} resizeMode='contain' source={require('../../assets/logo.png')} />

        </View>
        <Image style={{ zIndex: 1000, marginTop: 10, marginLeft: 25 }} source={require('../../assets/ok.png')} />

      </View>
      <View style={{ position: 'absolute', top: '40%', left: 0, width: scale(320), height: verticalScale(50), marginHorizontal: 16, justifyContent: 'center' }}>
        <Image style={{ position: 'absolute', top: '44%', left: 10, zIndex: 1000 }} source={require('../../assets/flag.png')} />
        <View style={{ position: 'absolute', top: '53%', left: '15%', zIndex: 1000, flexDirection: 'row', alignItems: 'flex-start' }}>

          <Image source={require('../../assets/Shape.png')} />
          <Text style={{ position: 'absolute', top: -6, left: 25, color: '#FFFFFF' }}>+84</Text>
        </View>
        <View style={{
          position: 'absolute', top: '38%', left: '35%', zIndex: 1000, width: 1,
          height: 30,
          backgroundColor: 'white'
        }}>
          <Text></Text>
        </View>

        <View style={{ paddingTop: 15 }}>
          <TextInput keyboardType="numeric"
            onChangeText={(text1) => validateten(text1)}
            style={{ paddingLeft: '40%', borderRadius: 22, borderWidth: 1, zIndex: 100, backgroundColor: 'rgba(0, 0, 0, 0.5)', height: verticalScale(50) }} />

        </View>


      </View>

      {
        phone && checklogin ?
          <TouchableOpacity onPress={check} style={{ width: scale(320), marginLeft: 20, zIndex: 1000, position: 'absolute', top: '45%', justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: '#FF5F24', borderRadius: 22, marginTop: 48 }}>
            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>OK</Text>
          </TouchableOpacity>
          : <TouchableOpacity style={{ position: 'absolute', top: '45%', width: scale(320), opacity: 0.9, marginLeft: 20, justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: '#FF5F24', borderRadius: 22, marginTop: 48 }}>
            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>OK</Text>
          </TouchableOpacity>
      }

      <TouchableOpacity onPress={() => loginWithFacebook()} style={{ position: 'absolute', top: '65%', left: 0, width: scale(320), marginHorizontal: 16, justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: '#055EEE', borderRadius: 22, marginTop: 48, flexDirection: 'row', zIndex: 100 }}>
        <Icon name="facebook-square" size={19} color="white" />
        <Text style={{ color: '#FFFFFF', fontSize: 15, paddingLeft: 20 }}>Đăng nhập với Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={_signIn} style={{ justifyContent: 'space-between', flexDirection: 'row', position: 'absolute', top: '75%', marginHorizontal: 16, left: 0, width: scale(320), justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: '#055EEE', borderRadius: 22, marginTop: 48, flexDirection: 'row', zIndex: 100 }}>
        <View style={{ flex: 1.4 }}>
          <Image style={{
            width: '100%', height: '100%',
            borderRadius: 6
            // position: 'absolute', top: 1, left: 1, borderRadius: 14
          }} source={require('../../assets/gg.png')} />
        </View>
        <View style={{ flex: 8.6 }}>
          <Text style={{ alignSelf: 'center', color: '#FFFFFF', fontSize: 15, position: 'absolute', left: '20%', top: '-21%' }}>Đăng nhập với Google</Text>
        </View>
        {/* <GoogleSigninButton
                style={{width: 312, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
               
              /> */}
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
  positionok: {
    width: scale(132),
    height: verticalScale(170)
  }
})
export default Login;