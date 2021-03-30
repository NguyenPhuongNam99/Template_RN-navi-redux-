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
import ConfirmOTP from './src/ConfirmOTP'
import UpdateProfile from './src/UpdateProfile'
import Home from './src/Home';
AppRegistry.registerComponent(appName, () => Home);
