import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native'
import { color } from 'react-native-reanimated';
import Header from '../Header'
const ChangeTheme = ({ navigation }) => {
    // const goback = ()=>{
    //     navigation.goBack()
    // }
    const [isEnabled, setIsEnabled] = useState(true);
    const [ischeck, setIsCheck] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View style={isEnabled ? styles.container : { backgroundColor: '#0E101B', flex: 1 }}>
            <View style={isEnabled ? styles.header : { ...styles.header, backgroundColor: '#0E101B' }}>
                <View>
                    <Image source={require('../../assets/back2.png')} />
                </View>
                <View>
                    <Text style={!isEnabled ? {color:'white'} : {color:'black'}}>APP THEME</Text>
                </View>
                <Text></Text>
            </View>
            <View style={isEnabled ? styles.blockChange : { ...styles.blockChange, backgroundColor: '#1C2037' }}>
                <Text style={!isEnabled ? {color:'white'} : {color:'black'}}>Auto Change Theme</Text>

                <View style={styles.blockBody}>
                    <Text style={!isEnabled? {...styles.text,color:'white'} : styles.text}>Change the theme automatically based on IOS native theme</Text>
                    <View >
                        <Switch
                            trackColor={{ false: "#767577", true: "#00D52F" }}
                            thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ width:5, height: 35, alignSelf: 'flex-start' }}
                        />
                    </View>
                </View>

                

            </View>
            <View style={{marginHorizontal:15}}>
                 <View style={styles.body}>

                </View>
            </View>
          
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FC'
    },
    header: {
        height: 73,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    header1: {
        height: 73,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    blockChange: {
        height: 97,
        marginHorizontal: 8,
        backgroundColor: '#FFFFFF',
        marginTop: 16,
        paddingVertical: 24,
        paddingHorizontal: 15,
        borderRadius:16
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,

    },
    blockBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    text: {
        fontSize: 10,
        alignSelf: 'center',
        color:'black'
    },
    body:{
        height:124,
        backgroundColor:'green',
        marginTop:25,
        width:'100%'
    }
})
export default ChangeTheme;