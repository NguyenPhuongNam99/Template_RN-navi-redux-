import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const OverView_VIsit_Item = ({ item, check }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.blockVisit} onPress={check}>
                <Text style={styles.titleVisit}>{item.tilte}</Text>
                <Text style={styles.timerVisit}>{item.timer}</Text>
                <Text style={styles.PriceVisit}>{item.price}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }, blockVisit: {
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
})
export default OverView_VIsit_Item