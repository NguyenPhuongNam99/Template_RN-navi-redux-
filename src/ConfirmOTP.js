import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
 
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
 
const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
        height: 40,
        borderRadius: 8,
        borderColor: '#272738', 
        borderWidth: 1,
        color:'red',
        textAlign: 'center',
        fontSize:20,
        padding:6
  },
  focusCell: {
    borderColor: '#000',
  },
});
 
const CELL_COUNT = 6;
 
const ConfirmOTP = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
 
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
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