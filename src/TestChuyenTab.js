import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import BookScreen from './BookScreen';
import HomeScreen from './HomeScreen';
const TestChuyenTab = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Tab.Navigator  tabBarOptions={{
                      activeTintColor: '#822FFB',
                      labelStyle: { fontSize: 15, fontWeight: '400' },
                      style: { backgroundColor: 'black',marginHorizontal: 12 , marginTop: 18,  activeBackgroundColor:'rgba(139, 59, 255, 0.15)',},
                     
                    }}>
                <Tab.Screen name="BookScreen" component={BookScreen} options={{tabBarLabel: 'BookScreen'}} />
                <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarLabel: 'Đã sử dụng'}}/>
            </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor:'black'
  },
});

export default TestChuyenTab;