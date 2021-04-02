import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// import HomeScreen from '../HomeScreen';
// import TestChuyenTab from '../TestChuyenTab';
// import Stacknavigation from '../navigation/Stacknavigation';
import Home from '../../component/Home'
import ScheduleHeader from '../../component/ScheduleHeader'
import Hotel_Icon from '../../component/Hotel_Icon'
// import MultipleDetail from '../../component/MultipleDetail'
import UpdateProfile from '../../component/UpdateProfile'
import TabView from '../../component/TabView'
import DestionationPopular from '../../component/DestionationPopular'
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
   
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon:()=><Icon name="search" size={19} color="#9A9A9A" />
        }}
        />
        <Tab.Screen name="ScheduleHeader"
         options={{
          tabBarIcon:()=><Icon name="briefcase" size={19} color="#9A9A9A" />
        }}
        component={ScheduleHeader} />
        
        <Tab.Screen name="DestionationPopular"
        //  options={{
        //   tabBarIcon: <TabView />
        
        // }}

        options ={{tabBarOnPress: () => {} ,tabBarIcon : () =>   <TabView/>, tabBarLabel: ''}}
        component={DestionationPopular} />

        <Tab.Screen name="Hotel_Icon" 
         options={{
          tabBarIcon:()=><Icon name="bell" size={19} color="#9A9A9A" />
        }}
        component={Hotel_Icon} />
        <Tab.Screen name="UpdateProfile"
          options={{
            tabBarIcon:()=><Icon name="user" size={19} color="#9A9A9A" />
          }}
        component={UpdateProfile} />

      </Tab.Navigator>
    
  );
}