// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from '../HomeScreen';
// import BookScreen from '../BookScreen';
// import TestChuyenTab from '../TestChuyenTab';
// import Home from '../../component/Home'
// import Hotel_Icon from '../../component/Hotel_Icon';
// import DestionationPopular from '../../component/DestionationPopular';
// const Stack = createStackNavigator();

// const Stacknavigation = () => {
//   return (
//     <Stack.Navigator initialRouteName="DestionationPopular">
//       <Stack.Screen name="HomeScreen" component={HomeScreen} />
//       <Stack.Screen name="BookScreen" component={BookScreen} />
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Hotel_Icon" component={Hotel_Icon} />
//       <Stack.Screen name="DestionationPopular" component={DestionationPopular} />
//       {/* <Stack.Screen name="TestChuyenTab" component={TestChuyenTab} /> */}
//     </Stack.Navigator>
//   );
// }

// export default  Stacknavigation;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from './src/HomeScreen'
// import BookScreen from './src/BookScreen'
import { NavigationContainer } from '@react-navigation/native';

// import TestChuyenTab from '../TestChuyenTab';
// import Home from '../../component/Home'
import Home from '../../component/Home';
import Hotel_Icon from '../../component/Hotel_Icon'
import RestaurantIcon from '../../component/RestaurantIcon';
import DiscountHeader from '../../component/DiscountHeader'
import ScheduleHeader from '../../component/ScheduleHeader';
import DestionationPopular from '../../component/DestionationPopular'
import Responsive from '../../component/Responsive';
import Destionation12 from '../../component/Destionation12'
import DetailDiscount from '../../component/DetailDiscount'
import LocationDetail from '../../component/LocationPopular/LocationDetail'
import Destionation12_Head from '../../component/LocationPopular/Destionation12_Head'
import RestaurantDetail from '../../component/LocationPopular/RestaurantDetail'
import MultipleDetail from '../../component/MultipleDetail'
const Stack = createStackNavigator();

const App = () => {
  return (
   
    <Stack.Navigator initialRouteName="Home">
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      {/* <Stack.Screen name="BookScreen" component={BookScreen} /> */}
      <Stack.Screen name="Home" component={Home}  options={{headerShown: false}} />
      <Stack.Screen name="Hotel_Icon" component={Hotel_Icon}  options={{headerShown: false}}/>
      <Stack.Screen name="RestaurantIcon" component={RestaurantIcon}  options={{headerShown: false}}/>
      <Stack.Screen name="DiscountHeader" component={DiscountHeader}  options={{headerShown: false}}/>
      <Stack.Screen name="ScheduleHeader" component={ScheduleHeader}  options={{headerShown: false}}/>
      <Stack.Screen name="DestionationPopular" component={DestionationPopular}  options={{headerShown: false}}/>
      <Stack.Screen name="Responsive" component={Responsive}  options={{headerShown: false}}/>
      <Stack.Screen name="Destionation12" component={Destionation12}  options={{headerShown: false}}/>
      <Stack.Screen name="DetailDiscount" component={DetailDiscount}  options={{headerShown: false}}/>
      <Stack.Screen name="LocationDetail" component={LocationDetail}  options={{headerShown: false}}/>
      <Stack.Screen name="Destionation12_Head" component={LocationDetail}  options={{headerShown: false}}/>
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail}  options={{headerShown: false}}/>
      <Stack.Screen name="MultipleDetail" component={MultipleDetail}  options={{headerShown: false}}/>


      
    </Stack.Navigator>
    
  );
}

export default  App;