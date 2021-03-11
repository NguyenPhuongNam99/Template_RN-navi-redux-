import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../HomeScreen';
import TestChuyenTab from '../TestChuyenTab';
import Stacknavigation from '../navigation/Stacknavigation';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
   
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Stacknavigation} />
        <Tab.Screen name="Settings" component={TestChuyenTab} />
      </Tab.Navigator>
    
  );
}