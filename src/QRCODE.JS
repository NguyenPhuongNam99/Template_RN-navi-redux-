// // import React from "react";
// // import {
// //     View,
// //     Text,
// //     StyleSheet,
// //     TouchableOpacity
// // } from "react-native";
// // import { NavigationContainer } from "@react-navigation/native";
// // import Stacknavigation from './src/navigation/Stacknavigation';
// // import Tabviewmain from './navigation/Tabviewmain';
// // const App =()=>{
// //   return(
// //     //Aniomation Bottom Tab
// //     // <NavigationContainer>
// //     //   <Tabviewmain />
// //     // </NavigationContainer>
// //     <View>
// //       <Text>Hello</Text>
// //     </View>

// //   )
// // }
// // export default App
// import * as React from 'react';
// import { useState } from 'react';
// import {
//   StatusBar,
//   FlatList,
//   Image,
//   Animated,
//   Text,
//   View,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Easing,
//   SafeAreaViewBase,
//   SafeAreaView,
// } from 'react-native';
// const { width, height } = Dimensions.get('screen');

// const data = [
//   { id: 1, src: "https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg" },
//   { id: 2, src: "https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg" },
//   { id: 3, src: "https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg" },
//   { id: 4, src: "https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg" },
//   { id: 5, src: "https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg" }
// ]
// const IMAGE_SIZE = 80;
// const SPACING = 10;
// const App = ()=> {
//   const [images, setImages] = React.useState(data);
  
//   if (!images) {
//     return <Text style={{ color: 'green' }}>Loading....</Text>;
//   }
//   const topRef = React.useRef();
//   const thumbRef = React.useRef();
//   const [activeIndex, setActiveIndex] = React.useState(0)
//   const scrollToActiveIndex = (index) => {
//     //scroll flatlist
//     setActiveIndex(index);
//     topRef?.current?.scrollToOffset({
//       offset: index * width +100,
//       animated:true
//     })
//     if(index *(IMAGE_SIZE + SPACING) -IMAGE_SIZE / 2 >width /2)
//     {
//       thumbRef?.current?.scrollToOffset({
//         offset:index *(IMAGE_SIZE + SPACING) -width /2 + IMAGE_SIZE/2,
//         animated:true
//       })
//     }
//     else{
//       thumbRef?.current?.scrollToOffset({
//         offset: 0,
//         animated:true
//       })
//     }
//   }
//   const { width, height } = Dimensions.get('screen');
//   console.log("da imag", data)
//   return (
//     <View style={{ flex: 1 }}>
//       {/* <StatusBar hidden /> */}
//       <FlatList
//         ref={topRef}
//         data={images}
//         keyExtractor={item => item.id.toString()}
//         horizontal
//        style={{width:420}}
//         pagingEnabled 
//         contentContainerStyle={{ paddingHorizontal: SPACING }}
//         showsHorizontalScrollIndicator={false}
//         onMomentumScrollEnd={ev => {
//           scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width ))
//       }}
//         renderItem={({ item }) => {
//           return (
//             <View style={{width:420, height:160,marginTop:7,backgroundColor:'green'}}>
//               < Image
//                 source={{ uri: item.src }} resizeMode='cover'
//                 style={{width:"100%",height:180,padding:20}}
//               />
//             </View>
//           )
//         }}
//       />
//       <FlatList
//         ref={thumbRef}
//         data={images}
//         keyExtractor={item => item.id.toString()}
//         horizontal
//         pagingEnabled
//         style={{ position: 'absolute', top: 190}}
//         contentContainerStyle={{ paddingHorizontal: SPACING }}
//         showsHorizontalScrollIndicator={false}
//         renderItem={({ item, index }) => {
//           return (
//             <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
//               < Image
//                 source={{ uri: item.src }}
//                 style={{
//                   width:130, height: IMAGE_SIZE, borderRadius: 12,
//                   marginRight: SPACING-7,
//                   borderWidth: 2,
//                   borderColor: activeIndex === index ? 'yellow' : 'green'

//                 }}

//               />
//             </TouchableOpacity>
//           )

//         }}
//       />
//     </View>
//   );
// };
// export default App;

'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const QRCODE= ()=> {
 const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

 
    return (
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
export default QRCODE