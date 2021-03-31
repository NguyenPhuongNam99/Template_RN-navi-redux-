import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../HomeScreen';
import BookScreen from '../BookScreen';
import TestChuyenTab from '../TestChuyenTab';
import Home from '../../component/Home'
import Hotel_Icon from '../../component/Hotel_Icon';
import DestionationPopular from '../../component/DestionationPopular';
const Stack = createStackNavigator();

const Stacknavigation = () => {
  return (
    <Stack.Navigator initialRouteName="DestionationPopular">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BookScreen" component={BookScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Hotel_Icon" component={Hotel_Icon} />
      <Stack.Screen name="DestionationPopular" component={DestionationPopular} />
      {/* <Stack.Screen name="TestChuyenTab" component={TestChuyenTab} /> */}
    </Stack.Navigator>
  );
}

export default  Stacknavigation;