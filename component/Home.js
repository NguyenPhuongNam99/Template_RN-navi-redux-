import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import HotelResort_Header from '../component/LocationPopular/HotelResort_Header'
import {useDispatch} from 'react-redux'
import {data,voucherdata,sheduleNowData,Desdata,Expe,DiemDen,Hoteldata} from '../Data/HomeData'
const Home = ({navigation}) => {
    //data icon Top
    const dispatch = useDispatch();
    const checkHotel =(item)=>{
        navigation.navigate('Hotel'),
        dispatch({type:'CheckHotel',hotel:item})
    }
    const checkDestination =(item )=>{
        dispatch({type:'LocationPopular',locationpopular:item})
        navigation.navigate('LocationDetail')
  
}
   
    const check =(item)=>{
        if(item == 2){
            console.log('da klich Hotel_icon')
            navigation.navigate('Hotel_Icon')
        }
        if(item ==5){
            console.log('Da Kich Restẩunty')
            navigation.navigate('RestaurantIcon')
        }
        if(item==1){
            // navigation.navigate('AllShedule')
            navigation.navigate('OverView')
        }
        if(item ==3){
            navigation.navigate('SelectSchedule')
        }
        if(item ==4){
            // navigation.navigate('CreateSchedule')
           navigation.navigate('ScreenSuggest')

        }

    } 
    const Item = ({ item }) => {
        return (
            <TouchableOpacity onPress={()=>check(item.id)}>
                 <View style={{ flexDirection: 'column', paddingHorizontal: 11, paddingTop: 29 }}>
                <Image style={{ width: 35, height: 35, marginBottom: 6, marginHorizontal: 4 }} resizeMode='cover' source={item.img} />
                <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '500', lineHeight: 14 }}>{item.title}</Text>
            </View>
            </TouchableOpacity>
           
        )
    }
    //voucher
    const Voucher = ({ voucher_item }) => {
        return (
            <Image style={{ width: 300, height: 150, marginHorizontal: 6, borderRadius: 5 }} source={voucher_item.image} />

        )
    }
    //lịch trình
    const SheduleNow = ({ sheduleNow_item,ScheduleNowNavigation }) => {
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
                        <TouchableOpacity style={{ backgroundColor: '#FF5F24', width: 104, height: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 5,marginTop:4 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'normal', }}>5,200,000 đ/ người</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const Destination = ({ Destination_item ,checkDestination}) => {
        return (
            <TouchableOpacity onPress={checkDestination}>
                <Image style={{ width: 150, height: 200, borderRadius: 5, marginHorizontal: 11 }} source={Destination_item.image} />
                <Text style={{ position: 'absolute', bottom: 8, left: 19, color: '#FFFFFF', fontSize: 14, fontWeight: '600' }}>{Destination_item.name}</Text>
            </TouchableOpacity>


        )
    }

    //trải nghiệm Experient

    const Experient = ({ Experient_item }) => {
        return (
            <View >
                <View>
                    <Image style={{ width: 200, height: 200, borderRadius: 5, marginHorizontal: 11 }} source={Experient_item.image} />

                </View>
                {/* <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'600',width:100}}>{Experient_item.name}</Text> */}
                <View style={{ marginTop: 12, marginHorizontal: 13 }}>

                    <Text style={{ fontFamily: 'Roboto-Black', lineHeight: 17, color: '#000000', fontSize: 14, fontWeight: '500', fontStyle: 'normal' }}>{Experient_item.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                        <Image style={{ width: 12, height: 14, borderRadius: 14 }}

                            source={Experient_item.location} />
                        <Text style={{ paddingLeft: 4 }}>{Experient_item.des}</Text>
                    </View>
                </View>

            </View>


        )
    }
    const Destination1 = ({ Destination1_item }) => {
        return (
            <View>
                <Image style={{ width: 150, height: 200, borderRadius: 5, marginHorizontal: 11 }} source={Destination1_item.imagedd} />
                <Text style={{ position: 'absolute', bottom: 8, left: 19, fontSize: 14, color: '#FFFFFF', fontWeight: '600' }}>{Destination1_item.namedd}</Text>
            </View>


        )
    }

    const Hotel = ({ HotelItem,check }) => {
        return (
            <TouchableOpacity onPress={check}>
                <Image style={{ width: 160, height: 150, borderRadius: 5, marginHorizontal: 11 }} source={HotelItem.image} />
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 9 }}>
                        <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#A2A2A2', marginHorizontal: 8 }}>{HotelItem.version}</Text>
                        <Image style={{ width: 62, height: 10, borderRadius: 5, marginTop: 4 }} source={HotelItem.comment} />

                    </View>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: '500', marginHorizontal: 11 }}>{HotelItem.name}</Text>
                    <View style={{ flexDirection: 'row' ,marginHorizontal:10,marginVertical:2}}>
                        <Image style={{ width: 12, height: 14, borderRadius: 14 }}

                            source={HotelItem.location} />
                        <Text style={{paddingHorizontal:10,fontSize:10,fontWeight:'normal',color:'#3076FE'}}>{HotelItem.des}</Text>
                    </View>
                    <Text style={{ fontSize: 12, color: '#FF2424', fontWeight: '500', marginHorizontal: 13}}>{HotelItem.price}</Text>

                </View>

            </TouchableOpacity>


        )
    }
    return (
        <View>
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
                        keyExtractor={(item) => item.id.toString()}
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
                    <TouchableOpacity onPress={()=>navigation.navigate('DiscountHeader')}>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={voucherdata}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <Voucher voucher_item={item} />
                        }
                    />
                </View>
                {/* lịch trình gần đây */}
                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Lịch trình gần đây</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('ScheduleHeader')}>
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
                            <SheduleNow sheduleNow_item={item}  />
                        }
                    />
                </View>
                {/* destination */}
                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Địa điểm phổ biến</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('DestionationPopular')}>
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
                            <Destination Destination_item={item} checkDestination={()=>checkDestination(item)} />
                        }
                    />
                </View>

                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Trải nghiệm nổi bật</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Destionation12')}>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={Expe}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <Experient Experient_item={item} />
                        }
                    />
                </View>

                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Điểm đến tháng 12</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('LocationPopular')}>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={DiemDen}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <Destination1 Destination1_item={item} />
                        }
                    />
                </View>



                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Khách sạn & Resort</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('HotelResort_Header')}>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={Hoteldata}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <Hotel HotelItem={item} check= {()=>checkHotel(item)}/>
                        }
                    />
                </View>
              
                
             
            </View>
        </ScrollView>
           <Image style={{position:'absolute',
           bottom:0,right:0,zIndex:1000}} source={require('../assets/e.png')} />
           </View>
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
        fontWeight: 'bold',
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

        elevation: 5,
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
})
export default Home






