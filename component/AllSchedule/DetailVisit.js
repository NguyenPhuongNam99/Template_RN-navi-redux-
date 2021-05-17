import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList ,SafeAreaView} from 'react-native'
import { Desdata, Hoteldata } from '../../Data/HomeData'
import Header from '../Header'
import { scale, verticalScale, moderateScale ,ScaledSheet} from 'react-native-size-matters';

const DetailVisit = ({ navigation }) => {
    const goback = () => {
        navigation.goBack()
    }
    const Destination = ({ Destination_item }) => {
        return (
            <TouchableOpacity >
                <Image style={{ width: 150, height: 200, borderRadius: 5, marginHorizontal: 11 }} source={Destination_item.image} />
                <Text style={{ position: 'absolute', bottom: 8, left: 19, color: '#FFFFFF', fontSize: 14, fontWeight: '600' }}>{Destination_item.name}</Text>
            </TouchableOpacity>
        )
    }
    const Hotel = ({ HotelItem }) => {
        return (
            <TouchableOpacity>
                <Image style={{ width: 160, height: 150, borderRadius: 5, marginHorizontal: 11 }} source={HotelItem.image} />
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 9 }}>
                        <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#A2A2A2', marginHorizontal: 8 }}>{HotelItem.version}</Text>
                        <Image style={{ width: 62, height: 10, borderRadius: 5, marginTop: 4 }} source={HotelItem.comment} />

                    </View>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: '500', marginHorizontal: 11 }}>{HotelItem.name}</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 2 }}>
                        <Image style={{ width: 12, height: 14, borderRadius: 14 }}

                            source={HotelItem.location} />
                        <Text style={{ paddingHorizontal: 10, fontSize: 10, fontWeight: 'normal', color: '#3076FE' }}>{HotelItem.des}</Text>
                    </View>
                    <Text style={{ fontSize: 12, color: '#FF2424', fontWeight: '500', marginHorizontal: 13 }}>{HotelItem.price}</Text>

                </View>

            </TouchableOpacity>


        )
    }
    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView>
            <View style={styles.container}>
                <Header Name='Chi tiết thăm quan' back={goback} />
                <View style={styles.imgaHeader}>
                    <Image style={styles.imageavatar} source={require('../../assets/qn2.jpg')} />
                </View>
                <View style={styles.titleHeader}>
                    <Text style={styles.titleName}>Bãi Kỳ Co</Text>
                    <View style={styles.blockSub}>
                        <Text style={styles.titleLeft}>Vé vào cửa</Text>
                        <Text style={styles.price}>60.000đ/ vé</Text>
                    </View>
                    <View style={styles.blockSub}>
                        <Text style={styles.titleLeft}>Vé trung truyển</Text>
                        <Text style={styles.price}>40.000đ/ vé</Text>
                    </View>
                </View>

                <View style={styles.map}>
                    <Image style={styles.imagemap} source={require('../../assets/map7.jpg')} />
                </View>
                <View style={styles.location}>
                    <Image style={styles.imagelocation} source={require('../../assets/locationblack.png')} />
                    <Text>Phú Kim ,Thạch Thất , Hà Nội</Text>
                </View>
                <View style={scaleSheet.text}>
                    <View style={{marginVertical:10,width:'100%',height:'100%'}}>
                         <Text style={scaleSheet.textBody}>
                        Nằm dưới chân núi Phương Mai thuộc xã Nhơn Lý, cách thành phố Quy Nhơn 25km về phía Đông Bắc,
                         bãi Kỳ Co hiện lên như một bức tranh tuyệt đẹp động lòng người. Không chỉ hấp dẫn với bãi 
                         tắm hoang sơ ít dấu chân người mà Kỳ Co còn là điểm thưởng thức hải sản tươi ngon nữa. 
                         Để đến được bãi tắm xinh đẹp này, bạn di chuyển ra Quy Nhơn theo nhiều cách khác nhau. 
                         Bạn có thể đặt vé máy bay, đi tàu hỏa  với giá vé dao động từ 500k - 800k hoặc đi xe 
                         khách với giá vé từ 350k-400k. Từ Quy Nhơn bạn có thể thuê xe máy (khoảng 120k/ngày) 
                         hoặc bắt taxi đến Eo Gió (khoảng 250k). Sau đó từ Eo Gió thuê canô hoặc ghe ra Kỳ Co.
                        Ghe thường đậu cách bờ khoảng 100m, bạn sẽ được đưa vào bờ bằng những chiếc thuyền thúng 
                        dễ thương.  Nếu muốn thưởng thức những món hải sản đặc trưng của vùng biển, các bạn có 
                        thể đặt món rồi nhờ người dân ở đây chế biến luôn. Hải sản ở đây “bao tươi’ nên rất ngon, 
                        ra đây không thưởng thức là tiếc lắm nha mấy bạn. Tính chi phí cho việc đi nghe ra bãi Kỳ 
                        Co với thưởng thức hải sản chỉ tầm 300k/người thôi nhé!

                        </Text>
                    </View>
                   
                </View>
                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Địa điểm phổ biến</Text>
                    <TouchableOpacity >
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
                            //  checkDestination={()=>checkDestination(item)} 
                        }
                    />
                </View>

                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Nhà hàng đề xuất </Text>
                    <TouchableOpacity>
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
                            <Hotel HotelItem={item} />
                        }
                    />
                </View>

                 <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Khách sạn & Resort</Text>
                    <TouchableOpacity>
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
                            <Hotel HotelItem={item} />
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
    imgaHeader: {
        height: 155,
        marginTop:10
    },
    imageavatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    titleHeader: {
        height: 110,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        justifyContent: 'space-evenly'
    },
    blockSub: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleName: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    titleLeft: {
        color: '#000000',
        fontSize: 13
    },
    price: {
        color: '#FF5F24',
        fontSize: 13
    },
    map: {
        height: 155,
        marginTop: 20
    },
    imagemap: {
        width: '100%',
        height: '100%',

    },
    location: {
        height: 44,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    imagelocation: {
        width: 10,
        height: 10,
        marginRight: 10
    },
    text: {
        height: verticalScale(305),
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        paddingHorizontal: 15,
        marginBottom:200

    },
    textbody: {
        fontSize: 12,
        color: '#000000',
        lineHeight: 18,
        // paddingTop: 15
    },
    Discount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 20
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
const scaleSheet = ScaledSheet.create({
    text: {
        height: verticalScale(305),
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        paddingHorizontal: 15,
      
    },
    textBody:{
        fontSize:'10@ms0.3',
        color:'green',
        lineHeight: scale(14),
        // paddingT 15
    }
})
export default DetailVisit