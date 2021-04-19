import React, { useState } from 'react';
import { ScrolView, StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ImageBackground, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';

const Login = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState();
  const [text, onChangeText] = React.useState(null);

  return (
    <ImageBackground style={styles.container} source={require('../../assets/b1.png')}>

      <Image style={styles.image} source={require('../../assets/b2.png')} />
      <View style={{
        position: 'absolute',
        top: '5%', left: '37%', zIndex: 100
      }}>
        <Image style={styles.position} source={require('../../assets/logo.png')} />

      </View>
      <Image style={{ position: 'absolute', top: '32%', left: '40%', zIndex: 100 }} source={require('../../assets/ok.png')} />
      <View style={{ position: 'absolute', top: '40%', left: 8, marginHorizontal: 15, width: '89%' }}>
        <Image style={{ position: 'absolute', top: '40%', left: 10, zIndex: 1000 }} source={require('../../assets/flag.png')} />
        <View style={{ position: 'absolute', top: '2%', left: '13%', zIndex: 1000 }}>
          <Picker
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
          </Picker>
        </View>
        <View style={{
          position: 'absolute', top: '20%', left: '44%', zIndex: 1000, width: 1,
          height: 30,
          backgroundColor: 'white'
        }}>
          <Text></Text>
        </View>


        <TextInput keyboardType="numeric" onChangeText={onChangeText} style={{ paddingLeft: 180, borderRadius: 30, width: '100%', borderWidth: 1, zIndex: 100, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />


      </View>

      {
        text && text ?
          <TouchableOpacity onPress={() => navigation.navigate('ConfirmOTP')} style={{ zIndex: 1000, position: 'absolute', top: '45%', left: 10, width: '94%', justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: '#FF5F24', borderRadius: 22, marginTop: 48 }}>
            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>OK</Text>
          </TouchableOpacity>
          : <TouchableOpacity style={{ position: 'absolute', top: '45%', left: 10, width: '94%', opacity: 0.9, justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: '#FF5F24', borderRadius: 22, marginTop: 48 }}>
            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>OK</Text>
          </TouchableOpacity>
      }

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ position: 'absolute', top: '65%', left: 10, width: '95%', justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: '#055EEE', borderRadius: 22, marginTop: 48, flexDirection: 'row', zIndex: 100 }}>
        <Icon name="facebook-square" size={19} color="white" />
        <Text style={{ color: '#FFFFFF', fontSize: 15, paddingLeft: 20 }}>Đăng nhập với Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ position: 'absolute', top: '75%', left: 10, width: '95%', justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: '#055EEE', borderRadius: 22, marginTop: 48, flexDirection: 'row', zIndex: 100 }}>
        <Image style={{
          position: 'absolute', top: 1, left: 1, borderRadius: 14
        }} source={require('../../assets/gg.png')} />
        <Text style={{ color: '#FFFFFF', fontSize: 15, paddingLeft: 20 }}>Đăng nhập với Facebook</Text>
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