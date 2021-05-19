import React, { useState ,useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native'
import Header from '../../component/Header'
import { Suggestion_toYou } from '../../HotelData'
import MultipleDetail from '../MultipleDetail'
import { HomeStay } from '../../Data/RestaurantData'
import { Desdata, sheduleNowData } from '../../Data/HomeData'
import { useSelector, useDispatch } from 'react-redux'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const NearSearch = ({ navigation }) => {
    const goback = () => {
        navigation.goBack()
    }
    const [testData, setTestData] = useState(Suggestion_toYou)
    const [testDouble, setTestDouble] = useState(false)
    const clickLocation = useSelector(state => state.clickLocation)
    const [dataSearch, setDataSearch] = useState(Suggestion_toYou)
    const [checkData, setCheckData] = useState(true);
    useEffect(()=>{
        checkIdentifiled();
        console.log('hello')
    },[checkIdentifiled])
    const checkIdentifiled = () => {
        const checkuh = Suggestion_toYou.some((item) => {
            if (item.location2 === clickLocation.location) {
                return true;
            }
        })
        if (checkuh === true) {
            // const check2 = Suggestion_toYou.filter((item) => {
            //     if (item.des === clickLocation) {
            //         return item
            //     }
            // })
            // setTestData(check2)
            setTestDouble(true)
            console.log('da checkuk')
        }
        else {
            // setTestData(Suggestion_toYou)
            setTestDouble(false)
        }
    }



    const Destination = ({ Destination_item }) => {
        return (
            <TouchableOpacity >
                <Image style={{ width: 150, height: 200, borderRadius: 5, marginHorizontal: 11 }} source={Destination_item.image} />
                <Text style={{ position: 'absolute', bottom: 8, left: 19, color: '#FFFFFF', fontSize: 14, fontWeight: '600' }}>{Destination_item.name}</Text>
            </TouchableOpacity>


        )
    }
    const SheduleNow = ({ sheduleNow_item, ScheduleNowNavigation }) => {
        return (
            <TouchableOpacity style={styles.container_header} onPress={ScheduleNowNavigation}>


                <View style={styles.header_shedule}>
                    <View style={styles.left1}>
                        <Image style={{ width: 120, height: 160, borderTopLeftRadius: 5 }} source={sheduleNow_item.image} />
                    </View>
                    <View style={styles.right1}>
                        <Image style={{ width: 174, height: 77, marginHorizontal: 6, borderRadius: 5 }} resizeMode='cover' source={sheduleNow_item.image2} />
                        <View style={styles.schedule_bottom}>
                            <Image style={{ width: 84, height: 77, marginHorizontal: 6, }} resizeMode='cover' source={sheduleNow_item.image4} />
                            <Image style={{ width: 84, height: 77, }} resizeMode='cover' source={sheduleNow_item.image3} />
                        </View>
                    </View>


                </View>
                <View style={styles.header_title_block}>
                    <View style={styles.left_header}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>{sheduleNow_item.title} </Text>
                            <Text>{sheduleNow_item.time}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 3, paddingRight: 4 }}>
                            <Image style={{ width: 25, height: 25, marginHorizontal: 6, borderRadius: 14 }}
                                resizeMode='cover'
                                source={sheduleNow_item.avatar} />
                            <View >
                                <Text>{sheduleNow_item.name}</Text>
                                <Text>{sheduleNow_item.timmer}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.right_header}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 12, height: 13, marginHorizontal: 6, borderRadius: 14 }}

                                source={sheduleNow_item.location} />
                            <Text>{sheduleNow_item.des}</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#FF5F24', width: 104, height: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 4 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'normal', }}>5,200,000 đ/ người</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <Header Name='Gợi ý gần đây' back={goback} />
                    {
                        testDouble ? 
                            <View>
                                <View style={styles.Discount}>
                                    <Text style={styles.discount_title}>Khách sạn & Resort</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailDiscount')}>
                                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                                    <FlatList
                                        data={Suggestion_toYou}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        keyExtractor={(item) => item.id.toString()}
                                        renderItem={({ item }) =>
                                            //Tạo component rồi gọi đến
                                            <MultipleDetail Item={item} />
                                        }
                                    />
                                </View>
                            </View>

                            :
                            <View style={{height:180,justifyContent:'center',alignItems:'center'}}>
                                <Text>Không có dữ liệu</Text>
                            </View>
                            
                    }

                    <View style={styles.Discount}>
                        <Text style={styles.discount_title}>Homestay</Text>
                        <TouchableOpacity>
                            <Text style={styles.discount_title1}>Xem thêm ></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                        <FlatList
                            data={HomeStay}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) =>
                                //Tạo component rồi gọi đến
                                <MultipleDetail Item={item} />
                            }
                        />
                    </View>

                    <View style={styles.Discount}>
                        <Text style={styles.discount_title}>Địa điểm phổ biến</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('DestionationPopular')}>
                            <Text style={styles.discount_title1}>Xem thêm ></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                        <FlatList
                            data={Desdata}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) =>
                                <Destination Destination_item={item} />
                            }
                        />
                    </View>

                    <View style={styles.Discount}>
                        <Text style={styles.discount_title}>Lịch trình gần đây</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ScheduleHeader')}>
                            <Text style={styles.discount_title1}>Xem thêm ></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                        <FlatList
                            data={sheduleNowData}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) =>
                                <SheduleNow sheduleNow_item={item} />
                            }
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
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
    container_header: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: 'white',
        elevation: 2,
        marginBottom: 20, marginRight: 15
    },
    header_shedule: {
        flexDirection: 'row', marginHorizontal: 4
    },
    left1: {
        flex: 1,

    },
    right1: {
        flex: 4,

    },
    schedule_bottom: {
        flexDirection: 'row', marginTop: 5
    },
    header_title_block: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16
    }
    ,
    topokk: {
        height: verticalScale(213),
        backgroundColor: 'green'
    },
    block: {
        height: verticalScale(104),
        marginTop: verticalScale(50),
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    child: {
        height: verticalScale(104),
        backgroundColor: 'orange',
        width: scale(104)
    },
})
export default NearSearch;