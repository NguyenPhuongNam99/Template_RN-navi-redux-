import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList ,ScrollView} from 'react-native'
import {ScheduleNowData} from '../../Data/ScheduleData'
import { ProfileDta } from '../../HotelData'
import ScheduleNow_Item from '../../component/ScheduleNow_Item'
import Header from '../Header'
const MyProfile = ({ navigation }) => {
    const goback = () => {
        navigation.goBack()
    }
    const Destination1 = ({ Destination1_item }) => {
        return (
            <View>
                <Image style={{ width: 150, height: 200, borderRadius: 5, marginHorizontal: 11 }} source={Destination1_item.image} />
                <Text style={{ position: 'absolute', bottom: 8, left: 19, fontSize: 14, color: '#FFFFFF', fontWeight: '600' }}>{Destination1_item.name}</Text>
            </View>


        )
    }
    return (
        <View style={styles.container}>
            <Header Name='Thông tin cá nhân' back={goback} />
            <ScrollView>
            <View style={styles.headerInfor}>
                <View style={styles.HeaderLeft}>
                    <Image style={styles.image_avatar} source={require('../../assets/nam.jpg')} />

                </View>
                <View style={styles.HeaderRight}>
                    <View style={styles.top}>
                        <View style={styles.HeaderTop}>
                            <Text style={styles.follow}>100</Text>
                            <Text>Người theo dõi</Text>
                        </View>

                        <View style={styles.HeaderBottom}>
                            <Text style={styles.follow}>200</Text>
                            <Text>Đang theo dõi</Text>
                        </View>
                    </View>

                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, paddingTop: 10 }}>
                <View style={styles.BottomTop}>
                    <Text style={styles.name}>Phương Nam</Text>
                </View>
                <View style={styles.Bottom}>
                    <TouchableOpacity>
                        <Text style={styles.textTouchable}>Sửa thông tin cá nhân </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Discount}>
                <Text style={styles.discount_title}>Bài viết đánh giá </Text>
                <TouchableOpacity onPress={() => navigation.navigate('ScheduleHeader')}>
                    <Text style={styles.discount_title1}>Xem thêm ></Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <FlatList
                    data={ProfileDta}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <Destination1 Destination1_item={item} />
                    }
                />
            </View>
            <View>
                <Text style={styles.display}>Xem ảnh </Text>
                <View style={styles.Father}>
                    <View style={styles.FatherLeft}>
                        <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/ct22.jpg')} />
                    </View>
                    <View style={styles.FatherRight}>
                        <View style={styles.FatherRighTop}>
                            {/* //0.48 */}
                            <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/ct3.jpg')} />
                        </View>
                        <View style={styles.FatherRighbottom}>
                            {/* //0.52
                            0.48 */}
                            <View style={styles.bottomTop}>
                                <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/ct5.jpg')} />
                            </View>
                            <View style={styles.bottomFooter}>
                                <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/ct4.png')} />
                                <View style={{backgroundColor:'rgba(0, 0, 0, 0.4)',position:'absolute',top:0,left:0,
                            width:'100%',height:'100%'}}/>
                                <Image style={{position:'absolute',top:'42%',left:'42%'}} source={require('../../assets/sum.png')} />
                                
    
                            </View>

                           
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Lịch trình của tôi</Text>
                    <TouchableOpacity >
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                        data={ScheduleNowData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <ScheduleNow_Item Item={item} />
                        }
                    />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerInfor: {
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image_avatar: {
        width: 65,
        height: 65,
        borderRadius: 28,

    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    HeaderLeft: {
        // backgroundColor:'green',
        flex: 2.5, alignItems: 'center',
        justifyContent: 'center'
    },
    HeaderRight: {
        // backgroundColor:'yellow',
        flex: 7
    },
    BottomTop: {
        flex: 0.3
    }
    , Bottom: {
        height: 30,
        flex: 0.7,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#A2A2A2',
        borderRadius: 5
    },
    follow: {
        paddingVertical: 15,
        textAlign: 'center'
    },
    name: {
        fontSize: 15,
        color: '#000000',
        fontWeight: '600',
        fontFamily: 'sf-ui-display-semibold-58646eddcae92'
    },
    textTouchable: {
        fontSize: 13,
        color: '#000000',
        fontWeight: '500',
        lineHeight: 16
        // fontFamily:'Roboto-Bold'
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
    display: {
        fontSize: 14,
        color: '#000000',
        fontWeight: 'bold',
        marginVertical: 20,
        marginHorizontal: 16
    },
    Father: {
        height: 160,

        marginHorizontal: 15,
        flexDirection: 'row'
    },
    FatherLeft: {
        flex: 0.4,

    },
    FatherRight: {
        flex: 0.6,

        marginLeft: 7
    },
    FatherRighTop: {
        flex: 0.48,

    },
    FatherRighbottom: {
        flex: 0.52,

        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 6
    },
    bottomTop: {
        flex: 0.48,

    },
    bottomFooter: {
        flex: 0.48,

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
        fontWeight: 'bold',
    }
    ,
    discount_title1: {
        color: '#9E9E9E',
        fontSize: 12,
        lineHeight: 14,
        fontWeight: 'normal'
    },
})
export default MyProfile