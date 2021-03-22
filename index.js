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
AppRegistry.registerComponent(appName, () => OrderScreen);
