// import React from "react";
// import { useState } from "react";
// import { View, StyleSheet, TouchableHighlight, Animated, Image, Text, TouchableOpacity } from "react-native";
// // import { FontAwesome5, Feather } from "@expo/vector-icons";
// // import { TabView } from "react-native-tab-view";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

// const TabView = () => {
//     const [mode, setMode] = useState(new Animated.Value(0));
//     const [buttonSize, setButtonSize] = useState(new Animated.Value(1));
//     const navigation = useNavigation();


//     const handlePress = () => {
//         Animated.sequence([
//             Animated.timing(buttonSize, {
//                 toValue: 0.95,
//                 duration: 200,
//                 useNativeDriver: false
//             }),
//             Animated.timing(buttonSize, {
//                 toValue: 1,
//                 useNativeDriver: false
//             }),
//             Animated.timing(mode, {

//                 useNativeDriver: false,
//                 toValue: mode._value === 0 ? 1 : 0
//             })
//         ]).start();
//     };



//     const thermometerX = mode.interpolate({
//         inputRange: [0, 1],
//         outputRange: [-24, -130]
//     });

//     const thermometerY = mode.interpolate({
//         inputRange: [0, 1],
//         outputRange: [-50, -100]
//     });

//     const timeX = mode.interpolate({
//         inputRange: [0, 1],
//         outputRange: [-24, -73]
//     });

//     const timeY = mode.interpolate({
//         inputRange: [0, 1],
//         outputRange: [-50, -150]
//     });


//     const timeXO = mode.interpolate({
//         inputRange: [0, 1],
//         outputRange: [-24, -3]
//     });

//     const timeYO = mode.interpolate({
//         inputRange: [0, 1],
//         outputRange: [-50, -150]
//     });




//     const pulseX = mode.interpolate({
//         inputRange: [0, 1],
//         outputRange: [-24, 50]
//     });

//     const pulseY = mode.interpolate({
//         inputRange: [0, 1],
//         outputRange: [-50, -100]
//     });

//     const rotation = mode.interpolate({
//         inputRange: [0, 1],
//         outputRange: ["0deg", "45deg"]
//     });

//     const sizeStyle = {
//         transform: [{ scale: buttonSize }]
//     };

//     return (
//         <View style={{ position: "absolute", alignItems: "center" }}>

//             <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY, zIndex: 100 }}>
//                 <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{width: 80, height: 50, justifyContent: 'space-between', alignItems: 'center' }} >
//                     <View style={styles.secondaryButton} >

//                         <Image source={require('../assets/tao.png')} />


//                     </View>
//                     <Text style={{color: 'white', fontSize: 12, position: 'absolute', bottom : -20, left: 0, zIndex: 2, textAlign: 'center'}}>Tạo lịch trình</Text>
//                 </TouchableOpacity>
//             </Animated.View>


//             <Animated.View style={{ position: "absolute", left: timeX, top: timeY, zIndex: 100 }}>
//             <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ width: 80, height: 50, justifyContent: 'space-between', alignItems: 'center' }} >
//                 <View style={styles.secondaryButton}>
//                     <Image source={require('../assets/goiy.png')} />
//                 </View>
//                 <Text style={{color: 'white', fontSize: 12, position: 'absolute', bottom : -20, left: 0, zIndex: 2, textAlign: 'center'}}>Tạo lịch trình</Text>
//             </TouchableOpacity>
//             </Animated.View>
//             <Animated.View style={{ position: "absolute", left: timeXO, top: timeYO, zIndex: 100 }}>
//             <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ width: 80, height: 50, justifyContent: 'space-between', alignItems: 'center' }} >
//                 <View style={styles.secondaryButton}>
//                     <Image source={require('../assets/goiy.png')} />

