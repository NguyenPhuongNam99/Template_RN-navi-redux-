// import React from "react";
// import { View, Button, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from "react-native";

// import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// import { data } from '../Data/HomeData'
// const HomeScreen = () => {
//   const Item = ({ item }) => {
//     return (
//       <TouchableOpacity >
//         <View style={{ flexDirection: 'column', paddingHorizontal: 23, paddingTop: 29 }}>

//           <Image style={{ width: 35, height: 35 }} source={item.img} />


//           <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '500', lineHeight: 14 }}>Hotel</Text>
//         </View>
//       </TouchableOpacity>

//     )
//   }
//   return (
//     <View style={styles.center}>
//       <View style={styles.top}>
//         <Image style={{ width: '100%', height: '100%' }} source={require('../assets/a.png')} />
//         <View style={{ position: 'absolute', top: verticalScale(20), paddingHorizontal: moderateScale(15) }}>
//           <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Khám Phá</Text>
//           <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'normal' }}>Lên lịch trình, đặt vé máy bay, khách sạn, tìm kiếm
//           các tour lịch và các hoạt động vui chơi giải trí
//           </Text>
//         </View>
//         <View style={{ position: 'absolute', top: verticalScale(80), }}>
//           <FlatList
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             data={data}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) =>
//               <Item item={item} />
//             }
//           />
        
         

        

//         </View>
//         <View style={{position:'absolute',bottom:verticalScale(-21),width:'100%'}}>
//           <TextInput
//               style={styles.input}
//               placeholder='Bạn muốn đi đâu ?'
//               placeholderTextColor='#B6B6B6'

//             />
//             <Image style={{ position: 'absolute', top: 10, left: 10, zIndex: 100 }} source={require('../assets/search.png')} />
//           </View>
          

//       </View>



//       {/* <View style={styles.block}>
//         <View style={styles.child}>
//           <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../assets/anh2.jpg')} />
//         </View>
//         <View style={styles.child}>
//           <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../assets/anh2.jpg')} />
//         </View>
//         <View style={styles.child}>
//           <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../assets/anh2.jpg')} />
//         </View>
//       </View> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,


//   },
//   top: {
//     height: verticalScale(213),
//     backgroundColor: 'green'
//   },
//   block: {
//     height: verticalScale(104),
//     marginTop: verticalScale(50),
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',

//   },
//   child: {
//     height: verticalScale(104),
//     backgroundColor: 'orange',
//     width: scale(104)
//   },
//   input: {
//       height: 40,
//       // width:358,
//       marginTop: 7,
//       borderWidth: 1,
//       backgroundColor: '#F7F7F7',
//       borderColor: '#F7F7F7',
//       borderRadius: 5,
//       shadowColor: "rgba(140, 178, 236, 0.3)",
//       shadowOffset: {
//           width: 0,
//           height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       fontSize: 12,
//       elevation: 10,
//       marginHorizontal:10
//   },
// });

// export default HomeScreen;



import MapView ,{PROVIDER_GOOGLE } from 'react-native-maps'
import React from "react";
import { View,StyleSheet } from "react-native";

const HomeScreen =()=>{
  return(
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
      }}
      
      >

      </MapView>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green'
  },
  map:{
    flex:1
  }
})
export default HomeScreen