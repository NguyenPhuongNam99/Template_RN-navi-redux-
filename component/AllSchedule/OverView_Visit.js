import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import {OverView_VisitData} from '../../Data/OverView_VisitData'
import OverView_VIsit_Item from './OverView_VIsit_Item'
import { useNavigation } from '@react-navigation/native';

const OverView_Visit = () => {
    const navigation = useNavigation();
    const check =()=>{
        navigation.navigate('DetailVisit')
    }

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 50 }}>
                <FlatList
                    data={OverView_VisitData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <OverView_VIsit_Item item={item}  check ={check}/>
                }
                />
            </View>
            <View style={styles.headeTouchavle}>
                <TouchableOpacity style={styles.touchableFind}>
                    <Image source={require('../../assets/search3.png')} />
                    <Text style={styles.findPlant}>Tìm chuyến bay khác</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    blockVisit: {
        height: 86,
        backgroundColor: '#FFFFFF',
        borderRadius: 5
        , marginHorizontal: 15,
        marginVertical: 10, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1,
        paddingLeft: 16,
        justifyContent: 'space-evenly'
    },
    titleVisit: {
        fontWeight: 'bold',
        fontSize: 13
    },
    timerVisit: {
        fontSize: 12,
        color: '#828282'
    },
    PriceVisit: {
        fontWeight: 'bold',
        fontSize: 13
    },
    touchableFind: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        backgroundColor: "#FFFFFF",
        marginHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    }
    , findPlant: {
        color: '#FF5F24',
        fontSize: 12,
        fontWeight: '900',
        paddingLeft: 6,
        borderRadius: 5
    },
    headeTouchavle: {
        width: '100%', position: 'absolute',
        bottom: 10,
    }
})
export default OverView_Visit