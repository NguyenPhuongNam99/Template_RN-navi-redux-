import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView } from 'react-native'

const Notification = () => {
    const data = [
        {
            id: 1,
            tilte: 'Bạn có muốn đi TP Hồ Chí Minh? OKGO có tất cả',
            time: '20/12/2019 lúc 10:30',
            image: require('../assets/a1.png')
        },
        {
            id: 2,
            tilte: 'Bạn có một gợi ý mới: điểm đến tháng 12',
            time: '17/12/2019 lúc 10:30',
            image: require('../assets/a2.png')
        },
        {
            id: 3,
            tilte: 'Bạn vừa nhận được 1 Voucher Spa tại Hà Nội khi đặt vé máy bay qua OKGO',
            time: '20/12/2019 lúc 10:30',
            image: require('../assets/a3.png')
        },
        {
            id: 4,
            tilte: 'Đề xuất: Lặn ngắm San hô Phú Quốc',
            time: '15/12/2019 lúc 10:30',
            image: require('../assets/a4.png')
        },
        {
            id: 5,
            tilte: 'Bạn có một gợi ý mới: điểm đến tháng 12',
            time: '20/12/2019 lúc 10:30',
            image: require('../assets/a5.png')
        },
        {
            id: 6,
            tilte: 'Nhận ngay mã giảm giá tại nhà hàng Hải Sản Thịnh Phát khi đến Lý Sơn',
            time: '12/12/2019 lúc 10:30',
            image: require('../assets/a6.png')
        },
        {
            id: 7,
            tilte: 'Khám phá cung đường Bình Thuận, giảm giá di chuyển',
            time: '10/12/2019 lúc 10:30',
            image: require('../assets/a7.png')
        },
        {
            id: 8,
            tilte: 'Ninh Bình - điểm đến không thể bỏ lỡ',
            time: '8/12/2019 lúc 10:30',
            image: require('../assets/a8.png')
        },
        {
            id: 9,
            tilte: 'Trải nghiệm cung đường đèo Hà Giang. Tạo lịch trình trên OKGO để có chuyến đi hoàn hảo.',
            time: '9/12/2019 lúc 10:30',
            image: require('../assets/a9.png')
        },
        {
            id: 10,
            tilte: 'Giảm giá 20% đồ uống cho cặp đôi đến Đà Lạt',
            time: '20/12/2019 lúc 10:30',
            image: require('../assets/a10.png')
        },
        {
            id: 11,
            tilte: 'Đề xuất cho bạn: Homestay Mộc Châu',
            time: '20/12/2019 lúc 10:30',
            image: require('../assets/a11.png')
        },
        {
            id: 12,
            tilte: 'Bạn có một gợi ý mới: điểm đến tháng 12',
            time: '20/12/2019 lúc 10:30',
            image: require('../assets/a12.png')
        },
    ]
    const getBackgroundColor = (id) => {
        let color;
        if (id >= 1 && id < 5) {
            color = 'rgba(255, 120, 0, 0.08)';
        } else if (id >= 5 && id < 12) {
            color = '';
        }
        return color;
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text></Text>
                    <Text>Thông báo</Text>
                    <Image source={require('../assets/tick.png')} />
                </View>
                <View style={{ marginTop: 16 }}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            return (


                                <View style={[styles.block, { backgroundColor: getBackgroundColor(item.id) }]}>
                                    <View style={styles.left}>
                                        <Image source={item.image} />
                                    </View>
                                    <View style={styles.right}>
                                        <Text style={styles.title}>{item.tilte}</Text>
                                        <Text style={styles.timer}>{item.time}</Text>
                                    </View>
                                </View>
                            )
                        }

                        }
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 50,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    block: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        height: 54,

    },
    right: {
        paddingLeft: 8,
        width: '91%'
    },
    timer: {
        color: '#9A9A9A',
        fontSize: 11
    },
    title: {
        fontSize: 13,
        color: '#333333'
    }
})

export default Notification