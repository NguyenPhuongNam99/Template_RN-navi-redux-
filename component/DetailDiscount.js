import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch,useSelector} from 'react-redux'
const DetailDiscount = ({navigation}) => {
    const banner = useSelector(state=>state.banner)
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.image} source={banner.image} />
                <View style={styles.position}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                         <Icon name="chevron-left" size={16} color="#FFFFFF" style={styles.image1} />
                    </TouchableOpacity>
                   

                </View>
                <View style={{ position: 'absolute', top: 45, right: 16 }}>

                    <Icon name="share-alt" size={16} color="#FFFFFF" style={styles.image1} />
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottom_top}>
                    
                         <Text style={styles.header_title}>Điều kiện áp dụng</Text>
                    <Text style={styles.text}>- Áp dụng cho tất cả các khách sạn trong nước và quốc tế của OKGO với đơn hàng từ <Text style={{color:'#FF5F24'}}>1.000.000Đ </Text> trở lên.</Text>
                    <Text style={styles.text}> 
                        - Thời gian chương trình: Từ <Text style={{color:'#FF5F24'}}> 1/11</Text> đến hết <Text style={{color:'#FF5F24' }}>31/12/2019.</Text> 
                    </Text>
                    <Text style={styles.text}>
                        - Áp dụng cho khách hàng đặt phòng trực tiếp trên web hoặc ứng dụng OKGO. Quý khách có thể tải ứng dụng trên <Text style={{color:'#FF5F24'}}>ANDROID</Text>  hoặc <Text style={{color:'#FF5F24'}}>iOS</Text> 
                    </Text>
                    <Text style={styles.text}>
                        - Mã khuyến mãi không được phép quy đổi thành tiền mặt.
                    </Text>
                    <Text style={styles.text}>
                        - Không giới hạn số lần đặt phòng.
                    </Text>
                    <Text style={styles.text}>
                        - Không áp dụng đồng thời cùng các chương trình khuyến mãi khác của <Text style={{fontWeight:'bold'}}>OKGO</Text> 
                    .</Text>
                    <Text style={styles.text}> 
                        - <Text style={{fontWeight:'bold'}}>OKGO</Text> có quyền thay đổi điều khoản & điều kiện chương trình mà không cần thông báo trước.
                    </Text>
                  
                   
                </View>
                <View style={styles.bottom_b}>
                    <Text style={{fontWeight:'bold',marginTop:13}}>
                        Các bước để nhận ưu đãi trên OKGO:
                    </Text>
                    <Text style={styles.text}>
                        1. Tìm  <Text style={{color:'#FF5F24'}}>"KHÁCH SẠN" </Text> trên web hoặc ứng dụng <Text style={{fontWeight:'bold'}}>OKGO</Text>.
                    </Text>
                    <Text style={styles.text} >2. Chọn khách sạn, phòng phù hợp và điền đầy đủ thông tin hành khách.</Text>
                    <Text style={styles.text}>3. Nhập mã <Text style={{color:'#FF5F24'}}>MEGA</Text>  vào ô <Text style={{fontWeight:'bold'}}>"NHẬP MÃ KHUYẾN MÃI"</Text>  ở bước <Text style={{fontWeight:'bold'}}>"THANH TOÁN".</Text> </Text>
                </View>

            </View>
            <View style={styles.footer}>
                <TouchableOpacity >
                    <Text style={styles.touchable_text}>ĐẶT NGAY</Text>
                </TouchableOpacity>
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
        height: 180,
        flex:3
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
        lineHeight:17,fontFamily:'sf-ui-display-medium-58646be638f96',
        flex:7
    },
    footer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'green',
        padding:10
    },
    bottom_top:{
        color:'#969696',
        fontStyle:'normal',
        fontWeight:'600',
        fontSize:14,
        lineHeight:70,fontFamily:'sf-ui-display-cufonfonts',
        textAlign: 'justify',
      
        // justifyContent:'al',
        // flexDirection:'row'
  },
  text:{
      color:'#000000',fontFamily:'sf-ui-display-cufonfonts',fontWeight:'900',fontSize:13,lineHeight:18,
      paddingVertical:6
  },
    header_title:{
        color:'#000000',
        fontSize:14,
        fontWeight:'bold',
        lineHeight:17,
        fontStyle:'normal',
        paddingVertical:16,fontFamily:'sf-ui-display-cufonfonts'
   },
   bottom_b:{
    fontFamily:'sf-ui-display-cufonfonts',
    color:'#000000',
    fontSize:14,
    fontWeight:'bold',
    lineHeight:17,
    fontStyle:'normal',
   },
   touchable:{
    justifyContent:'center',
    alignItems:'center', 
    marginTop:58
   
   },
   touchable_text:{
       color:'#FF5F24',
       fontSize:16,
       lineHeight:18,
       fontWeight:'bold',
       fontStyle:'normal',
       fontFamily:'sf-ui-display-cufonfonts'
   }
})
export default DetailDiscount