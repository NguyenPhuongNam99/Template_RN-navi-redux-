import React, {  useRef, useState,useEffect } from "react";
import { Alert, SafeAreaView, StyleSheet, TextInput, View ,Text,LogBox} from "react-native";
import { set } from "react-native-reanimated";

const BookScreen = ({navigation}) => {
  const [pin1, setPin1] = React.useState("");
  const [pin2, setPin2] = React.useState("");
  const [pin3, setPin3] = React.useState("");
  const [pin4, setPin4] = React.useState("");
  const [count,setCount] = useState(30);
  const [setRight1,setSetRight1]= useState(false)
  const [setRight2,setSetRight2]= useState(false)
  const [setRight3,setSetRight3]= useState(false)
  const [setRight4,setSetRight4]= useState(false)
  const inputRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  LogBox.ignoreAllLogs();
  useEffect(()=>{
    setTimeout(function(){
      if(count >0){
        setCount(count -1) 
      }
      if(count ==0 && setRight4 == false){
        Alert.alert(
          "Thời gian OTP nhập kết thúc.",
          "",
          [
            
            { text: " Gửi lại", onPress: () =>  setCount(10) }
          ]
        );
      
       
      }
    }, 1000)
  })
  
  return (
    <SafeAreaView>
      <View style={{flex:1}}>
        <View style={{marginHorizontal:40,marginTop:100,marginBottom:60,justifyContent:'center'}}>
          <Text style={{color:'#1E2432',fontSize:14}}>Vui lòng nhập mã OTP vừa được gửi vào số điện thoại của bạn</Text>
       
        </View>

      
      <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <TextInput
          style={[styles.input,{borderBottomColor:setRight1? '#FF5F24' : '#D8D8D8'}]}
          ref={inputRef1}
          onChange={(e) => {
            if (e.nativeEvent.text !== '') {
              inputRef2.current.focus()
             
              setSetRight1(true)
            }
          }}
          autoFocus={true}
          onFocus={()=>setSetRight1(true)}
          value={pin1}
          onChangeText={(text) => setPin1(text)}
          maxLength={1}
          keyboardType={"numeric"}
          placeholder=''
          placeholderTextColor='green'
        />
        <TextInput
          onChangeText={(val) => {
            setPin2(val)
           
          }}
          onChange={(e) => {
            if (e.nativeEvent.text !== '') {
              inputRef3.current.focus()
              setSetRight2(true)
              setSetRight1(false)
            }
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key = 'Backspace') {
                inputRef1.current.focus();
                setSetRight2(false)
                setSetRight1(true)
            }
            setPin2('')
        }}
          ref={inputRef2}
          maxLength={1}
          style={[styles.input,{borderBottomColor:setRight2? '#FF5F24' : '#D8D8D8'}]}
          onChangeText={setPin2}
          value={pin2}
          keyboardType={"numeric"}
        />
        <TextInput
          style={[styles.input,{borderBottomColor:setRight3? '#FF5F24' : '#D8D8D8'}]}
          ref={inputRef3}
          maxLength={1}
          onChangeText={(val) => {
            setPin3(val)
         
          }}
          onChange={(e) => {
            if (e.nativeEvent.text !== '') {
              inputRef4.current.focus()  
              setSetRight3(true)
           setSetRight2(false)
            }
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key = 'Backspace') {
                inputRef2.current.focus();
                setSetRight3(false)
                setSetRight2(true)
            }
            setPin3('')
        }}
          onChangeText={setPin3}
          value={pin3}
          keyboardType={"numeric"}
        />
        <TextInput
          style={[styles.input,{borderBottomColor:setRight4? '#FF5F24' : '#D8D8D8'}]}
          ref={inputRef4}
          onChange={(e) => {
            if (e.nativeEvent.text !== '') {
                  navigation.navigate('UpdateProfile')
                  setSetRight4(true)
                setSetRight3(false)
            }
         
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key = 'Backspace') {
                inputRef3.current.focus();
                setSetRight4(false)
                setSetRight3(true)
            }
            setPin4('')
        }}
          onChangeText={setPin4}
          value={pin4}
          keyboardType={"numeric"}
          maxLength={1}
        />
      </View>
      <View style={{marginTop:40,justifyContent:'center',alignItems:'center'}}>
         <Text style={{color:'#F26230',fontSize:12}}>Gửi lại ({count}s)</Text>
      </View>
     
      </View>
      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,

    borderBottomWidth: 4,
    width: '10%',
    marginHorizontal: 10,
    textAlign: 'center',
    borderBottomRightRadius:2,
    borderBottomLeftRadius:2,
    borderBottomStartRadius:2,
    borderBottomEndRadius:2,
    fontSize:17,
    color:'#1E2432',
    fontWeight:'900'
  },
});

export default BookScreen;