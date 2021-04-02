import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailDiscount = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.image} source={require('../assets/banner.png')} />
                <View style={styles.position}>
                    <Icon name="chevron-left" size={16} color="#FFFFFF" style={styles.image1} />

                </View>
                <View style={{ position: 'absolute', top: 45, right: 16 }}>

                    <Icon name="share-alt" size={16} color="#FFFFFF" style={styles.image1} />
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottom_top}>
                    <Text style={styles.header_title}>Điều kiện áp dụng</Text>
                    <Text style={{color:'#000000',fontFamily:'sf-ui-display-medium-58646be638f96'}}>- Áp dụng cho tất cả các khách sạn trong nước và quốc tế của OKGO với đơn hàng từ 1.000.000Đ trở lên.</Text>
                    <Text>
                        - Thời gian chương trình: Từ 1/11 đến hết 31/12/2019.
                    </Text>
                    <Text>
                        - Áp dụng cho khách hàng đặt phòng trực tiếp trên web hoặc ứng dụng OKGO. Quý khách có thể tải ứng dụng trên ANDROID hoặc iOS.
                    </Text>
                    <Text>
                        - Mã khuyến mãi không được phép quy đổi thành tiền mặt.
                    </Text>
                    <Text>
                        - Không giới hạn số lần đặt phòng.
                    </Text>
                    <Text>
                        - Không áp dụng đồng thời cùng các chương trình khuyến mãi khác của OKGO
                    .</Text>
                    <Text>
                        - OKGO có quyền thay đổi điều khoản & điều kiện chương trình mà không cần thông báo trước.
                    </Text>
                </View>
                <View style={styles.bottom_b}>
                    <Text>
                        Các bước để nhận ưu đãi trên OKGO:
                    </Text>
                    <Text>
                        1. Tìm "KHÁCH SẠN" trên web hoặc ứng dụng OKGO.
                    </Text>
                    <Text>2. Chọn khách sạn, phòng phù hợp và điền đầy đủ thông tin hành khách.</Text>
                    <Text>3. Nhập mã MEGA vào ô "NHẬP MÃ KHUYẾN MÃI" ở bước "THANH TOÁN".</Text>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        height: 180
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    position: {
        flexDirection: 'row',

        position: 'absolute',
        top: 45,
        left: 16
    },
    image1: {
        opacity: 0.9
    },
    bottom:{
        marginHorizontal:16,
        lineHeight:17,fontFamily:'sf-ui-display-medium-58646be638f96'
    },
    bottom_top:{
        color:'#969696',
        fontStyle:'normal',
        fontWeight:'600',
        fontSize:14,
        lineHeight:17
    },
    header_title:{
        color:'#000000',
        fontSize:14,
        fontWeight:'bold',
        lineHeight:17,
        fontStyle:'normal',
        paddingVertical:16
   }
})
export default DetailDiscount