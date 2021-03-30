import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = () => {
    //data icon Top
    const data = [
        {
            id: 1,
            img: require('../assets/plan.png'),
            title: 'lịch trình'
        },
        {
            id: 2,
            img: require('../assets/21.png'),
            title: 'khách sạn'
        },
        {
            id: 3,
            img: require('../assets/flight.png'),
            title: 'Máy bay'
        },
        {
            id: 4,
            img: require('../assets/combo.png'),
            title: 'Com bo'
        },
        {
            id: 5,
            img: require('../assets/res.png'),
            title: 'Nhà Hàng'
        },
        {
            id: 6,
            img: require('../assets/plan.png'),
            title: 'lich trinh'
        },

    ]
    //image Voucher
    const voucherdata = [
        {
            id: 1,
            image: require('../assets/voucher.png')
        },
        {
            id: 2,
            image: require('../assets/v5.jpg')
        },
        {
            id: 3,
            image: require('../assets/v4.jpg')
        },
        {
            id: 4,
            image: require('../assets/v2.png')
        },
    ]
    //lcịh trình gần đây
    const sheduleNowData = [
        {
            id: 1,
            image: require('../assets/Lt.png'),
            image2: require('../assets/v22.png'),
            image3: require('../assets/lt2.png'),
            image4: require('../assets/lt3.png'),
        },
        {
            id: 2,
            image: require('../assets/voucher.png'),
            image2: require('../assets/voucher.png'),
            image3: require('../assets/voucher.png'),
            image2: require('../assets/voucher.png'),
        },
        {
            id: 3,
            image: require('../assets/voucher.png'),
            image2: require('../assets/voucher.png'),
            image3: require('../assets/voucher.png'),
            image2: require('../assets/voucher.png'),
        },
        {
            id: 4,
            image: require('../assets/voucher.png'),
            image2: require('../assets/voucher.png'),
            image3: require('../assets/voucher.png'),
            image2: require('../assets/voucher.png'),
        },
    ]
    const Item = ({ item }) => {
        return (
            <View style={{ flexDirection: 'column', paddingHorizontal: 11, paddingTop: 29 }}>
                <Image style={{ width: 35, height: 35, marginBottom: 6, marginHorizontal: 4 }} source={item.img} />
                <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '500', lineHeight: 14 }}>{item.title}</Text>
            </View>
        )
    }
    const Voucher = ({ voucher_item }) => {
        return (
            <Image style={{ width: 300, height: 150, marginHorizontal: 6, borderRadius: 5 }} source={voucher_item.image} />

        )
    }
    const SheduleNow = ({ sheduleNow_item }) => {
        return (
            <View style={styles.header_shedule}>
                <View style={styles.left1}>
                    <Image style={{ width: 120, height: 160, borderTopLeftRadius: 5 }} source={sheduleNow_item.image} />
                </View>
                <View style={styles.right1}>
                    <Image style={{ width: 174, height: 77, marginHorizontal: 6, borderRadius: 5 }} resizeMode='cover' source={sheduleNow_item.image2} />
                    <View style={styles.schedule_bottom}>
                    <Image style={{ width: 84, height: 77, marginHorizontal: 6,  }} resizeMode='cover' source={sheduleNow_item.image4} />
                    <Image style={{ width: 84, height: 77,   }} resizeMode='cover' source={sheduleNow_item.image3} />
                    </View>
                </View>
            </View>

        )
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/home.png')} />
                <View style={styles.header_bottom}>
                    <Text style={styles.header}>Khám Phá</Text>
                    <Text style={styles.shedule}>
                        Lên lịch trình, đặt vé máy bay, khách sạn, tìm kiếm các tour lịch và các hoạt động vui chơi giải trí
                 </Text>


                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <Item item={item} />
                        }
                    />
                    <View>

                        <TextInput
                            style={styles.input}
                            placeholder='Bạn muốn đi đâu ?'
                            placeholderTextColor='#B6B6B6'

                        />
                        <Image style={{ position: 'absolute', top: 10, left: 10, zIndex: 100 }} source={require('../assets/search.png')} />
                    </View>

                </View>
                <View style={styles.header_title}>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={styles.touchable_title}>Xem gợi ý </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={styles.touchable_title}>Tạo lịch trình </Text>
                    </TouchableOpacity>
                </View>

                {/* khuyến mại */}
                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Khuyến mại</Text>
                    <TouchableOpacity>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={voucherdata}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <Voucher voucher_item={item} />
                        }
                    />
                </View>
                {/* lịch trình gần đây */}
                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Lịch trình gần đây</Text>
                    <TouchableOpacity>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={sheduleNowData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <SheduleNow sheduleNow_item={item} />
                        }
                    />
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '100%',

    }, header_bottom: {
        position: 'absolute',
        top: 10, left: 0,
        paddingHorizontal: 14
    },
    header: {
        fontSize: 18,
        color: '#FFFFFF',
        lineHeight: 21,
        paddingTop: 35,
        fontWeight: 'bold'
    },
    shedule: {
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: 'normal',
        paddingTop: 4
    },
    input: {
        height: 40,
        // width:358,
        marginTop: 7,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#F7F7F7',
        borderRadius: 5,
        shadowColor: "rgba(140, 178, 236, 0.3)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        fontSize: 12,
        elevation: 5
    },
    header_title: {
        flexDirection: 'row',
        marginTop: 45,
        justifyContent: 'space-evenly'
    },
    touchable: {
        backgroundColor: '#FF5F24',
        width: 178,
        height: 25,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchable_title: {
        color: '#FFFFFF',
        fontSize: 12,
        lineHeight: 14,
        fontWeight: 'normal'
    },
    Discount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 19
    },
    discount_title: {
        color: '#000000',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: 'bold'
    }
    ,
    discount_title1: {
        color: '#9E9E9E',
        fontSize: 12,
        lineHeight: 14,
        fontWeight: 'normal'
    },
    header_shedule: {
        flexDirection: 'row',marginHorizontal:4
    },
    left1: {
        flex: 1,

    },
    right1: {
        flex: 4,
       
    },
    schedule_bottom:{
        flexDirection:'row',marginTop:5
    }
})
export default Home