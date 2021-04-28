import React, { useState } from 'react';
import { ScrolView, StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ImageBackground, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { AccessToken, LoginManager  } from 'react-native-fbsdk-next';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const Login = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState();
  const [text, onChangeText] = React.useState(null);
  // /(84|0[3|5|7|8|9])+([0-9]{8})\b/
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const [checklogin, setChecklogin] = useState(false);
  const [phone, setPhone] = useState('')

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
  
 const signInok = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setloggedIn( userInfo );
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("==> Login cancelled");
        } else  {
          console.log(
            "==> Login success with permissions: " +
              result.grantedPermissions.toString()
          );
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              console.log(data.accessToken.toString())
            }
          )
          navigation.navigate('TabView')
        }
     
       },
       function(error) {
        console.log("==> Login fail with error: " + error);
       }
     );
  }
  return (
    <ImageBackground style={styles.container} source={require('../../assets/b1.png')}>

      <Image style={styles.image} source={require('../../assets/b2.png')} />
      <View style={{
        position: 'absolute',
        top: '5%', left: '37%', zIndex: 1000
      }}>
        <Image style={styles.position} source={require('../../assets/logo.png')} />
        <Image style={{ zIndex: 1000, marginTop: 10, marginLeft: 15 }} source={require('../../assets/ok.png')} />

      </View>
      <View style={{ position: 'absolute', top: '40%', left: 8, marginHorizontal: 15, width: '89%' }}>
        <Image style={{ position: 'absolute', top: '44%', left: 10, zIndex: 1000 }} source={require('../../assets/flag.png')} />
        <View style={{ position: 'absolute', top: '53%', left: '15%', zIndex: 1000, flexDirection: 'row', alignItems: 'flex-start' }}>
          {/* <Picker
            mode="dropdown"
            style={{
              height: 50,
              width: 120,
              color: 'white',
            }}
            itemStyle={{ backgroundColor: "grey", color: "blue", fontSize: 10 }}

            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="+84" value="+84" />
            <Picker.Item label="+64" value="+64" />
          </Picker> */}
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
            style={{ paddingLeft: '40%', borderRadius: 22, width: '100%', borderWidth: 1, zIndex: 100, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />

        </View>


      </View>

      {
        phone && checklogin ?
          <TouchableOpacity onPress={() => navigation.navigate('ConfirmOTP')} style={{ width: '92%',marginLeft:20,zIndex: 1000, position: 'absolute', top: '45%', justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: '#FF5F24', borderRadius: 22, marginTop: 48 }}>
            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>OK</Text>
          </TouchableOpacity>
          : <TouchableOpacity style={{ position: 'absolute', top: '45%',  width: '92%', opacity: 0.9,marginLeft:12, justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: '#FF5F24', borderRadius: 22, marginTop: 48 }}>
            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>OK</Text>
          </TouchableOpacity>
      }

      <TouchableOpacity onPress={() => loginWithFacebook()} style={{ position: 'absolute', top: '65%', left: 10, width: '95%', justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: '#055EEE', borderRadius: 22, marginTop: 48, flexDirection: 'row', zIndex: 100 }}>
        <Icon name="facebook-square" size={19} color="white" />
        <Text style={{ color: '#FFFFFF', fontSize: 15, paddingLeft: 20 }}>Đăng nhập với Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signInok} style={{ justifyContent: 'space-between', flexDirection: 'row', position: 'absolute', top: '75%', left: 10, width: '95%', justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: '#055EEE', borderRadius: 22, marginTop: 48, flexDirection: 'row', zIndex: 100 }}>
        <View style={{ flex: 1.4 }}>
          <Image style={{
            width: '100%', height: '100%',
            borderRadius: 6
            // position: 'absolute', top: 1, left: 1, borderRadius: 14
          }} source={require('../../assets/gg.png')} />
        </View>
        <View style={{ flex: 8.6 }}>
          <Text style={{ alignSelf: 'center', color: '#FFFFFF', fontSize: 15,position:'absolute',left:'20%',top:'-21%' }}>Đăng nhập với Google</Text>
        </View>
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
    width: 130,
    height: 169
  }
})
export default Login;