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
            <TouchableOpacity style={{ position: "absolute", left: thermometerX, top: thermometerY  ,zIndex:100}}>
                <Animated.View >
                    <View style={styles.secondaryButton}>
                        <TouchableOpacity style={{ zIndex:100}} onPress={() => navigation.navigate('Profile')}>
                            <Image source={require('../assets/tao.png')} />
                        </TouchableOpacity>
                        <Text style={{ width: 90, fontSize: 13, textAlign: 'center', color: '#FFFFFF' }}>Tạo lịch trình</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>

            <Animated.View style={{ position: "absolute", left: timeX, top: timeY ,zIndex:100}}>
                <View style={styles.secondaryButton}>
                    <Image source={require('../assets/goiy.png')} />
                    <Text style={{ width: 90, fontSize: 13, textAlign: 'center', color: '#FFFFFF' }}>Gợi ý</Text>
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: timeXO, top: timeYO ,zIndex:100 }}>
                <View style={styles.secondaryButton}>
                    <Image source={require('../assets/goiy.png')} />
                    <Text style={{ width: 90, fontSize: 13, textAlign: 'center', color: '#FFFFFF' }}>Gợi ý</Text>
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY ,zIndex:100 }}>
                <View style={styles.secondaryButton}>
                    <Image source={require('../assets/danhgia.png')} />
                    <Text style={{ width: 90, fontSize: 13, textAlign: 'center', color: '#FFFFFF' }}>Đánh giá</Text>
                </View>
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
        // backgroundColor: "#7F58FF",
        position: "absolute",
        marginTop: -50,
        // shadowColor: "#FFFFFF",
        // shadowRadius: 5,
        // shadowOffset: { height: 7 },
        // shadowOpacity: 0.3,
        // borderWidth: 3,
        // borderColor: "#FFFFFF" 
        zIndex:100
    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 48,

        borderRadius: 24,

        left: 2,
        top: 11.2
    }
});
export default TabView