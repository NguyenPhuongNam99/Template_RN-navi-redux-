import React ,{useState}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,TextInput,Alert } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

const EvaluationSchedule = ({navigation}) => {

    const [defaul, setDefault] = useState(2)
    const [maxRating, setMaxrating] = useState([1, 2, 3, 4, 5])
    const notEvaluation = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';
    const Evaluation = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const [state, setState] = useState()
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Bạn có chắc muốn hủy không !",
      "",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => navigation.navigate('Home') }
      ]
    );
    
    const success = () =>
    Alert.alert(
      "Bạn có chắc muốn gửi đánh giá !",
      "",
      [
        // {
        //   text: "No",
        //   onPress: () => console.log("Cancel Pressed"),
        //   style: "cancel"
        // },
        { text: "Yes", onPress: () => navigation.navigate('Home') }
      ]
    );
    const image = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setState(image.path)
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={createTwoButtonAlert}>
                    <Text style={styles.status}>Hủy</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.titleHeader}>Đánh giá lịch trình</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={success}>
                    <Text style={styles.status}>Gửi</Text>
                </TouchableOpacity>
            </View>
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
            <View style={styles.inputText}>
                <TextInput
                    style={styles.input}
                    placeholder='Tiêu đề'
               
                />
                <View>
                    <TextInput
                    style={styles.input1}
                    placeholder='Nhận xét'
                    textAlignVertical = "top"
                    multiline={true}
                    numberOfLines={12}
               
                />
                </View>
                 
            </View>
            <View style={styles.information}>
                <Text style={styles.infoTitle}>Thêm ảnh</Text>
                <TouchableOpacity style={styles.add} onPress={image}>
                    <Image  source={require('../../assets/add.png')} />
                </TouchableOpacity>
                {
                    state ?  <Image style={{width:80,height:80,marginHorizontal:16,marginVertical:16}}  source={{uri:state}} /> :null
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        height: 50,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    status: {
        fontSize: 12,
        color: '#828282'
    },
    titleHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000'
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },
    inputText:{
        height:200,
        backgroundColor:'#FFFFFF', padding: 5
    },
    input: {
        height: 40,

        borderBottomWidth: 0.5,
        borderBottomColor:'#828282'
      },
      input1:{
         height: 150
      },
      information:{

      },
      infoTitle:{
          marginVertical:16,
          paddingHorizontal:16
      },
      add:{
          marginHorizontal:16,
          
      }
})
export default EvaluationSchedule;