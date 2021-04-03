/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import ProductOverview from './screen/shop/ProductOverview';
// import Hello from './screen/shop/user/Hello';
// // import SlideImage from './src/SlideImage';
// import Phonecall from './screen/shop/user/Phonecall';
// import OrderScreen from './screen/shop/OrderScreen';
// import Blur from './screen/shop/Blur'
// import UpdateProfile from './src/UpdateProfile'
// import Home from './src/Home';
// import FirstScreen from './component/FirstScreen';
// import SecondScreen from './component/SecondScreen';
import ConfirmOTP from './component/ConfirmOTP'
import Home from './component/Home'
import HomeScreen from './src/HomeScreen'
import Stacknavigation from './src/navigation/Stacknavigation'
import ScheduleHeader from './component/ScheduleHeader'
import Re from './component/Re';
import Viewok from './component/Viewok'
import Destionation12 from './component/Destionation12'
import DetailDiscount from './component/DetailDiscount'
import ScheduleAll from './component/ScheduleAll'
import LocationPopular from './component/LocationPopular/LocationPopular'
AppRegistry.registerComponent(appName, () => LocationPopular);
