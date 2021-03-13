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

// const API_KEY = "YOUR_PEXELS.COM_API_KEY"
// const API_URL = "https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20"

// const fetchImagesFromPexels = async() =>{
//   const data= await fetch(API_URL,{
//     headers:{
//       'Authorization':API_KEY
//     }
//     })
//     const {photo} =await data.json();
//     // console.log(results);
//     return photo
// }

const data = [
  { id: 1, src: "https://www.w3schools.com/w3css/img_lights.jpg" },
  { id: 2, src: "https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg" },
  { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWO8TWW3bYnPdYA17QYp2O5DXmkLg5yReTw&usqp=CAU" },
  { id: 4, src: "https://static.toiimg.com/photo/msid-67868104/67868104.jpg?1368689" },
  { id: 5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzB0pqU6H_nbOYszqC0JStl9-Fj-cjvF80iw&usqp=CAU" }
]
const IMAGE_SIZE =80;
const SPACING =10;
export default App => {
  const [images, setImages] = React.useState(data);
  //   React.useEffect(()=>{
  //     const fetchImages = async ()=>{
  //       const images = await fetchImagesFromPexels();
  //       setImages(images)
  //       console.log(images);
  //     }

  //     fetchImages();
  // //1 api ///laays api ra
  //   },[])
  if (!images) {
    return <Text style={{ color: 'green' }}>Loading....</Text>;
  }
  const topRef = React.useRef();
  const thumbRef = React.useRef();
  const [activeIndex,setActiveIndex] = React.useState(0)
  const scrollToActiveIndex =(index)=>{
    //scroll flatlist
    setActiveIndex(index);

  }
  console.log("da imag", data)
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar hidden /> */}
      <FlatList
        data={images}
        ref={topRef}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev =>{
          scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x/width))
        }}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              < Image
                source={{ uri: item.src }}
                style={[StyleSheet.absoluteFillObject]}

              />
            </View>
          )

        }}
      />
      <FlatList
        data={images}
        ref={thumbRef}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        style={{position:'absolute',bottom:IMAGE_SIZE}}
        contentContainerStyle={{paddingHorizontal:SPACING}}

        showsHorizontalScrollIndicator={false}
        renderItem={({ item ,index}) => {
          return (
           <TouchableOpacity onPress={()=>scrollToActiveIndex(index)}>
              < Image
                source={{ uri: item.src }}
                style={{width:IMAGE_SIZE,height:IMAGE_SIZE,borderRadius:12,
                  marginRight:SPACING,
                  borderWidth:2,
                  borderColor:activeIndex === index ? 'yellow': 'green'

                }}

              />
            </TouchableOpacity>
          )

        }}
      />
    </View>
  );
};