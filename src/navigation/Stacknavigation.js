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
import Profile from '../../component/Profile/Profile';
import Favourite from '../../component/Profile/Favourite'
import Setting from '../../component/Profile/Setting'
import PolycySetting from '../../component/Profile/PolycySetting'
import LocationDetail2 from '../../component/LocationPopular/LocationDetail2'
import TermOfUse from '../../component/Profile/TermOfUse'
import MyProfile from '../../component/Profile/MyProfile'
import LocationPopular from '../../component/LocationPopular/LocationPopular'
import HotelResort_Header from '../../component/LocationPopular/HotelResort_Header'
import Follow from '../../component/Profile/Follow'
import SelectRoom_Header from '../../component/LocationPopular/SelectRoom_Header'
import Hotel from '../../component/LocationPopular/Hotel'
import ReverseRoom from '../../component/LocationPopular/ReverseRoom'
import UpdateInfo from '../../component/Profile/UpdateInfo'
import FirstScreen from '../../component/FirstScreen'
import UpdateProfile from '../UpdateProfile'
import EvaluationSchedule from '../../component/SelectSchedule.js/EvaluationSchedule'
import SelectSchedule from '../../component/SelectSchedule.js/SelectSchedule'
import CreateSchedule from '../../component/CteateSchedule/CreateSchedule';
import Location from '../../component/CteateSchedule/Location'
import ScreenSuggest from '../../component/ScreenSuggest/ScreenSuggest'
import ScreenInterested from '../../component/ScreenSuggest/ScreenInterested'
import AllShedule from '../../component/AllSchedule/AllShedule'
import OverView from '../../component/AllSchedule/OverView'
const Stack = createStackNavigator();

const App1 = () => {
  return (
   
    <Stack.Navigator >
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      {/* <Stack.Screen name="BookScreen" component={BookScreen} /> */}
      {/* <Stack.Screen name="FirstScreen" component={FirstScreen}  options={{headerShown: false}}/> */}
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
      <Stack.Screen name="LocationDetail2" component={LocationDetail2}  options={{headerShown: false}}/>
      <Stack.Screen name="LocationPopular" component={LocationPopular}  options={{headerShown: false}}/>
      <Stack.Screen name="HotelResort_Header" component={HotelResort_Header}  options={{headerShown: false}}/>
      <Stack.Screen name="SelectRoom_Header" component={SelectRoom_Header}  options={{headerShown: false}}/>
      <Stack.Screen name="Hotel" component={Hotel}  options={{headerShown: false}}/>
      <Stack.Screen name="ReverseRoom" component={ReverseRoom}  options={{headerShown: false}}/>
      <Stack.Screen name="UpdateProfile" component={UpdateProfile}  options={{headerShown: false}}/>
      <Stack.Screen name="EvaluationSchedule" component={EvaluationSchedule}  options={{headerShown: false}}/>
      <Stack.Screen name="SelectSchedule" component={SelectSchedule}  options={{headerShown: false}}/>
      <Stack.Screen name="CreateSchedule" component={CreateSchedule}  options={{headerShown: false}}/>
      <Stack.Screen name="ScreenSuggest" component={ScreenSuggest}  options={{headerShown: false}}/>
      <Stack.Screen name="Location" component={Location}  options={{headerShown: false}}/>
      <Stack.Screen name="ScreenInterested" component={ScreenInterested}  options={{headerShown: false}}/>
      <Stack.Screen name="AllShedule" component={AllShedule}  options={{headerShown: false}}/>
      <Stack.Screen name="OverView" component={OverView}  options={{headerShown: false}}/>

    </Stack.Navigator>
    
    
  );
}

const App2 =()=>{
  return(
    <Stack.Navigator >
      <Stack.Screen name="Profile" component={Profile}  options={{headerShown: false}} />
      <Stack.Screen name="Favourite" component={Favourite}  options={{headerShown: false}}/>
      <Stack.Screen name="Setting" component={Setting}  options={{headerShown: false}}/>
      <Stack.Screen name="PolycySetting" component={PolycySetting}  options={{headerShown: false}}/>
      <Stack.Screen name="TermOfUse" component={TermOfUse}  options={{headerShown: false}}/>
      <Stack.Screen name="MyProfile" component={MyProfile}  options={{headerShown: false}}/>
      <Stack.Screen name="Follow" component={Follow}  options={{headerShown: false}}/>
      <Stack.Screen name="UpdateInfo" component={UpdateInfo}  options={{headerShown: false}}/>
      {/* <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
      <Stack.Screen name="DiscountHeader" component={DiscountHeader}  options={{headerShown: false}}/> */}
      
    </Stack.Navigator>
    
  )
}
export  {App1,App2};