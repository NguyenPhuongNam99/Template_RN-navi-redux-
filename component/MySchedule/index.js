import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyScheduleGo from './MyScheduleGo';
import FinishSchedule from './FinishSchedule';
import ScheduleNext from './ScheduleNext'
import {View,Text, SafeAreaView} from 'react-native'
const TabVoucher = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
      <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
          <View style={{backgroundColor:'#FFFFFF',height:50,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#000000',fontWeight:'bold',fontSize:14}}>Lịch trình của tôi</Text>
          </View>
           <Tab.Navigator 
            initialRouteName="Feed"
            
            tabBarOptions={{
                
                activeTintColor:'#FF5F24',
                inactiveTintColor:'#000000',
                indicatorStyle:{
                    backgroundColor:'#FF5F24'
                },
                tabStyle:{
                    backgroundColor:'#E5E5E5',
                    marginBottom:2
                },
                labelStyle:{
                    textTransform:'none',
                    fontWeight:'600',
                    
                }
            
            
}}>
                <Tab.Screen name="Sắp tới" component={ScheduleNext}  />
                <Tab.Screen name="Đang đi" component={MyScheduleGo} />
                <Tab.Screen name="Hoàn thành" component={FinishSchedule} />
            </Tab.Navigator>
      </View>
           
   
    )
}
export default TabVoucher;