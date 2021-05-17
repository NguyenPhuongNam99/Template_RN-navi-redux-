import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { scheduleData2, data } from '../../Data/OverViewData'
import OverView_Item from './OverView_Item'
import OverView_Plan from './OverView_Plan'
import OverViewHotel from './OverViewHotel'
import { OverView_VisitData } from '../../Data/OverView_VisitData'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenWidth,

} from "react-native-responsive-dimensions";
import OverViewPlant from './OverViewPlant'
import OverView_Visit from './OverView_Visit'
const OverView = ({ navigation }) => {

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
    const navigateDetailSchedule = () => {
        navigation.navigate('DetailSchedule')
        console.log('da kichj')
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
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: '2%', left: 15, zIndex: 1000 }}>
                    <Image style={{ width: 9, height: 12 }} source={require('../../assets/back1.png')} />
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                    <View style={styles.title}>
                        <Text style={styles.titleHeader}>Quy Nhơn ,Bình Định</Text>
                        <Text style={styles.titleFontSize}>5/12 -10/12</Text>
                    </View>

                    <View style={styles.option}>
                        {/* {
                            data.map((item) => (
                                <ScrollView>
                                    
                                </ScrollView>
                              
                            )
                            )
                        } */}
                        <FlatList 
                            data={data}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            keyExtractor={(item)=>item.id.toString()}
                            renderItem={({item})=>{
                                return(
                                      <TouchableOpacity key={item.id} onPress={() => dispatchdata(item.name)} style={[styles.touchable, getStyle(item.name)]}>
                                    <Text>{item.title}</Text>
                                </TouchableOpacity>
                                )
                            }}
                            />
                    </View>

                    {
                        statusOver === 'SCHEDULE' ? <OverView_Plan navigateDetailSchedule={navigateDetailSchedule} />
                            : statusOver === 'AIRPLANE' ? <OverViewPlant />
                                : statusOver === 'HOTEL' ? <OverViewHotel />
                                    : statusOver === 'VISIT' ? <OverView_Visit />
                                        : null
                    }

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
        alignItems: 'center',
        marginLeft:15
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

})
export default OverView