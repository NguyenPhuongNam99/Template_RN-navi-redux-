import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput,FlatList, ScrollView } from 'react-native';
import {Suggest_DestionData,Suggestion_toYou,HomeStay,Suggestion_Double} from '../HotelData'
import MultipleDetail from './MultipleDetail'
const Hotel_Icon = ({navigation}) => {
    const Destination1 = ({ Destination1_item }) => {
        return (
            <View>
                <Image style={{ width: 150, height: 200, borderRadius: 5, marginHorizontal: 11 }} source={Destination1_item.image} />
                <Text style={{ position: 'absolute', bottom: 8, left: 19, fontSize: 14, color: '#FFFFFF', fontWeight: '600' }}>{Destination1_item.name}</Text>
            </View>


        )
    }
  
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image style={{ width: 8, height: 12, }} source={require('../assets/search1.png')} />
                </TouchableOpacity>
                <Text style={styles.header_titlle}>Khách sạn</Text>
                <TouchableOpacity>
                    <Image style={{ width: 12, height: 12, }} source={require('../assets/search2.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    placeholder='Bạn muốn đi đâu ?'
                />
                <View style={{marginHorizontal:16}}>
                    <Image style={styles.banner} source={require('../assets/banner.png')} />
                </View>
                
                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Điểm đến tháng 12</Text>
                    <TouchableOpacity>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={Suggest_DestionData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <Destination1 Destination1_item={item} />
                        }
                    />
                </View>

                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Khách sạn & Resort</Text>
                    <TouchableOpacity>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={Suggestion_toYou}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                        //Tạo component rồi gọi đến
                            <MultipleDetail Item={item} />
                        }
                    />
                </View>         
                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Homestay</Text>
                    <TouchableOpacity>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={HomeStay}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                        //Tạo component rồi gọi đến
                            <MultipleDetail Item={item} />
                        }
                    />
                </View>

                <View style={styles.Discount}>
                    <Text style={styles.discount_title}>Đề xuất cặp đôi</Text>
                    <TouchableOpacity>
                        <Text style={styles.discount_title1}>Xem thêm ></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={Suggestion_Double}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                        //Tạo component rồi gọi đến
                            <MultipleDetail Item={item} />
                        }
                    />
                </View>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        // width:375,
        height: 70,
      
        alignItems: 'center',
        paddingHorizontal: 16
    },
    body: {
        
    },
    header_titlle: {
        color: '#000000',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        margin: 16,
        borderWidth: 1,
        backgroundColor: '#EAEAEA',
        borderColor: '#EAEAEA',
        borderRadius: 5,
        paddingLeft: 16
    },
    banner: {
        width:'100%',
        height: 150,
        // marginHorizontal: 16,
       
        borderRadius: 5
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
export default Hotel_Icon;