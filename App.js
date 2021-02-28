import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stacknavigation from './src/navigation/Stacknavigation';

const App =()=>{
  return(
    <NavigationContainer>
      <Stacknavigation />
    </NavigationContainer>
   
  )
}
export default App
