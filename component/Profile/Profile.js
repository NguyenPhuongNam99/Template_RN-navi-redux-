import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet ,Pressable,Alert,SafeAreaView} from 'react-native'
import { Modal, Portal,  Provider } from 'react-native-paper';
import {useSelector,useDispatch} from 'react-redux'
const Profile = ({ navigation }) => {
    const [defaul, setDefault] = useState(2)
    const [maxRating, setMaxrating] = useState([1, 2, 3, 4, 5])
    const notEvaluation = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';
    const Evaluation = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const [modalVisible, setModalVisible] = useState(false);
    const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const alert =()=>{
      Alert.alert
  }
  const nameUser = useSelector(state=>state.nameUser)
  const createTwoButtonAlert = () =>
  Alert.alert(
    "Cảm ơn bạn đã đánh giá",
    "",
    [
     
      { text: "OK", onPress: () => setVisible(false) }
    ]
  );
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
 
            <View style={styles.header}>
                <Text style={styles.header_title}>Thông tin cá nhân </Text>
            </View>
            <TouchableOpacity style={styles.block_image} onPress={() => navigation.navigate('MyProfile1')}>
                <Image style={styles.image} source={require('../../assets/nam.jpg')} />
                <Text style={styles.name}>{nameUser? nameUser: 'Nguyễn Phương Namm'}</Text>

            </TouchableOpacity>
            <View style={styles.block_tab}>
                <View>
                     <TouchableOpacity style={styles.block}>
                    <Image style={styles.image_tab} source={require('../../assets/1.png')} />
                    <Text style={styles.textTab}>Lịch trình của tôi</Text>
                </TouchableOpacity>
                </View>
               
                <TouchableOpacity style={styles.block}>
                    <Image style={styles.image_tab} source={require('../../assets/2a.png')} />
                    <Text style={styles.textTab}>Khuyến mại</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('Favourite')}>
                    <Image style={styles.image_tab} source={require('../../assets/2b.png')} />
                    <Text style={styles.textTab}>Yêu thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}  onPress={showModal}>
                    <Image style={styles.image_tab} source={require('../../assets/2c.png')} />
                    <Text style={styles.textTab}>Đánh giá</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('Setting')}>
                    <Image style={styles.image_tab} source={require('../../assets/2d.png')} />
                    <Text style={styles.textTab1}>Cài đặt</Text>
                </TouchableOpacity>

            </View>
            <Modal
            visible={visible} onDismiss={hideModal}
                
            >
           <View style={{alignItems:'center',justifyContent:'flex-end',margin:50,height:210,paddingVertical:10}}>
                <View style={styles.modalView}>
                    <Text style={{color:'#000000',fontSize:14,fontWeight:'bold',paddingTop:13}}>Đánh giá chúng tôi</Text>
                    <View style={styles.star}>
                        {
                            maxRating.map((item, key) => (
                                <TouchableOpacity key={item} onPress={() => setDefault(item)}>
                                    <Image
                                        style={{ width: 20, height: 20, resizeMode: 'cover', marginLeft: 8 }}
                                        source={item <= defaul ? { uri: Evaluation } : { uri: notEvaluation }}
                                    />
                                </TouchableOpacity>
                            ))
                        }
                        
                    </View>
                    <View style={{width:'100%',justifyContent:'center',alignItems:'center',borderTopWidth:0.5,padding:10,borderTopColor:'#979797'}}>
                    <TouchableOpacity style={styles.touchable} onPress={createTwoButtonAlert}>
                            <Text>Đánh giá ngay</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{width:'100%',justifyContent:'center',alignItems:'center',borderTopWidth:0.5,padding:10,borderTopColor:'#979797'}} onPress={()=>setVisible(false)}>
                    <TouchableOpacity style={styles.touchable}>
                            <Text>Nhắc tôi sau</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{width:'100%',justifyContent:'center',alignItems:'center',borderTopWidth:0.5,padding:10,borderTopColor:'#979797'}}>
                    <TouchableOpacity style={styles.touchable}>
                            <Text>Đánh giá lại</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>
            </Modal>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    header: {
        backgroundColor: '#FFFFFF',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header_title: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Medium'

    },
    block_image: {
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: '#FFFFFF',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 27,
        marginHorizontal: 15
    },
    name: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'Roboto-Medium'
    },
    block_tab: {
        height: 200,
        backgroundColor: '#FFFFFF'
    },
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 39
    },
    image_tab: {
        width: 20,
        height: 20,
        marginHorizontal: 15
    },
    textTab: {
        borderBottomWidth: 0.2,
        width: '83%',
        borderBottomColor: '#B9B9B9',
        paddingVertical: 7,
        color: '#000000',
        fontSize: 13,
        fontWeight: '500',
        fontFamily: 'sf-ui-display-semibold-58646eddcae92'
    },
    textTab1: {

        color: '#000000',
        fontSize: 13,
        fontWeight: '500',
        fontFamily: 'sf-ui-display-semibold-58646eddcae92'
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },
    modalView: {
      
        backgroundColor: "white",
        borderRadius: 20,
        //   padding: 65,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop:'auto',
        marginBottom:'auto',
        width:'100%',
        margin:50,marginVertical:46
        
    },
    block_tab:{
        width:'100%',
        height:'100%'
    },
    // touchable:{
    //     borderTopWidth:0.7,
    //     borderBottomWidth:0.7,
    //     padding:10,
    //     borderBottomColor:'#979797',
    //     borderTopColor:'#979797',
       
    //     flex:1
    // }
})
export default Profile