import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stacknavigation from './src/navigation/Stacknavigation';
import TabNavigation from './src/navigation/TabNavigation';
const App =()=>{
  return(
    <NavigationContainer>
      {/* <Stacknavigation /> */}
      <TabNavigation />
    </NavigationContainer>
   
  )
}
export default App
