/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ProductOverview from './screen/shop/ProductOverview';
import Hello from './screen/shop/user/Hello';
import SlideImage from './src/SlideImage';
import QRCODE from './src/QRCODE';
import Phonecall from './screen/shop/user/Phonecall';
import OrderScreen from './screen/shop/OrderScreen';
import Blur from './screen/shop/Blur'
import UpdateProfile from './src/UpdateProfile'
import Home from './src/Home';
import FirstScreen from './component/FirstScreen';
import SecondScreen from './component/SecondScreen';
import ConfirmOTP from './component/ConfirmOTP'

AppRegistry.registerComponent(appName, () => ConfirmOTP);
