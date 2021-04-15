import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity,  FlatList, ScrollView,CheckBox} from 'react-native'
import Header from '../Header'
import { ScreenSuggestData } from '../../Data/ScreenSuggest_Data';
import { useSelector, useDispatch } from 'react-redux'
import { Checkbox } from 'react-native-paper';

const ScreenSuggest = ({ navigation }) => {
    const goback = () => {
        navigation.goBack()
    }
    const dispatch = useDispatch();
    const filterStatus = useSelector(state => state.filterStatus)
    const getStyle = (styleTouchable) => {
        if (styleTouchable === filterStatus) {
            return { backgroundColor: '#FF5F24' }
        }
        else {
            return { backgroundColor: '#EFEFEF'}
        }
    }
    const setAction = (Status) => {
        dispatch({ type: Status })
    }
    return (
        <ScrollView>
            <View style={styles.conatiner}>
                <Header Name='Xem gợi ý' back={goback} />
                <View style={styles.header}>
                    <TouchableOpacity style={[styles.touchable,getStyle('Primary') ]} onPress={() => setAction('Primary')}>
                        <Text style={{color:'black'}}>Độc hành</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable,getStyle('Double')]} onPress={() => setAction('Double')}>
                        <Text style={{color:'black'}}>Cặp đôi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable,getStyle('Family')]} onPress={() => setAction('Family')}>
                        <Text style={{color:'black'}} >Gia đình</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable,getStyle('Tour')]} onPress={() => setAction('Tour')}>
                        <Text style={{color:'black'}}>Tour</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.BlockProduct}>
                    <View style={styles.blockHeader}>
                        <Text style={{ fontSize: 13, color: '#000000', fontWeight: 'bold' }}>Có thể bạn quan tâm</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 13, color: '#9E9E9E', fontWeight: 'normal' }}>Tất cả    ></Text>
                        </TouchableOpacity>
                    </View>
                    <View>


                        <FlatList
                            style={{ marginTop: 16 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={ScreenSuggestData}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.blockFlat}>
                                        <View style={{ flex: 0.8, backgroundColor: 'yellow' }}>
                                            <Image source={item.image} style={{ width: '100%', height: '100%' }} />
                                            <CheckBox style={styles.checkbox} />
                                        </View>
                                        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text >{item.title}</Text>
                                        </View>
                                    </View>
                                )
                            }}

                        />

                        <View style={{ marginBottom: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 15, marginTop: 16 }}>
                                <Image source={require('../../assets/pin1.png')} />
                                <TextInput style={{ flex: 1 }}
                                    placeholder="Xuất phát"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor='#989898'

                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 15, marginTop: 16 }}>
                                <Image source={require('../../assets/pin2.png')} />
                                <TextInput style={{ flex: 1 }}
                                    placeholder="Đích đến"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor='#989898'

                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 15, marginTop: 16 }}>
                                <Image source={require('../../assets/pin3.png')} />
                                <TextInput style={{ flex: 1 }}
                                    placeholder="Thời gian"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor='#989898'

                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 15, marginTop: 16 }}>
                                <Image source={require('../../assets/pin4.png')} />
                                <TextInput style={{ flex: 1 }}
                                    placeholder="Ngân sách"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor='#989898'

                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 15, marginTop: 16 }}>
                                <Image source={require('../../assets/pin5.png')} />
                                <TextInput style={{ flex: 1 }}
                                    placeholder="Người tham gia"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor='#989898'

                                />
                            </View>
                        </View>
                    </View>


                </View>
                <View >
                     <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',height:35,backgroundColor:'#FF5F24',borderRadius:5,marginHorizontal:15}}>
                    <Text style={{color:'#FFFFFF',fontSize:14}}>Xem gợi ý</Text>
                </TouchableOpacity>
                </View>
               
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 17,
        // height:30

    },
    touchable: {
        height: 26,
        width:70,
        backgroundColor: '#EFEFEF',

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
        color: 'black',
        fontSize: 14,
      
    }, blockHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 16
    },
    BlockProduct: {
        marginTop: 9
    },
    blockFlat: {
        backgroundColor: '#FFFFFF', height: 135, width: 135, marginLeft: 16, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2, borderRadius: 5
    },
    checkbox:{
        position:'absolute',
        top:0,
        right:0,zIndex:100,
        color:'green'
    }

})
export default ScreenSuggest;