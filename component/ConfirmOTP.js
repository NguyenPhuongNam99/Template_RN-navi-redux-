import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
 
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
// import OTPInputView from '@twotalltotems/react-native-otp-input'

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20,backgroundColor:'#E5E5E5'},
  title: {textAlign: 'center', fontSize: 16,marginTop: 134,fontFamily:'Roboto-Black'},
  codeFieldRoot: {marginTop: 20,marginBottom:20,marginHorizontal:80},
  cell: {
    width: 40,
        height: 55,
      
        // borderRadius: 8,
        // borderColor: '#272738', 
        // borderWidth: 1,
        borderBottomWidth:7,
        color:'#1E2432',
        textAlign: 'center',
        fontSize:36,
       alignItems:'center',justifyContent:'center', 
      borderColor: '#D8D8D8',
      

  },
  focusCell: {
    borderColor: '#FF5F24',
  
  },
});
 
const CELL_COUNT = 4;
 
const ConfirmOTP = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
 
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Vui lòng nhập mã OTP vừa được gửi vào số điện thoại của bạn </Text>
      

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode" 
        placeholderTextColor='red'
        placeholder='hello'
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}> 
            {symbol || (isFocused ? <Cursor /> : null)} 
          </Text>
        )}
      />
    </SafeAreaView>
  );
};
 
export default ConfirmOTP;




