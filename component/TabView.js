import React from "react";
import { useState } from "react";
import { View, StyleSheet, TouchableHighlight, Animated, Image, Text, TouchableOpacity } from "react-native";
// import { FontAwesome5, Feather } from "@expo/vector-icons";
// import { TabView } from "react-native-tab-view";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const TabView = () => {
    const [mode, setMode] = useState(new Animated.Value(0));
    const [buttonSize, setButtonSize] = useState(new Animated.Value(1));
    const navigation = useNavigation();


    const handlePress = () => {
        Animated.sequence([
            Animated.timing(buttonSize, {
                toValue: 0.95,
                duration: 200,
                useNativeDriver: false
            }),
            Animated.timing(buttonSize, {
                toValue: 1,
                useNativeDriver: false
            }),
            Animated.timing(mode, {

                useNativeDriver: false,
                toValue: mode._value === 0 ? 1 : 0
            })
        ]).start();
    };



    const thermometerX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -130]
    });

    const thermometerY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -100]
    });

    const timeX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -73]
    });

    const timeY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -150]
    });


    const timeXO = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -3]
    });

    const timeYO = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -150]
    });




    const pulseX = mode.interpolate({
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

            <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY, zIndex: 100 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{backgroundColor:'green', width: 80, height: 50, justifyContent: 'space-between', alignItems: 'center' }} >
                    <View style={styles.secondaryButton} >

                        <Image source={require('../assets/tao.png')} />

                     
                    </View>
                    <Text style={{color: 'white', fontSize: 12, position: 'absolute', bottom : -20, left: 0, zIndex: 2, textAlign: 'center'}}>Tạo lịch trình</Text>
                </TouchableOpacity>
            </Animated.View>


            <Animated.View style={{ position: "absolute", left: timeX, top: timeY, zIndex: 100 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ width: 80, height: 50, justifyContent: 'space-between', alignItems: 'center' }} >
                <View style={styles.secondaryButton}>
                    <Image source={require('../assets/goiy.png')} />
                </View>
                <Text style={{color: 'white', fontSize: 12, position: 'absolute', bottom : -20, left: 0, zIndex: 2, textAlign: 'center'}}>Tạo lịch trình</Text>
            </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: timeXO, top: timeYO, zIndex: 100 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ width: 80, height: 50, justifyContent: 'space-between', alignItems: 'center' }} >
                <View style={styles.secondaryButton}>
                    <Image source={require('../assets/goiy.png')} />

                </View>
                <Text style={{color: 'white', fontSize: 12, position: 'absolute', bottom : -20, left: 0, zIndex: 2, textAlign: 'center'}}>Tạo lịch trình</Text>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY, zIndex: 100 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ width: 80, height: 50, justifyContent: 'space-between', alignItems: 'center' }} >
                <View style={styles.secondaryButton}>
                    <Image source={require('../assets/danhgia.png')} />
                </View>
                 <Text style={{color: 'white', fontSize: 12, position: 'absolute', bottom : -20, left: 0, zIndex: 2, textAlign: 'center'}}>Tạo lịch trình</Text>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.button, sizeStyle]}>
                {/* underlayColor="#7F58FF" */}
                <TouchableHighlight onPress={handlePress} >
                    <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                        <Image source={require('../assets/tao2.png')} />
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
        borderRadius: 36,
        position: "absolute",
        marginTop: -50,
        zIndex: 100
    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        zIndex: 1000,
        borderRadius: 24,
        left: 2,
        top: 11.2
    }
});
export default TabView