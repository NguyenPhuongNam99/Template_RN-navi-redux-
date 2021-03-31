import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { DiscountData } from '../Data/DiscountData';
const DiscountHeader = () => {
    const MultipleDetail = ({ Item }) => {
        return (
            <View style={styles.banner}>
                <Image style={{ width: 373, height: 150, resizeMode: 'stretch', }} source={Item.image} />
                <View style={styles.banner_bottom}>
                      <Text style={styles.title}>{Item.title}</Text>
                        <View style={{flexDirection:'row',fontSize:12}}>
                        <Text style={{color:'#575757'}}>{Item.time}</Text>
                        <Text >{Item.timer}</Text>

                        </View>
                </View>
              

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{ width: 8, height: 12, }} source={require('../assets/search1.png')} />
                </TouchableOpacity>
                <Text style={styles.header_titlle}>Khuyến mại</Text>
                <TouchableOpacity>
                    <Image style={{ width: 12, height: 12, }} source={require('../assets/search2.png')} />
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:70}}>
                <FlatList
                    data={DiscountData}

                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        //Tạo component rồi gọi đến
                        <MultipleDetail Item={item} />
                    }
                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        // width:375,
        height: 70,

        alignItems: 'center',
        paddingHorizontal: 16
    },
    banner: {
        marginHorizontal: 16, width: 373, height: 215,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
      
        elevation: 1,
        marginVertical:10,
        backgroundColor:'#FFFFFF'
    },
    banner_bottom:{
        marginHorizontal:16
    },
    title:{
        color:'#000000',
        fontSize:13,
        fontWeight:'normal',
        lineHeight:16,
        marginTop:14,marginBottom:5
    }
})
export default DiscountHeader