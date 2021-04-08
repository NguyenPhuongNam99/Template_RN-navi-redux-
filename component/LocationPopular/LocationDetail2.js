import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView ,TouchableOpacity,FlatList} from 'react-native';

const LocationDetail2 = () => {
    const Destination = ({ Destination_item }) => {
        return (
            <View>
                <Image style={{ width: 150, height: 200, borderRadius: 5, marginHorizontal: 11 }} source={Destination_item.image} />
                <Text style={{ position: 'absolute', bottom: 8, left: 19, color: '#FFFFFF', fontSize: 14, fontWeight: '600' }}>{Destination_item.name}</Text>
            </View>


        )
    }
    const Desdata = [
        {
            id: 1,
            image: require('../../assets/hl2.jpeg'),
            name:'Lý Sơn, Quảng Ngãi'
        },
        {
            id: 2,
            image: require('../../assets/hl1.jpg'),
            name:'Thạch Thất ,Hà Nội'
        },
        {
            id: 3,
            image: require('../../assets/hl.jpg'),
            name: 'Phú Quốc'
        },
        {
            id: 4,
            image: require('../../assets/cl3.jpg'),
            name: 'Hà Nội'
        },
        {
            id: 5,
            image: require('../../assets/hl3.jpg'),
            name: 'Thạch Thất'
        },
        //điểm đến 


    ]
    return (
        <ScrollView>
            <View style={styles.container}>
                <View >
                    <View style={styles.top}>
                        <Image style={styles.image} source={require('../../assets/lson.jpg')} />
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.text_Header}>Khám phá Đảo bé</Text>
                        <View style={styles.block_body}>
                            <Image style={{ width: 10, height: 11 }} source={require('../../assets/location1.png')} />
                            <Text style={styles.location}>Lý Sơn ,Quảng Ngãi</Text>
                        </View>
                    </View>
                    <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '100%' }}>

                    </View>
                </View>
                <View>
                    <View style={styles.map}>
                        <Image
                            style={styles.image_map}
                            source={require('../../assets/map5.png')}
                        />
                    </View>
                    <View style={styles.image_block}>
                        <View style={styles.image_block1}>
                            <Image
                                style={styles.image_blkock2}
                                source={require('../../assets/lson1.jpg')}
                            />
                        </View>
                        <View style={styles.image_block1}>
                            <Image
                                style={styles.image_blkock2}
                                source={require('../../assets/lson2.jpg')}
                            />
                        </View>
                        <View style={styles.image_block1}>
                            <Image
                                style={styles.image_blkock2}
                                source={require('../../assets/lson3.jpg')}
                            />

                            <View style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', width: '100%', height: '100%' }} />
                            <View style={{ position: 'absolute', top: 50, left: '42%', zIndex: 100 }}>
                                <Image

                                    source={require('../../assets/sum.png')} />
                            </View>

                        </View>
                    </View>

                    <View style={styles.headerText}>
                        <Text style={styles.title_header}>Di chuyển từ Đảo lớn sang Đảo bé</Text>
                        <View>
                            <Text style={styles.text}>
                                Để di chuyển từ Đảo Lớn sang Đảo Bé du khách sẽ di chuyển bằng Ca Nô.
                                Mỗi lượt vé ca nô khứ hồi hiện nay dành cho du khách là 80k/du khách/khứ hồi.
                            </Text>
                            <Text style={styles.text}>
                                Bảng giá thuê ca nô nguyên chiếc khứ hồi:
                            </Text>

                            <Text style={{fontSize:13, color:'#333333',fontWeight:'900'}}>
                                - Ca nô 25 chỗ: 1600k.
                            </Text>
                            <Text style={{fontSize:13, color:'#333333'}}>- Ca nô 35 chỗ: 2600k.</Text>
                            <Text style={{fontSize:13, color:'#333333'}}>- Ca nô 40 chỗ: 3100k.</Text>
                        </View>
                        <Text style={styles.title_header1}>Thời điểm thích hợp để khám phá Đảo Bé Lý Sơn</Text>
                        <View>
                            <Text style={styles.text}>- Nếu đi Đảo Bé trong ngày, du khách nên xuất phát từ Đảo Lớn lúc sáng
                                 sau đó chiều về lại. Du khách ở lại Đảo Bé một ngày thì nên xuất phát 
                                 từ sáng và về lại lúc trưa ngày hôm sau.
                            </Text>
                            <Text style={styles.text}>
                            - Khi đi Đảo Bé du khách nên đi từ tháng 2 đến tháng 9. Đây là thời điểm du lịch Lý Sơn không có mưa gió.
                            </Text>
                        </View>
                        <Text style={styles.title_header1}>Chơi gì ở Đảo Bé</Text>
                        <Text style={styles.title_header2}>Lặn ngắm san hô</Text>
                        <Text style={styles.text}>
                            
                            Rạn san hô ở Đảo Bé được đánh giá đẹp nhất Việt Nam. 
                            Du khách có thể lựa chọn thuê thuyền thúng đi lặn san hô.
                             Mỗi lần lặn san hô như vậy là giá 80k/người. Giá lặn san 
                             hô đã bao gồm tiền thuê kính, thuê áo phao. 

                        </Text>
                        <Text style={styles.title_header2}>Tắm biển ở Đảo Bé.</Text>
                        <Text style={styles.text}>
                            
                        Bãi Sau là bãi tắm nổi tiếng nhất tại Lý Sơn. Ở bãi tắm có 
                        nhiều bãi đá đen trầm tích để du khách có thể check-in với 
                        những tấm ảnh ấn tượng. Ở Bãi Sau sóng biển khá là bình
                         yên nên việc tắm biển rất thích thú.

                        </Text>
                        <Text style={styles.title_header2}>Check-in cây cô đơn và cầu sống ảo.</Text>
                        <Text style={styles.text}>
                        Cây phong ba dù đứng một mình ở Bãi Tây vẫn được cư dân mạng phong tặng là cây 
                        cô đơn ở Lý Sơn. Cây có hình dáng lạ, đẹp được nhiều du khách ưu thích check-in. 
                        Ngoài cây cô đơn trên Đảo Bé còn có cây cầu sống ảo du khách không thể bỏ qua.
                        </Text>
                        <Text style={styles.title_header2}>Ở lại homestay tại Đảo Bé.</Text>
                        <Text style={styles.text}>
                        So với các homestay trên Đảo Lớn thì hiện tại ở Đảo Bé có rất nhiều homestay giúp du khách có thể gần gũi 
                        với thiên nhiên. Buổi tối bạn có muốn 
                        tổ chức một buổi tiệc BBQ trên biển thật sự hay 
                        căm trại tại Đảo Bé. Đây sẽ là những trải nghiệm mà không phải ai cũng có thể có được khi đến Lý Sơn.
                        </Text>
                    </View>



                </View>
                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Địa điểm phổ biến</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('DestionationPopular')}>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 ,paddingBottom:20}}>
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
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        height: 240,
        // backgroundColor:'green'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    block: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        zIndex: 100
    },
    block_body: {
        flexDirection: 'row',
        paddingTop: 7

    },
    text_Header: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 21,
        fontStyle: 'normal',
        fontFamily: 'sf-ui-display-thin-58646e9b26e8b'

    },
    location: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 'normal',
        paddingLeft: 7

    },
    position: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // width: '100%',
        // backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 240,
        // zIndex:100
    },
    map: {
        height: 140,
        marginTop: 20,
        resizeMode: 'center'

    },
    image_map: {
        width: '100%',
        height: '100%',

    },
    image_block1: {
        width: 104, height: 104,
        marginHorizontal: 16,
        marginVertical: 16
    },
    image_blkock2: {
        width: '100%', height: '100%'
    },
    image_block: {
        flexDirection: 'row'
    },
    headerText: {
        marginHorizontal: 16,
        color: '#333333',
       
    },
    title_header: {
        color: '#000000',
        fontWeight: '600',
        fontFamily: 'sf-ui-display-bold-58646a511e3d9',
        lineHeight: 18,
        paddingBottom:8,
        
    },
    title_header1: {
        color: '#000000',
        fontWeight: '600',
        fontFamily: 'sf-ui-display-bold-58646a511e3d9',
        lineHeight: 18,
        
        paddingTop:10
    }
    ,
    title_header2: {
        color: '#000000',
        fontWeight: 'normal',
        fontFamily: 'sf-ui-display-semibold-58646eddcae92',
        lineHeight: 18,
        paddingBottom:8,
        fontSize:13,
        paddingTop:8
    },
    text:{
        marginVertical:6,
        fontSize:13,
        fontWeight:'normal',
        color:'#333333',lineHeight:17
    }
    ,
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
export default LocationDetail2;