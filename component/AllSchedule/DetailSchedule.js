import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FirstDay from './FirstDay';
import SecondDay from './SecondDay';
import ThirdDay from './ThirdDay';
import FourDay from './FourDay'
import { NavigationContainer } from '@react-navigation/native';
const DetailSchedule = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imageBanner} source={require('../../assets/qn1.jpg')} />
                <View style={styles.titleHeader}>
                    <TouchableOpacity>
                        <Image style={styles.back} source={require('../../assets/back1.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleBanner}>
                    <Text style={styles.desName}>Quy Nhơn, Bình Định</Text>
                    <Text style={styles.timer}>5/12 - 10/12</Text>
                </View>
            </View>
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={{
                    activeTintColor: '#000000',
                    inactiveTintColor: '#5E5E5E',
                    indicatorStyle: {
                        backgroundColor: '#000000'
                    },
                    tabStyle: {
                        backgroundColor: '#E5E5E5',
                        marginBottom: 2
                    },
                    labelStyle: {
                        textTransform: 'none',
                        fontWeight: '600',

                    }
                }}>

                    <Tab.Screen name="Ngày 1" component={FirstDay} options={{
                        tabBarLabel: ({ focused }) =>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: focused ? "#000000" : "#5E5E5E" }}>Ngày 1</Text>
                                <Text style={{ fontSize: 10, color: '#6C6C6C' }}>6/12</Text>
                            </View>
                    }} />
                    <Tab.Screen name="Ngày 2" component={SecondDay} options={{
                        tabBarLabel: ({ focused }) =>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: focused ? "#000000" : "#5E5E5E" }}>Ngày 2</Text>
                                <Text style={{ fontSize: 10, color: '#6C6C6C' }}>7/12</Text>
                            </View>
                    }} />
                    <Tab.Screen name="Ngày 3" component={ThirdDay} options={{
                        tabBarLabel: ({ focused }) =>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: focused ? "#000000" : "#5E5E5E" }}>Ngày 3</Text>
                                <Text style={{ fontSize: 10, color: '#6C6C6C' }}>8/12</Text>
                            </View>
                    }} />
                    <Tab.Screen name="Ngày 4" component={FourDay} options={{
                        tabBarLabel: ({ focused }) =>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: focused ? "#000000" : "#5E5E5E" }}>Ngày 4</Text>
                                <Text style={{ fontSize: 10, color: '#6C6C6C' }}>9/12</Text>
                            </View>
                    }} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 150
    },
    imageBanner: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    titleHeader: {
        position: 'absolute',
        top: 24,
        zIndex: 100
    },
    back: {
        width: 8,
        height: 12, zIndex: 100
    },
    titleBanner: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '40%',
        left: '33%'
        // flex:1
    },
    desName: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    timer: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'normal'
    }
})
export default DetailSchedule