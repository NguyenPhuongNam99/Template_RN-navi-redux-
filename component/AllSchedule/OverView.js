import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { scheduleData2, data } from '../../Data/OverViewData'
import OverView_Item from './OverView_Item'
import OverView_Plan from './OverView_Plan'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenWidth,

} from "react-native-responsive-dimensions";
const OverView = () => {

    const dispatch = useDispatch();
    const statusOver = useSelector(state => state.statusOver)
    const dispatchdata = (Datatype) => {
        dispatch({ type: Datatype })
    }
    const getData = (statusName) => {
        if (statusOver == 'SCHEDULE') {
            return scheduleData
        }
        if (statusOver == 'HOTEL') {
            return hotelData
        }
        if (statusOver == 'AIRPLANE') {
            return airplaneData
        }
        if (statusOver == 'VISIT') {
            return visitData
        }
    }
    const getStyle = (statusName) => {
        if (statusOver === statusName) {
            return {
                backgroundColor: '#FF5F24',
                borderRadius: 5
            }
        }
        else {
            return { backgroundColor: '#ECF1FF', borderRadius: 5 }
        }
    }

    return (



        <View style={styles.container}>
            <ScrollView vertical={true} nestedScrollEnabled={true}
                contentContainerStyle={{
                    flexGrow: 1,
                }}>
                <View style={{ height: 150 }}>


                    <View style={styles.headerImage}>
                        <Image style={styles.imageBanner} source={require('../../assets/qn1.jpg')} />
                    </View>

                    <View style={styles.blockAvatar}>
                        <Image style={styles.avatar} source={require('../../assets/nam.jpg')} />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.title}>
                        <Text style={styles.titleHeader}>Quy Nhơn ,Bình Định</Text>
                        <Text style={styles.titleFontSize}>5/12 -10/12</Text>
                    </View>

                    <View style={styles.option}>
                        {
                            data.map((item) => (
                                <TouchableOpacity key={item.id} onPress={() => dispatchdata(item.name)} style={[styles.touchable, getStyle(item.name)]}>
                                    <Text>{item.title}</Text>
                                </TouchableOpacity>
                            )
                            )
                        }
                    </View>
                    {/* <OverView_Plan /> */}
                    <View >
                        <View style={styles.shedule}>
                            <Text style={styles.sheduleAir}>Hà Nội - Quy Nhơn</Text>
                            <View>
                                <View style={styles.plantAir}>
                                    <Text style={styles.sheduleAir}>HAN</Text>
                                    <Image style={{ width: 10, height: 8 }} source={require('../../assets/ia.png')} />
                                    <Text style={styles.sheduleAir}>UIH</Text>
                                </View>
                                <Text style={styles.timerAir}>Thứ 5, 5 tháng 12, 2019</Text>
                            </View>
                            <Image style={styles.imagViet} source={require('../../assets/viet.png')} />
                            <Text style={styles.nameAir}>Chuyến bay: VJ345</Text>
                        </View>

                        <View style={styles.BlockInfoAir}>
                            <View>
                                <Text style={styles.name}>HAN</Text>
                                <Text style={styles.timer}>13:00</Text>
                            </View>
                            <View style={{ width: responsiveWidth(20), borderBottomColor: '#828282', borderBottomWidth: 0.5 }} />
                            <View>
                                <Text style={{ textAlign: 'center' }}>1h35m</Text>
                                <Text>Hạng thương gia</Text>
                            </View>
                            <View style={{ width: responsiveWidth(20), borderBottomColor: '#828282', borderBottomWidth: 0.5 }} />
                            <View>
                                <Text style={styles.name}>UNI</Text>
                                <Text style={styles.timer}>13:00</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 25 }}>
                            <View style={{ padding: 'auto', borderBottomWidth: 1, width: responsiveWidth(40) }} />
                        </View>


                    </View>

                    <View >
                        <View style={styles.shedule}>
                            <Text style={styles.sheduleAir}> Quy Nhơn - Hà Nội </Text>
                            <View>
                                <View style={styles.plantAir}>
                                    <Text style={styles.sheduleAir}>UNI</Text>
                                    <Image style={{ width: 10, height: 8 }} source={require('../../assets/ia.png')} />
                                    <Text style={styles.sheduleAir}>HAN</Text>
                                </View>
                                <Text style={styles.timerAir}>Thứ 5, 5 tháng 12, 2019</Text>
                            </View>
                            <Image style={styles.imagViet} source={require('../../assets/viet.png')} />
                            <Text style={styles.nameAir}>Chuyến bay: VJ345</Text>
                        </View>

                        <View style={styles.BlockInfoAir}>
                            <View>
                                <Text style={styles.name}>UNI</Text>
                                <Text style={styles.timer}>10:00</Text>
                            </View>
                            <View style={{ width: responsiveWidth(20), borderBottomColor: '#828282', borderBottomWidth: 0.5 }} />
                            <View>
                                <Text style={{ textAlign: 'center' }}>1h35m</Text>
                                <Text>Hạng thương gia</Text>
                            </View>
                            <View style={{ width: responsiveWidth(20), borderBottomColor: '#828282', borderBottomWidth: 0.5 }} />
                            <View>
                                <Text style={styles.name}>HNA</Text>
                                <Text style={styles.timer}>11:00</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 25 }}>
                            <View style={{ padding: 'auto', borderBottomWidth: 1, width: responsiveWidth(40) }} />
                        </View>


                    </View>

                </View>

                <View style={styles.touchableEnd}>
                    <Text style={styles.price}>5,200,000 đ/người</Text>
                    <TouchableOpacity style={{ backgroundColor: '#FF5F24', width: 71, height: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                        <Text style={styles.order}>Đặt ngay</Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, zIndex: 100
    },
    headerImage: {
        height: 150,
        backgroundColor: 'green',
        position: 'relative',

    },
    imageBanner: {
        width: '100%',
        height: '100%'
    },
    blockAvatar: {
        // justifyContent:'center',
        // alignItems:'center',
        position: 'absolute',
        bottom: -18,
        left: '45%'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 20
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        marginTop: 20
    },
    titleHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2
    },
    titleFontSize: {
        color: '#333333',
        fontSize: 12
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 20

    },
    touchable: {
        width: 85,
        height: 30,
        // backgroundColor:'#FF5F24',
        justifyContent: 'center',
        alignItems: 'center'
    },

    //body
    titleHeader: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    touchableEnd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        height: 55,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 20,
        paddingHorizontal: 15
    },
    price: {
        fontSize: 16,
        color: '#FF5F24',
        fontWeight: 'bold',

    },
    order: {
        color: '#FFFFFF'
    },


    ///máy bay
    shedule: {
        justifyContent: 'center',
        alignItems: 'center'
    }, plantAir: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10
    }, sheduleAir: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    timerAir: {
        fontSize: 12,
        marginTop: 8
    },
    imagViet: {
        width: 40,
        height: 15,
        marginTop: 16
    },
    nameAir: {
        fontSize: 12,
        color: '#828282', marginTop: 16
    },
    BlockInfoAir: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 18


    },
    name: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    timer: {
        fontWeight: '600',
        fontSize: 12
    }
})
export default OverView