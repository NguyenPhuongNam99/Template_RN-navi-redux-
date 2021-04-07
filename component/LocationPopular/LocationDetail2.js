import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const LocationDetail2 = () => {
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
                            <Text>Để di chuyển từ Đảo Lớn sang Đảo Bé
                            du khách sẽ di chuyển bằng Ca Nô. Mỗi
                            lượt vé ca nô khứ hồi hiện nay dành cho
                            du khách là 80k/du khách/khứ hồi.
                            </Text>
                            <Text>
                                Bảng giá thuê ca nô nguyên chiếc khứ hồi:
                            </Text>

                            <Text>
                                - Ca nô 25 chỗ: 1600k.
                                - Ca nô 35 chỗ: 2600k.
                                - Ca nô 40 chỗ: 3100k.
                            </Text>

                            <Text>Thời điểm thích hợp để khám phá Đảo Bé Lý Sơn.</Text>
                            <Text>
                            - Nếu đi Đảo Bé trong ngày, du khách nên xuất phát từ Đảo 
                            Lớn lúc sáng sau đó chiều về lại. Du khách ở lại Đảo Bé 
                            một ngày thì nên xuất phát từ sáng và về lại lúc trưa ngày hôm sau.
                            </Text>
                            <Text>
                            - Khi đi Đảo Bé du khách nên đi từ tháng 2 đến tháng 9. Đây là thời điểm du lịch Lý Sơn không có mưa gió.
                            </Text>
                        </View>
                    </View>



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
    headerText:{
        marginHorizontal:16,
        color:'#333333',
        fontSize:12
    },
    title_header:{
        color:'#000000',
        fontWeight:'600',
        fontFamily:'sf-ui-display-bold-58646a511e3d9',
        lineHeight:18
    }
})
export default LocationDetail2;