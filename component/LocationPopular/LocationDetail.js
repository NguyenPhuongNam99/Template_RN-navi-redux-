import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList, Touchable } from 'react-native';
import { LocationDetail_Data, LocationDetail_Data2, LocationDetail_Data3, LocationDetail_Data1 } from '../../Data/LocationDetail_Data'
import LocationItem from '../LocationPopular/LocationItem'
import { LocationDetail1, RestauRantnear } from '../../HotelData'
import MultipleDetail from '../MultipleDetail'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector,useDispatch} from 'react-redux'
import {Discovery} from '../../Data/LocationPopular_Data'

const LocationDetail = ({navigation}) => {
    const dispatch = useDispatch();
    const back =()=>{
        navigation.goBack()
    }
    const locationpopular = useSelector(state=>state.locationpopular)
    const check =(item)=>{
        // if(item == 1){
        //     console.log('da klich Hotel_icon')
            navigation.navigate('RestaurantDetail')
        // }
        // if(item ==4){
        //     console.log('Da Kich Restẩunty')
        //     navigation.navigate('RestaurantIcon')
        // }
    } 
    const check1 =(Experient_item)=>{
        dispatch({type:'Discovery',discovery:Experient_item})
        navigation.navigate('LocationDetail2')
    }
    const pass =(Item)=>{
      
             dispatch({type:'ADDDISCOUNT',item:Item})
    }
    const checkHotel= (item)=>{
        navigation.navigate('Hotel')
        dispatch({type:'CheckHotel',hotel:item})
    }
    const Experient = ({ Experient_item }) => {
        return (
            <TouchableOpacity onPress={()=>check1(Experient_item)}>
            <View >
                <View>
                    <Image style={{ width: 200, height: 200, borderRadius: 5, marginHorizontal: 11 }} source={Experient_item.image} />

                </View>
                {/* <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'600',width:100}}>{Experient_item.name}</Text> */}
                <View style={{ marginTop: 12, marginHorizontal: 13 }}>

                    <Text style={{ lineHeight: 17, color: '#000000', fontSize: 14, fontWeight: 'bold', fontStyle: 'normal' }}>{Experient_item.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                        <Image style={{ width: 12, height: 14, borderRadius: 14 }}

                            source={Experient_item.location} />
                        <Text style={{ paddingLeft: 4 }}>{Experient_item.des}</Text>
                    </View>
                </View>

            </View>
            </TouchableOpacity>

        )
    }
    // require('../../assets/lyson.jpg')
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.conatiner}>
                <View style={styles.header}>
                    <Image style={styles.header_image} source={locationpopular.image} />
                    {/* <View>
                        <View style={{position:'absolute',top:20,left:30,zIndex:30}}>
                            <Image style={{backgroundColor:'green',width:200,height:80,}} source={require('../../assets/back1.png')}/>
                        </View>
                        <View>
                          
                        </View>
                    </View> */}
                </View>
                <View>
                    <TouchableOpacity style={{position:'absolute',top:-145,left:16,zIndex:30}} onPress={()=>back()}>
                    <Icon name="chevron-left" size={12} color="#FFFFFF" />
                          {/* <Image style={{width:8,height:10,position:'absolute',top:-145,left:16,zIndex:30}}  source={require('../../assets/back1.png')}/> */}
                    </TouchableOpacity>
                    
                </View>
                <View>
                <TouchableOpacity style={{position:'absolute',top:-145,right:16,zIndex:30}} onPress={()=>back()}>
                    <Icon name="search" size={12} color="#FFFFFF" />
                          {/* <Image style={{width:8,height:10,position:'absolute',top:-145,left:16,zIndex:30}}  source={require('../../assets/back1.png')}/> */}
                    </TouchableOpacity>
                </View>
                <View style={{ height: 210, backgroundColor: '#FFFFFF', paddingHorizontal: 10, position: 'absolute', top: 150, left: 0, borderTopRightRadius: 13, borderTopLeftRadius: 13 }}>
                    <View style={styles.title}>
                        <Text style={styles.title_location}>Đảo Lý Sơn - Vương quốc tỏi</Text>
                        <View style={styles.location}>
                            <Image source={require('../../assets/location.png')} />
                            <Text style={styles.location2}> Quảng Ngãi, Việt Nam </Text>
                        </View>
                        <Text style={styles.text}>
                            Đảo Lý Sơn không chỉ được mệnh danh là “Vương quốc tỏi”
                            mà còn có “Đảo ngọc” Cù Lao Ré. Sức hút của đảo Lý Sơn nằm
                            ở chiến tích lịch sử lẫy lừng, ở những con người miền...
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.more}> Xem thêm</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.touchable}>
                            <Text style={styles.touchable_text}>Tạo lịch trình</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ height: 120, marginTop: 190 }}>
                    <Image source={require('../../assets/map1.png')} style={{ height: '100%', width: '100%' }} />
                </View>

                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Lịch trình OKGO đề xuất</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('DiscountHeader')}>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={LocationDetail_Data}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <LocationItem Item={item} />
                    }


                />


                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Lịch trình tạo gần đây </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('DiscountHeader')}>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={LocationDetail_Data1}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <LocationItem Item={item} />
                    }


                />
                <View style={styles.Discount}>
                  
                    <Text style={styles.discount_title}>Khách sạn</Text>
                   
                    <TouchableOpacity>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={LocationDetail1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            //Tạo component rồi gọi đến
                            <MultipleDetail Item={item} check={()=>checkHotel(item)}/>
                        }
                    />
                  {/* để hàm pass lên đây ,,,,khi click ở dưới tab nhà hàng thì nó sẽ báo pass undefine */}
                </View>


                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Nhà hàng </Text>
                    <TouchableOpacity>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={RestauRantnear}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>{
                          
                            //Tạo component rồi gọi đến
                           return <MultipleDetail Item={item}  pass={()=>pass(item)} check ={()=>check(item)}/>
                        }
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
                        data={Discovery}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <Experient Experient_item={item} />
                        }
                    />
                </View>


            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        position: 'relative'
    },
    header: {
        height: 190,
        backgroundColor: 'green'
    },
    header_image: {
        width: '100%',
        height: '100%'
    },
    Headmap: {
        height: 315,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: 160,
        left: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        zIndex: 10,
        marginBottom: 20

    },
    map_title: {
        flex: 0.62,
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,

    },

    title_location: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#000000',
        fontFamily: 'sf-ui-display-bold-58646a511e3d9',
        paddingTop: 16,
        paddingBottom: 7
    },
    text: {
        color: '#000000',
        fontFamily: 'sf-ui-display-medium-58646be638f96'
    },
    location: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    location2: {
        color: '#3076FE',
        fontSize: 10,
        lineHeight: 12,
        paddingLeft: 6

    },
    more: {
        textAlign: 'center',
        paddingTop: 13,
        color: '#FF5F24',
        paddingBottom: 11,
        fontSize: 14,

    },
    touchable: {
        backgroundColor: '#FF5F24',
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30
    },
    touchable_text: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'sf-ui-display-semibold-58646eddcae92'
    },
    image_map: {

        width: '100%',
        height: '100%'

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


})
export default LocationDetail;

