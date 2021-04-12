import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { Suggestion_toYou } from '../../HotelData'
import MultipleDetail from '../MultipleDetail'

const HotelResort = ({Item,check}) => {
  
    return (
        <TouchableOpacity onPress={check}>
        <View style={styles.container}>
           <View style={styles.body}>

          
                <View style={styles.block}>
                    <View style={styles.blockTop}>
                        <View style={styles.blockLeft}>
                            <Image source={Item.image} style={styles.image} />
                        </View>
                        <View style={styles.blockRight}>
                            <View style={styles.Right1}>
                                <Image source={Item.image1} style={styles.image} />
                            </View>
                            <View style={styles.Right2}>
                                <View style={styles.Left2}>
                                    <Image source={Item.image2} style={styles.image} />
                                </View>
                                <View style={styles.Left22}>
                                    <Image source={Item.image3} style={styles.image} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.blockBody}>
                        <View style={styles.bodyleft}>
                            <Text style={styles.hotel}>{Item.version}</Text>
                            <Text style={styles.name}>{Item.name}</Text>
                            <View style={styles.blocklocation}>
                                <Image style={styles.imageLocation} source={require('../../assets/location.png')} />
                                <Text style={styles.titleLocation}>{Item.des}</Text>
                            </View>
                        </View>
                        <View style={styles.bodyright}>
                            <Image style={styles.star} source={require('../../assets/sa.png')} />
                            <Text style={styles.price}>Từ <Text style={{ color: '#FF5F24' }}>{Item.price}</Text></Text>
                        </View>

                    </View>
                </View>

                </View>
               
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    block: {
        height: 230,
        marginTop: 20,
        marginHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    //    backgroundColor:'green',
        elevation: 4,
      
    },
    blockTop: {
        flex: 0.69,

        flexDirection: 'row'
    },
    blockBody: {
        flex: 0.31,

        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    blockLeft: {
        flex: 0.4,


    },
    blockRight: {
        flex: 0.6,

        marginLeft: 7
    },
    Right1: {
        flex: 0.48,
        backgroundColor: 'pink'
    },
    Right2: {
        flex: 0.52,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6
    },

    Left2: {
        flex: 0.48,
        backgroundColor: 'orange'
    },
    Left22: {
        flex: 0.48,
        backgroundColor: 'green'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    hotel: {
        fontSize: 10,
        color: '#A2A2A2',
        fontWeight: 'normal',
        paddingTop: 5
    },
    name: {
        fontSize: 14,
        color: '#000000',
        fontWeight: '500',
        paddingVertical: 5
    },
    blocklocation: {
        flexDirection: 'row'
    },
    imageLocation: {
        width: 8,
        height: 10
    },
    titleLocation: {
        fontSize: 10,
        color: '#3076FE',
        paddingLeft: 6
    },
    bodyright: {
        alignItems: 'flex-end'
    },
    star: {
        marginTop: 6
    },
    price: {
        paddingTop: 23,
        fontSize: 12,
        color: '#757575'
    }
})
export default HotelResort