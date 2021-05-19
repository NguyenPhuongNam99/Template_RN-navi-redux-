import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, FlatList, ScrollView, SafeAreaView } from 'react-native'
import { Suggest_DestionData, Suggestion_toYou, HomeStay, Suggestion_Double } from '../Data/RestaurantData'
import { ScheduleNowData } from '../Data/ScheduleData';

import { FinishScheduleData } from '../Data/ScheduleData'
import ScheduleNow_Item from '../component/ScheduleNow_Item'
const Combo = ({ navigation }) => {
    const Destination1 = ({ Destination1_item }) => {
        return (
            <View style={{marginLeft:15}}>
                <Image style={{ width: 150, height: 200, borderRadius: 5 }} source={Destination1_item.image} />
                <Text style={{ position: 'absolute', bottom: 8, left: 19, fontSize: 14, color: '#FFFFFF', fontWeight: '600' }}>{Destination1_item.name}</Text>
            </View>


        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={{ width: 8, height: 12, }} source={require('../assets/search1.png')} />
                    </TouchableOpacity>
                    <Text style={styles.header_titlle}>Combo</Text>
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
                        <View style={styles.Discount}>
                            <Text style={styles.discount_title}>Điểm đến tháng 12</Text>
                            <TouchableOpacity>
                                <Text style={styles.discount_title1}>Xem thêm ></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <FlatList
                                data={Suggest_DestionData}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) =>
                                    <Destination1 Destination1_item={item} />
                                }
                            />
                        </View>
                        <View style={styles.Discount}>
                            <Text style={styles.discount_title}>Combo giá rẻ</Text>
                            <TouchableOpacity>
                                <Text style={styles.discount_title1}>Xem thêm ></Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={FinishScheduleData}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) =>
                                <ScheduleNow_Item Item={item} />
                            }
                        />

                        <View style={styles.Discount}>
                            <Text style={styles.discount_title}>Combo Hà Giang</Text>
                            <TouchableOpacity>
                                <Text style={styles.discount_title1}>Xem thêm ></Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={FinishScheduleData}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) =>
                                <ScheduleNow_Item Item={item} />
                            }
                        />

                        <View style={styles.Discount}>
                            <Text style={styles.discount_title}>Combo Huế</Text>
                            <TouchableOpacity>
                                <Text style={styles.discount_title1}>Xem thêm ></Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={FinishScheduleData}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) =>
                                <ScheduleNow_Item Item={item} />
                            }
                        />

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        // width:375,
        height: 56,

        alignItems: 'center',
        paddingHorizontal: 16
    },

    header_titlle: {
        color: '#000000',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: 'bold'
    }
    ,
    input: {
        height: 40,
        margin: 16,
        borderWidth: 1,
        backgroundColor: '#EAEAEA',
        borderColor: '#EAEAEA',
        borderRadius: 5,
        paddingLeft: 16
    },
    Discount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 10
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
export default Combo;