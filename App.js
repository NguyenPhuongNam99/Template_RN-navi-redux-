import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stacknavigation from './src/navigation/Stacknavigation';
import Tabviewmain from './navigation/Tabviewmain';
const App =()=>{
  return(
    <NavigationContainer>
      <Tabviewmain />
    </NavigationContainer>
   
  )
}
export default App
