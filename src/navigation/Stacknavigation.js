import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../HomeScreen';
import BookScreen from '../BookScreen';
import TestChuyenTab from '../TestChuyenTab';
const Stack = createStackNavigator();

const Stacknavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BookScreen" component={BookScreen} />
      {/* <Stack.Screen name="TestChuyenTab" component={TestChuyenTab} /> */}
    </Stack.Navigator>
  );
}

export default  Stacknavigation;