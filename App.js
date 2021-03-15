// import React from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity
// } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import Stacknavigation from './src/navigation/Stacknavigation';
// import Tabviewmain from './navigation/Tabviewmain';
// const App =()=>{
//   return(
//     //Aniomation Bottom Tab
//     // <NavigationContainer>
//     //   <Tabviewmain />
//     // </NavigationContainer>
//     <View>
//       <Text>Hello</Text>
//     </View>

//   )
// }
// export default App
import * as React from 'react';
import { useState } from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
const { width, height } = Dimensions.get('screen');

const data = [
  { id: 1, src: "https://www.w3schools.com/w3css/img_lights.jpg" },
  { id: 2, src: "https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg" },
  { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWO8TWW3bYnPdYA17QYp2O5DXmkLg5yReTw&usqp=CAU" },
  { id: 4, src: "https://static.toiimg.com/photo/msid-67868104/67868104.jpg?1368689" },
  { id: 5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzB0pqU6H_nbOYszqC0JStl9-Fj-cjvF80iw&usqp=CAU" }
]
const IMAGE_SIZE = 80;
const SPACING = 10;
const App = ()=> {
  const [images, setImages] = React.useState(data);
  
  if (!images) {
    return <Text style={{ color: 'green' }}>Loading....</Text>;
  }
  const topRef = React.useRef();
  const thumbRef = React.useRef();
  const [activeIndex, setActiveIndex] = React.useState(0)
  const scrollToActiveIndex = (index) => {
    //scroll flatlist
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated:true
    })
    if(index *(IMAGE_SIZE + SPACING) -IMAGE_SIZE / 2 >width /2)
    {
      thumbRef?.current?.scrollToOffset({
        offset:index *(IMAGE_SIZE + SPACING) -width /2 + IMAGE_SIZE/2,
        animated:true
      })
    }
    else{
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated:true
      })
    }
  }
  const { width, height } = Dimensions.get('screen');
  console.log("da imag", data)
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar hidden /> */}
      <FlatList
        ref={topRef}
        data={images}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev => {
          scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width))
      }}
        renderItem={({ item }) => {
          return (
            <View style={{ width:359, height:160,marginTop:7 }}>
              < Image
                source={{ uri: item.src }}
                style={[StyleSheet.absoluteFillObject]}
                resizeMethod='resize'
              />
            </View>
          )
        }}
      />
      <FlatList
        ref={thumbRef}
        data={images}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        style={{ position: 'absolute', top: 170}}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              < Image
                source={{ uri: item.src }}
                style={{
                  width:114, height: IMAGE_SIZE, borderRadius: 12,
                  marginRight: SPACING-7,
                  borderWidth: 2,
                  borderColor: activeIndex === index ? 'yellow' : 'green'

                }}

              />
            </TouchableOpacity>
          )

        }}
      />
    </View>
  );
};
export default App;