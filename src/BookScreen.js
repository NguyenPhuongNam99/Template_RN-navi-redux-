import React, { useEffect, useRef, useState } from "react";
import { Alert, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { set } from "react-native-reanimated";

const BookScreen = () => {
  const [pin1, setPin1] = React.useState("");
  const [pin2, setPin2] = React.useState("");
  const [pin3, setPin3] = React.useState("");
  const [pin4, setPin4] = React.useState("");
  const [setmau,setSetmau] = useState('blue');
  const [setRight,setSetRight]= useState(false)
  const inputRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <TextInput
          style={[styles.input,{borderBottomColor:!setRight? 'orange' : 'blue'}]}
          ref={inputRef1}
          onChange={(e) => {
            if (e.nativeEvent.text !== '') {
              inputRef2.current.focus()
              setSetmau('orange')
             
            }
          }}
          autoFocus={true}
          onFocus={()=>setSetRight(true)}
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
            }
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key = 'Backspace') {
                inputRef1.current.focus();
            }
            setPin2('')
        }}
          ref={inputRef2}
          maxLength={1}
          style={styles.input}
          onChangeText={setPin2}
          value={pin2}
          keyboardType={"numeric"}
        />
        <TextInput
          style={styles.input}
          ref={inputRef3}
          maxLength={1}
          onChangeText={(val) => {
            setPin3(val)
           
          }}
          onChange={(e) => {
            if (e.nativeEvent.text !== '') {
              inputRef4.current.focus()
            }
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key = 'Backspace') {
                inputRef2.current.focus();
            }
            setPin3('')
        }}
          onChangeText={setPin3}
          value={pin3}
          keyboardType={"numeric"}
        />
        <TextInput
          style={styles.input}
          ref={inputRef4}
          onChange={(e) => {
            if (e.nativeEvent.text !== '') {
                  Alert.alert('ok')
            }
         
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key = 'Backspace') {
                inputRef3.current.focus();
            }
            setPin4('')
        }}
          onChangeText={setPin4}
          value={pin4}
          keyboardType={"numeric"}
          maxLength={1}
        />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,

    borderBottomWidth: 1,
    width: '10%',
    marginHorizontal: 10,
    textAlign: 'center'
  },
});

export default BookScreen;