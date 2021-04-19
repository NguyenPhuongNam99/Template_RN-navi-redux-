import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity ,Button} from 'react-native';
import Modal from 'react-native-modal';

const UpdateProfile = ({navigation}) => {
    const [checkHoten, setCheckhoten] = useState(false);
    const [hoten,setHoten] = useState('')
    const [checkten, setCheckten] = useState(false);
    const [ten,setTen] = useState('')

    const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    const validateHoten = (text1) => {
        let reg = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        if (reg.test(text1) === false) {
            setHoten(text1)
            setCheckhoten(false)
            return false;
            console.log("ho ten not is Correct");

        } else {
            setHoten(text1);
            setCheckhoten(true)
            console.log("ho ten is Correct");

        }
    }
    const validateten = (text1) => {
        let reg = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        if (reg.test(text1) === false) {
            setTen(text1)
            setCheckten(false)
            return false;
            console.log("ho ten not is Correct");

        } else {
            setTen(text1);
            setCheckten(true)
            console.log("ho ten is Correct");

        }
    }
    return (
        <View style={StyleSheet.container}>
             <Modal isVisible={isModalVisible}>
               <View style={{flex: 1,backgroundColor:'white',paddingHorizontal:18}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,paddingTop:10,paddingBottom:7}}>
                        <Text></Text>
                        <Text style={{color:'#000000',fontSize:14,fontWeight:'600',fontStyle:'normal'}}>Chính sách bảo mật</Text>
                        <TouchableOpacity onPress={toggleModal}>
                            <Image source={require('../assets/Group.png')}/>
                        </TouchableOpacity>
                        
                    </View>
                <Text style={{fontSize:13,color:'#000000'}}>Chính sách Bảo mật ("sau đây gọi tắt là Chính Sách") quy định cách 
                    OKGO (sau đây gọi là "Chúng tôi") thu thập, sử dụng và chia sẻ thông 
                    tin về khách hàng khi khách hàng truy cập và tương tác với Trang Web 
                    (từ máy tính, thiết bị di động) và ứng dụng di động của Chúng tôi (sau 
                    đây gọi chung là "Trang Web") hoặc các phương thức khác có liên kết đến 
                    Trang Web của Chúng tôi (như liên hệ nhóm chăm sóc khách hàng qua chat hoặc email).
                </Text>
                <Text style={{fontSize:13,color:'#000000'}}>
                Tùy từng thời điểm, OKGO có thể sửa đổi Chính sách Bảo mật để tương thích với những thay
                 đổi về pháp luật, các thực tiễn thu thập và sử dụng Thông tin Cá nhân của Chúng tôi, 
                 các tính năng của Trang Web, hoặc những tiến bộ về công nghệ. Nếu Chúng tôi thực hiện 
                 các sửa đổi mà làm thay đổi cách thức Chúng tôi thu thập hoặc sử dụng Thông tin Cá nhân 
                 của Người dùng, thì những sửa đổi đó sẽ được đăng trong Chính sách Bảo mật này và ngày có
                  hiệu lực sẽ được nêu ở ngay phần đầu trang. Vì vậy, Người dùng nên xem một cách định kỳ 
                  Chính sách Bảo mật này để được cập nhật về các chính sách và thực tiễn hiện hành của Chúng tôi.
                </Text>
                
               
              
                <Text style={{fontWeight:'bold',fontSize:13,color:'#000000'}}> 1. Thông tin Chúng tôi thu thập</Text>
                <Text style={{fontSize:13,color:'#000000'}}>
                      "Thông tin Cá nhân" có thể được hiểu là dữ liệu, cho dù là đúng hoặc không đúng, về một cá nhân 
                có thể được nhận dạng từ dữ liệu đó, hoặc từ dữ liệu và các thông tin khác mà OKGO có được hoặc 
                có quyền truy cập. Nói cách khác là thông tin về bạn, bao gồm nhưng không giới hạn tên, quốc tịch,
                 địa chỉ, số điện thoại, email, thông tin đăng nhập, thông tin công ty (tùy chọn trong việc xuất hóa đơn),
                  thông tin xoay quanh về việc đặt Dịch vụ (như thời gian lưu trú, tên khách sạn, số phòng, tên hãng hàng 
                  không sử dụng, ngày khởi hành, ngày về,...). Chúng tôi cũng có thể yêu cầu Người dùng cung cấp thông tin 
                  về sở thích du lịch, và phản hồi về những trải nghiệm du lịch của Người dùng thông qua việc đặt Dịch vụ 
                  của Người dùng trên Trang Web...
                </Text>
              
              
                 {/* <Button title="Hide modal" onPress={toggleModal} /> */}
             </View>
             </Modal>
             <TouchableOpacity onPress={()=>navigation.goBack()}>
                 <Image
                style={styles.tinyLogo}
                source={require('../assets/arrow-left.png')}
                
            />
             </TouchableOpacity>
            
            <Text style={styles.title}>Cập nhật thông tin </Text>
            <View style={styles.input_header}>
                <TextInput
                    style={styles.input}
                    placeholder='Họ'
                    onChangeText={(text1) => validateHoten(text1)}
                    value={hoten}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Tên'
                    onChangeText={(text1) => validateten(text1)}
                    value={ten}

                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    
                />
            </View>
            {
                checkHoten  && checkten?
                 <TouchableOpacity style={styles.touchable}  onPress={()=>{navigation.navigate('TabNavigation')}}>
                <Text>Hoàn thành</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.touchable1} >
            <Text>Hoàn thành</Text>
        </TouchableOpacity>

            }
           


            <TouchableOpacity onPress={toggleModal} >
                <Text style={styles.footer}>Bằng cách tham gia OKGO, bạn đã đồng ý với
            
                 <Text style={styles.text}>
                       Chính sách bảo mật và Điều khoản sử dụng
                 </Text>
          
             của chúng tôi</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tinyLogo: {
        marginTop: 21,
        marginHorizontal: 16
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333333',
        marginHorizontal: 16,marginTop:23
    },
    input_header:{
        marginTop:3
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        borderBottomColor:'#E0E0E0'
      },
      touchable:{
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#FF5F24',
          borderRadius:22,
          marginHorizontal:20,
          height:48,
          marginTop:133
      },
      touchable1:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FBD7CA',
        borderRadius:22,
        marginHorizontal:20,
        height:48,
        marginTop:133
    },
      footer:{
          color:'#565656',
          fontSize:11,
         marginHorizontal:20,
          fontWeight:'normal',
          marginTop:6,
        
      },
      text:{
            textDecorationLine:'underline'
      }
})
export default UpdateProfile;