// import React from "react";
// import { View, Button, Text, StyleSheet } from "react-native";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();
// import BookScreen from './BookScreen';
// import HomeScreen from './HomeScreen';
// const TestChuyenTab = ({navigation}) => {
//   return (
//     <View style={styles.center}>
//       <Text>This is the home screen</Text>
//       <Tab.Navigator  tabBarOptions={{
//                       activeTintColor: '#822FFB',
//                       labelStyle: { fontSize: 15, fontWeight: '400' },
//                       style: { backgroundColor: 'black',marginHorizontal: 12 , marginTop: 18,  activeBackgroundColor:'rgba(139, 59, 255, 0.15)',},
                     
//                     }}>
//                 <Tab.Screen name="BookScreen" component={BookScreen} options={{tabBarLabel: 'BookScreen'}} />
//                 <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarLabel: 'Đã sử dụng'}}/>
//             </Tab.Navigator>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     backgroundColor:'black'
//   },
// });

// export default TestChuyenTab;

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class TestChuyenTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2017, 6, 3);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>SELECTED START DATE:{ startDate }</Text>
          <Text>SELECTED END DATE:{ endDate }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});