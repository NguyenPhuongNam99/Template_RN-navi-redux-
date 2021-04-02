import React from "react";
import { useState } from "react";
import { View, StyleSheet, TouchableHighlight, Animated } from "react-native";
// import { FontAwesome5, Feather } from "@expo/vector-icons";
// import { TabView } from "react-native-tab-view";
import Icon from 'react-native-vector-icons/FontAwesome';

 const TabView =()=>{
   const  [mode,setMode] = useState(new Animated.Value(0)) ;
   const [buttonSize,setButtonSize]  =useState(new Animated.Value(1)) ;

    handlePress = () => {
        Animated.sequence([
            Animated.timing(buttonSize, {
                toValue: 0.95,
                duration: 200,
                useNativeDriver:false
            }),
            Animated.timing(buttonSize, {
                toValue: 1,
                useNativeDriver:false
            }),
            Animated.timing(mode, {
                
                useNativeDriver:false,
                toValue: mode._value === 0 ? 1 : 0
            })
        ]).start();
    };

   
        const thermometerX = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -100]
        });

        const thermometerY = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        });

        const timeX = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -24]
        });

        const timeY = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -150]
        });

        const pulseX =mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, 50]
        });

        const pulseY = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        });

        const rotation = mode.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"]
        });

        const sizeStyle = {
            transform: [{ scale: buttonSize }]
        };

        return (
            <View style={{ position: "absolute", alignItems: "center" }}>
                <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
                    <View style={styles.secondaryButton}>
                    <Icon name="search" size={19} color="#9A9A9A" />
                    </View>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
                    <View style={styles.secondaryButton}>
                    <Icon name="search" size={19} color="#9A9A9A" />
                    </View>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
                    <View style={styles.secondaryButton}>
                    <Icon name="search" size={19} color="#9A9A9A" />
                    </View>
                </Animated.View>
                <Animated.View style={[styles.button, sizeStyle]}>
                    <TouchableHighlight onPress={handlePress} underlayColor="#7F58FF">
                        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                        <Icon name="search" size={19} color="#9A9A9A" />
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        );
    }


const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#7F58FF",
        position: "absolute",
        marginTop: -60,
        shadowColor: "#7F58FF",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFFFFF"
    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#7F58FF"
    }
});
export default TabView