//                 </View>
//                 <Text style={{color: 'white', fontSize: 12, position: 'absolute', bottom : -20, left: 0, zIndex: 2, textAlign: 'center'}}>Tạo lịch trình</Text>
//                 </TouchableOpacity>
//             </Animated.View>
//             <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY, zIndex: 100 }}>
//             <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ width: 80, height: 50, justifyContent: 'space-between', alignItems: 'center' }} >
//                 <View style={styles.secondaryButton}>
//                     <Image source={require('../assets/danhgia.png')} />
//                 </View>
//                  <Text style={{color: 'white', fontSize: 12, position: 'absolute', bottom : -20, left: 0, zIndex: 2, textAlign: 'center'}}>Tạo lịch trình</Text>
//                 </TouchableOpacity>
//             </Animated.View>
//             <Animated.View style={[styles.button, sizeStyle]}>
//                 {/* underlayColor="#7F58FF" */}
//                 <TouchableHighlight onPress={handlePress} >
//                     <Animated.View style={{ transform: [{ rotate: rotation }] }}>
//                         <Image source={require('../assets/tao2.png')} />
//                     </Animated.View>
//                 </TouchableHighlight>
//             </Animated.View>
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     button: {
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: 36,
//         position: "absolute",
//         marginTop: -50,
//         zIndex: 100
//     },
//     secondaryButton: {
//         position: "absolute",
//         alignItems: "center",
//         justifyContent: "center",
//         width: 48,
//         zIndex: 1000,
//         borderRadius: 24,
//         left: 2,
//         top: 11.2
//     }
// });
// export default TabView


// // import React,{useState} from "react";
// // import { View, StyleSheet, TouchableHighlight, Animated, Image, TouchableOpacity } from "react-native";
// // // import { FontAwesome5, Feather } from "@expo/vector-icons";
// //  import { useNavigation } from '@react-navigation/native';
// // const TabView = () => {
// //     const [mode, setMode] = useState(new Animated.Value(0));
// //     const [buttonSize, setButtonSize] = useState(new Animated.Value(1));
// //    const navigation = useNavigation();
// //     const handlePress = () => {
// //         Animated.sequence([
// //             Animated.timing(buttonSize, {
// //                 toValue: 0.95,
// //                 duration: 200,
// //                 useNativeDriver:false
// //             }),
// //             Animated.timing(buttonSize, {
// //                 toValue: 1,
// //                 useNativeDriver:false
// //             }),
// //             Animated.timing(mode, {
// //                 toValue: mode._value === 0 ? 1 : 0,
// //                 useNativeDriver:false
// //             })
// //         ]).start();
// //     };


// //     const thermometerX = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-24, -100]
// //     });

// //     const thermometerY = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-50, -100]
// //     });

// //     const timeX = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-24, -24]
// //     });

// //     const timeY = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-50, -150]
// //     });

// //     const pulseX = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-24, 50]
// //     });

// //     const pulseY = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-50, -100]
// //     });

// //     const rotation = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: ["0deg", "45deg"]
// //     });

// //     const sizeStyle = {
// //         transform: [{ scale: buttonSize }]
// //     };

// //     return (
// //         <View style={{ position: "absolute", alignItems: "center" }}>
// //             <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
// //                 <TouchableOpacity onPress={()=>navigation.navigate('RestaurantIcon')} style={styles.secondaryButton}>
// //                     <Image source={require('../assets/goiy.png')} />
// //                 </TouchableOpacity>
// //             </Animated.View>
// //             <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
// //                 <View style={styles.secondaryButton}>
// //                     <Image source={require('../assets/goiy.png')} />
// //                 </View>
// //             </Animated.View>
// //             <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
// //                 <View style={styles.secondaryButton}>
// //                     <Image source={require('../assets/goiy.png')} />
// //                 </View>
// //             </Animated.View>
// //             <Animated.View style={[styles.button, sizeStyle]}>
// //                 <TouchableHighlight onPress={handlePress} underlayColor="#7F58FF">
// //                     <Animated.View style={{ transform: [{ rotate: rotation }] }}>
// //                         <Image source={require('../assets/goiy.png')} />
// //                     </Animated.View>
// //                 </TouchableHighlight>
// //             </Animated.View>
// //         </View>
// //     );
// // }


// // const styles = StyleSheet.create({
// //     button: {
// //         alignItems: "center",
// //         justifyContent: "center",
// //         width: 72,
// //         height: 72,
// //         borderRadius: 36,
// //         backgroundColor: "#7F58FF",
// //         position: "absolute",
// //         marginTop: -60,
// //         shadowColor: "#7F58FF",
// //         shadowRadius: 5,
// //         shadowOffset: { height: 10 },
// //         shadowOpacity: 0.3,
// //         borderWidth: 3,
// //         borderColor: "#FFFFFF"
// //     },
// //     secondaryButton: {
// //         position: "absolute",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         width: 48,
// //         height: 48,
// //         borderRadius: 24,
// //         backgroundColor: "#7F58FF"
// //     }
// // });

// // export default TabView





// // import { useNavigation } from '@react-navigation/native';
// // import React, { useRef } from "react";
// // import { View, StyleSheet, TouchableHighlight, TouchableOpacity, Animated, Image, Text } from "react-native";

// // import { useDispatch } from 'react-redux';
// // const TabView = () => {
// //     // mode = new Animated.Value(0);
// //     // buttonSize = new Animated.Value(1);
// //     const navigation = useNavigation();
// //     const mode = useRef(new Animated.Value(0)).current;
// //     const [active, setactive] = React.useState(true);
// //     const buttonSize = useRef(new Animated.Value(1)).current;
// //     const handlePress = () => {

// //         Animated.sequence([
// //             Animated.timing(buttonSize, {
// //                 toValue: 0.95,
// //                 duration: 200,
// //                 useNativeDriver: true
// //             }),
// //             Animated.timing(buttonSize, {
// //                 toValue: 1,
// //                 useNativeDriver: true,

// //             }),
// //             Animated.timing(mode, {
// //                 toValue: mode._value === 0 ? 1 : 0,
// //                 useNativeDriver: false,

// //             })
// //         ]).start();
// //         setTimeout(() => {
// //             setactive(!active)
// //         }, 1200)
// //     };


// //     const thermometerX = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-40, -120]
// //     });

// //     const thermometerY = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-50, -100]
// //     });

// //     const timeX = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-30, 5]
// //     });

// //     const timeY = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-50, -160]
// //     });
// //     const timeY1 = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-50, -160]
// //     });

// //     const pulseX = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-30, 50]
// //     });
// //     const timeX1 = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-30, -70]
// //     });
// //     const pulseY = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [-50, -100]
// //     });

// //     const rotation = mode.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: ["0deg", "45deg"]
// //     });

// //     const sizeStyle = {
// //         transform: [{ scale: buttonSize }]
// //     };

// //     return (
// //         <View style={{ position: "absolute", alignItems: "center" }}>
// //             <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
// //                 <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')} style={{ width: 80, height: 50, justifyContent: 'space-between', alignItems: 'center' }} >
// //                     <View style={styles.secondaryButton}>
// //                         <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>+</Text>
// //                     </View>
// //                     <Text style={{ color: 'white', fontSize: 12, position: 'absolute', bottom: -20, left: 0, zIndex: 2, textAlign: 'center' }}>Tạo lịch trình</Text>


// //                 </TouchableOpacity>
// //             </Animated.View>
// //             <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
// //                 <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')} style={{ width: 60, height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
// //                     <View style={styles.secondaryButton}>
// //                         <Image source={require('../assets/goiy.png')} style={{ width: 12, height: 12 }} />
// //                     </View>
// //                     <Text style={{ color: 'white', fontSize: 12, position: 'absolute', bottom: -20, left: 5, zIndex: 2, textAlign: 'center' }}>Đánh giá</Text>
// //                 </TouchableOpacity>
// //             </Animated.View>
// //             <Animated.View style={{ position: "absolute", left: timeX1, top: timeY1 }}>
// //                 <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')} style={{ width: 60, height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
// //                     <View style={styles.secondaryButton}>
// //                         <Image source={require('../assets/goiy.png')} style={{ width: 12, height: 12 }} />
// //                     </View>

// //                     <Text style={{ color: 'white', fontSize: 12, position: 'absolute', bottom: -20, left: 0, zIndex: 2, textAlign: 'center' }}>Xem gợi ý</Text>
// //                 </TouchableOpacity>

// //             </Animated.View>
// //             <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>

// //                 <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')} style={{ width: 60, height: 50, justifyContent: 'space-between', alignItems: 'center' }}>
// //                     <View style={styles.secondaryButton}>
// //                         <Image source={require('../assets/goiy.png')} style={{ width: 12, height: 12 }} />
// //                     </View>
// //                     <Text style={{ color: 'white', fontSize: 12, position: 'absolute', bottom: -28, left: 0, zIndex: 2, textAlign: 'center' }}>Tìm quanh đây</Text>
// //                 </TouchableOpacity>
// //             </Animated.View>

// //             <Animated.View style={[{
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 width: 39,
// //                 height: 39,
// //                 borderRadius: 36,
// //                 backgroundColor: active ? "#FF5F24" : "#FFAE8F",
// //                 position: "absolute",
// //                 marginTop: -35,
// //                 shadowColor: "#FF5F24",
// //                 shadowRadius: 5,
// //                 shadowOffset: { height: 10 },
// //                 shadowOpacity: 0.3,
// //             }, sizeStyle]}>
// //                 <TouchableOpacity onPress={handlePress}>
// //                     <Animated.View style={{ transform: [{ rotate: rotation }] }}>
// //                         <Text style={{ color: 'white', fontSize: 30, textAlign: 'center', fontWeight: '600' }}>+</Text>
// //                     </Animated.View>
// //                 </TouchableOpacity>
// //             </Animated.View>
// //         </View>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     button: {
// //         alignItems: "center",
// //         justifyContent: "center",
// //         width: 39,
// //         height: 39,
// //         borderRadius: 36,

// //         backgroundColor: "#FF5F24",
// //         position: "absolute",
// //         marginTop: -35,
// //         shadowColor: "#FF5F24",
// //         shadowRadius: 5,
// //         shadowOffset: { height: 10 },
// //         shadowOpacity: 0.3,
// //         // borderWidth: 3,
// //         // borderColor: "#FFFFFF"
// //     },
// //     secondaryButton: {
// //         position: "absolute",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         width: 30,
// //         height: 30,
// //         marginTop: 20,
// //         marginLeft: 10,
// //         borderRadius: 24,
// //         backgroundColor: "#FF5F24"
// //     }
// // });
// // export default TabView;

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';

const TabView = () => {
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    return (
        <ScrollView>


            <View style={styles.container}>
                <ActionButton buttonColor="green" style={{position:'absolute',top:0,left:0,zIndex:100,
                        backgroundColor:  "green",}}>
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                        <Icon name="ios-logo-reddit" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={createTwoButtonAlert}>
                        <Icon name="ios-logo-reddit" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { }}>
                        <Icon name="ios-logo-reddit" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
                {/* <Text style={{color:'orange',zIndex:100}}>HGHGUYGUYG</Text> */}
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
    
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white', alignItems: "center",
                       justifyContent: "center",
                        width: 39,
                        height: 39,
                       borderRadius: 36,
                        backgroundColor:  "green",
                        position: "absolute",
                      marginTop: -15,
                   shadowColor: "#FF5F24",
                      shadowRadius: 5,
                      shadowOffset: { height: 10 },
                        shadowOpacity: 0.3,
      },
})
export default TabView;