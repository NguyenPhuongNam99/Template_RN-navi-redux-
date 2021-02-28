import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../HomeScreen';
import BookScreen from '../BookScreen';

const Stack = createStackNavigator();

const Stacknavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BookScreen" component={BookScreen} />
    </Stack.Navigator>
  );
}

export default  Stacknavigation;