import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import TestChuyenTab from './TestChuyenTab';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button title="Go to About Screen" onPress={()=>navigation.navigate('TestChuyenTab')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor:'black'
  },
});

export default HomeScreen;