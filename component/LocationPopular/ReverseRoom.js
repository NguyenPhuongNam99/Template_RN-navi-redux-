import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,ScrollView,Alert } from 'react-native';
import Header from '../Header'
import {useSelector,useDispatch} from 'react-redux'
const ReverseRoom = ({ navigation }) => {
    const goback = () => {
        navigation.goBack()
    }
    const select = useSelector(state=>state.select)
 
    const createTwoButtonAlert = () =>
    Alert.alert(
      "OKGO Trân Trọng Thông Báo",
      "Bạn đã đặt phòng thành công, Chúc bạn có kì nghỉ vui vẻ bên gia đình và người thân .Hân Hạnh !",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Trang chủ", onPress: () => navigation.navigate('Home') }
      ]
    );

    return (
        <ScrollView>
        <View style={styles.container}>
            <Header Name='Đặt phòng' back={goback} />

            <View style={styles.blockImage}>
                <Image style={styles.image} source={select.image} />
            </View>
            <View style={styles.blockBody}>
                <Text style={styles.name}>{select.name}</Text>
                <View style={styles.body1}>
                    <Text style={styles.text}><Text style={{fontWeight:'bold',fontSize:13}}>Loại giường -</Text> 2 giường đơn</Text>
                    <Text style={styles.text}><Text style={{fontWeight:'bold',fontSize:13}}>Kích thước phòng -</Text> 40 m</Text>
                    <Text style={styles.text}><Text style={{fontWeight:'bold',fontSize:13}}>Cảnh phòng -</Text>  sân vườn</Text>
                </View>

                <Text style={styles.lorem}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                 tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                 tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                </Text>

                <View style={styles.LR}>
                    <View style={styles.left}>
                        <Text style={styles.price}>Giá phòng </Text>
                        <Text style={styles.service}>(1 phòng / đêm)</Text>
                    </View>
                    <View style={styles.right}>
                        <Text> <Text style={{color:'#FF2424'}}>{select.price}</Text> VNĐ </Text>
                    </View>
                </View>

                <View style={styles.indi}>
                    <Text style={styles.price} >Thuế và dịch vụ</Text>
                    <Text><Text style={{color:'#FF2424'}}>360,00</Text> VNĐ</Text>
                </View>
            </View>
            
            <TouchableOpacity style={styles.Touchable} onPress={createTwoButtonAlert}>
                <Text style={styles.textTouchable}>Đặt phòng</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    blockImage: {
        height: 215
    },
    blockBody:{
        paddingHorizontal:15,
        marginBottom:30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    name: {
        marginTop: 20,
        color:'#707070',
        fontSize:14
    },
    body1:{
        marginTop:18
    },
    text:{
        paddingVertical:4,
        fontSize:13
    },
    lorem:{
        fontSize:12,
        color:'#000000',
        marginTop:12,
        marginBottom:24,lineHeight:18
    },
    LR:{
        flexDirection:'row',
        justifyContent:'space-between'
    },indi:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    price:{
        fontSize:13,
        color:'#000000'
    },
    service:{
        fontSize:10,
        color:'#979797'
    },
    Touchable:{
        height:35,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FF5F24',
        marginHorizontal:15,
        borderRadius:5,
        marginBottom:20
        
    },textTouchable:{
        color:'#FFFFFF',
        fontSize:14
    }
})
export default ReverseRoom;