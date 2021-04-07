import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Header from '../component/Header';
import { Destionation } from '../Data/Destination1_Data'
const Destination12 = ({navigation}) => {
    const goback =()=>{
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <Header Name='Trải nghiệm nổi bật' back ={goback} />
            <View style={styles.block}>
                <FlatList
                    data={Destionation}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.header}>
                                <View style={styles.tong}>
                                    <Image  style={styles.image} source={item.image} />
                                </View>
                                <View style={styles.bottom}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <View style={styles.bottom_title}>
                                        <Image style={styles.image1} source={item.image1} />
                                        <Text style={styles.location}>{item.location}</Text>
                                    </View>
                                    <Text> Từ <Text style={styles.price}>{item.price}</Text></Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    block: {
      marginBottom:74,
   

    },

    header: {
        height: 243,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation:2,
        marginVertical: 16,
        marginHorizontal:16,
        backgroundColor:'white'
        
    },
    tong: {
        flex: 0.65
    },
    bottom: {
        flex: 0.35, paddingLeft: 16
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode:'cover'
    },
    name: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 17,
        paddingTop: 15
    },
    image1: {
        width: 8,
        height: 10,
        // marginTop:4,
        marginRight: 6

    },
    bottom_title: {
        flexDirection: "row",
        paddingTop: 3
    },
    location: {
        color: '#3076FE',
        fontSize: 10,
        lineHeight: 12,
        fontStyle: 'normal',
        fontWeight: 'normal'
    },
    price: {
        color: 'red',
        fontSize:12
    }
})
export default Destination12;