import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { DiscountData } from '../Data/DiscountData';
import { useDispatch, useSelector } from 'react-redux'
import { ScaledSheet } from 'react-native-size-matters';
const DiscountHeader = ({ navigation }) => {
    const MultipleDetail = ({ Item }) => {
        const checkBanner = (item) => {
            // if(item ==1){
            dispatch({ type: 'PassBanner', banner: item })
            console.log('df', item)
            navigation.navigate('DetailDiscount')
            // }
        }
        const dispatch = useDispatch();
        return (
            <TouchableOpacity onPress={() => checkBanner(Item)}>
                <View style={styles.banner}>
                    <View style={{ height: 150, backgroundColor: 'green' }}>
                        <Image style={{ width: '100%', height: '100%' }} source={Item.image} />
                    </View>

                    <View style={styles.banner_bottom}>
                        <Text style={scaleSheet.title}>{Item.title}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={scaleSheet.time}>{Item.time}</Text>
                            <Text style={scaleSheet.timer}>{Item.timer}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={DiscountData}

                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            //Tạo component rồi gọi đến
                            <MultipleDetail Item={item} />
                        }
                    />

                </View>
            </View>
        </SafeAreaView>
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
        paddingHorizontal: 16,
    },
    banner: {
        marginHorizontal: 14, height: 215,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    banner_bottom: {


        paddingHorizontal: 15,
        paddingVertical: 15
    },
    title: {
        color: '#000000',
        // fontSize:'10@ms0.3',
        fontWeight: 'normal',
        lineHeight: 16,
        marginTop: 14, marginBottom: 5
    }
})
const scaleSheet = ScaledSheet.create({
    title: {
        // color:'#000000',
        fontSize: '13@ms0.3',
        // fontWeight:'normal',
        lineHeight: 16,

    },
    time: {
        color: '#575757',
        fontSize: '12@ms0.3'
    },
    timer: {
        fontSize: '12@ms0.3'
    }

})
export default DiscountHeader