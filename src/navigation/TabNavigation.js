import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// import HomeScreen from '../HomeScreen';
// import TestChuyenTab from '../TestChuyenTab';
import Stacknavigation from '../navigation/Stacknavigation';
import Home from '../../component/Home'
import ScheduleHeader from '../../component/ScheduleHeader'
import Hotel_Icon from '../../component/Hotel_Icon'
// import MultipleDetail from '../../component/MultipleDetail'
import UpdateProfile from '../../component/UpdateProfile'
import TabView from '../../component/TabView'
import DestionationPopular from '../../component/DestionationPopular'
import Destination12 from '../../component/Destionation12'
import TabVoucher from '../../component/MySchedule/index'
import Tab1 from '../../component/MySchedule/Tab1'
import Counbt from '../../component/Counbt'
import Profile from '../../component/Profile/Profile'
// import {App1,App2} from '../../src/navigation/Stacknavigation'
// import App2 from '../../src/navigation/Stacknavigation'
import Notification from '../../component/Notification'
import App1 from '../../src/navigation/Stacknavigation'
const hello = () => {
  return null
}
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
   
      <Tab.Navigator
    
       tabBarOptions={{
        showLabel:false,
        activeTintColor: 'green',
        inactiveTintColor: 'lightgray',
        
        // activeBackgroundColor: '#c4461c',
      }}>
        <Tab.Screen name="Home"
        
        options={{
          tabBarIcon:({focused})=> focused ? <Image source={require('../../assets/ac.png')}/>   :    <Icon name="search" size={19} color="#9A9A9A" />
        
        }} 
        component={Home}
        />
      
        <Tab.Screen name="TabVoucher3"
         options={{
          tabBarIcon:({focused})=> focused ? <Image source={require('../../assets/ac1.png')} /> :     <Image source={require('../../assets/ac46.png')} />
        }}
        component={TabVoucher} />
         <Tab.Screen name="Botton5" component={hello}  options ={{tabBarOnPress: () => {} ,tabBarIcon : () =>   <TabView/>, tabBarLabel: 'ghgh'}} />
       
        <Tab.Screen name="Notification" 
         options={{
          tabBarIcon:({focused})=>focused ? <Image source={require('../../assets/ac4.png')} /> : <Image source={require('../../assets/chuong.png')} />
        }}
        component={Notification} />
        <Tab.Screen name="Profile"
          options={{
            tabBarIcon:({focused})=>focused ? <Image source={require('../../assets/ac3.png')} /> : <Image source={require('../../assets/ac45.png')} />
          }}
        component={Profile} />

      </Tab.Navigator>
    
  );
}