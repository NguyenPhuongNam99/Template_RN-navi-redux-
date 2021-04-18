import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, ScrollView, CheckBox, Modal,Alert} from 'react-native'
import Header from '../Header'
import { ScreenSuggestData } from '../../Data/ScreenSuggest_Data';
import { useSelector, useDispatch } from 'react-redux'
import { Checkbox } from 'react-native-paper';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
const ScreenSuggest = ({ navigation }) => {
    const addlocation = useSelector(state => state.addlocation)
    const adddestination = useSelector(state => state.adddestination)
    const goback = () => {
        navigation.goBack()
    }
    const dispatch = useDispatch();
    const endDateuse = useSelector(state => state.endDate)
    const startdateuse = useSelector(state => state.startDate)
    const filterStatus = useSelector(state => state.filterStatus)
    const getStyle = (styleTouchable) => {
        if (styleTouchable === filterStatus) {
            return { backgroundColor: '#FF5F24' }
        }
        else {
            return { backgroundColor: '#EFEFEF' }
        }
    }
    const setAction = (Status) => {
        dispatch({ type: Status })
    }

    const [isShowCalendar, setIsShowCalendar] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const Cancel = () => {
        setIsShowCalendar(false);
        setSelectedDate('');
    }

    const _onPress = () => {
        console.log('da lockj')
        setIsShowCalendar(true)

    }
   
    const customDayHeaderStylesCallback = ({ dayOfWeek, month, year }) => {
        switch (dayOfWeek) { // can also evaluate month, year
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 7:
                return {
                    textStyle: {
                        color: '#F8530D'
                    }
                }
            case 6: // Thursday
                return {
                    textStyle: {
                        color: '#F8530D',

                    }
                };
        }
    }
    const [selectedStartDate, setSelectedSstartDate] = useState(null)
    const [selectedEndDate, setSelectedEndtDate] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {
            setSelectedEndtDate(date)
        }
        else {
            setSelectedSstartDate(date)
            setSelectedEndtDate(null)
        }
    }
    const minDate = new Date();
    const maxDate = new Date(2022, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : ''
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    const mindatetime = moment(startDate).format('DD-MM-YYYY');
    const maxdatetime = moment(endDate).format('DD-MM-YYYY');
    const Done = () => {
        setIsShowCalendar(false);
        dispatch({ type: 'ADDTIME', startDate: mindatetime, endDate: maxdatetime })

        // setSelectedDate(startDate)
    }

    // const customDatesStylesCallback = date => {
    //     switch (date.isoWeekday()) {

    //         case 6: // Sunday
    //             return {
    //                 textStyle: {
    //                     color: '#FFA26B',
    //                 }
    //             };
    //     }
    // }


    const getData =()=>{
        if(filterStatus =='Primary'){
            return ScreenSuggestData
        }
        else{
            return null
        }
    }

    return (
        <ScrollView>
            <View style={styles.conatiner}>
                <Header Name='Xem gợi ý' back={goback} />
                <View style={styles.header}>
                    <TouchableOpacity style={[styles.touchable, getStyle('Primary')]} onPress={() => setAction('Primary')}>
                        <Text style={{ color: 'black' }}>Độc hành</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable, getStyle('Double')]} onPress={() => setAction('Double')}>
                        <Text style={{ color: 'black' }}>Cặp đôi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable, getStyle('Family')]} onPress={() => setAction('Family')}>
                        <Text style={{ color: 'black' }} >Gia đình</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable, getStyle('Tour')]} onPress={() => setAction('Tour')}>
                        <Text style={{ color: 'black' }}>Tour</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.BlockProduct}>
                    <View style={styles.blockHeader}>
                        <Text style={{ fontSize: 13, color: '#000000', fontWeight: 'bold' }}>Có thể bạn quan tâm</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ScreenInterested')}>
                            <Text style={{ fontSize: 13, color: '#9E9E9E', fontWeight: 'normal' }}>Tất cả    ></Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={isShowCalendar}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={{
                                flex: 1,
                                paddingHorizontal: 13, marginTop: 70, backgroundColor: 'rgba(0,0,0,0.2)'

                            }}>
                                <View style={{ backgroundColor: '#FFFFFF', borderRadius: 9, height: 380 }}>
                                    <CalendarPicker
                                        onDateChange={onDateChange}
                                        startFromMonday={true}
                                        allowRangeSelection={true}
                                        minDate={minDate}
                                        maxDate={maxDate}

                                        visible={isShowCalendar}
                                        todayBackgroundColor="#EEDFF2" selectedDayColor="#7300e6"
                                        weekdays={['Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7', 'CN']}
                                        months={['Tháng 1,', 'Tháng 2,', 'Tháng 3,', 'Tháng 4,', 'Tháng 5,', 'Tháng 6,', 'Tháng 7,', 'Tháng 8,', 'Tháng 9,', 'Tháng 10,', 'Tháng 11,', 'Tháng 12,']}
                                        selectedDayTextColor="#FFFFFF"
                                        selectedRangeStartStyle={{ backgroundColor: '#F8530D' }}
                                        selectedRangeEndStyle={{ backgroundColor: '#F8530D' }}
                                        selectedRangeStyle={{ backgroundColor: 'green', opacity: 0.1 }}
                                        previousTitle='<'
                                        nextTitle='>'
                                        customDatesStyles='YYYY-MM'
                                        todayTextStyle={{
                                            color: '#BE52F2',

                                        }}
                                        dayLabelsWrapper={{
                                            borderTopWidth: 0,
                                            borderWidth: 0,
                                            borderBottomWidth: 0,

                                            borderRadius: 0,
                                            color: 'green'
                                        }}
                                        // customDatesStyles={customDatesStylesCallback}
                                        customDayHeaderStyles={customDayHeaderStylesCallback}
                                        textStyle={{
                                            fontSize: 14,
                                            color: '#000000',
                                        }}
                                        nextTitleStyle={{ backgroundColor: '#FFFFFF', marginRight: 16, borderRadius: 2, paddingLeft: 10, paddingRight: 10 }}
                                        previousTitleStyle={{ backgroundColor: '#FFFFFF', marginLeft: 16, borderRadius: 2, paddingLeft: 7, paddingRight: 10 }}
                                    />


                                    <View>
                                        <View >

                                            {/* onPress={Done} */}
                                            <TouchableOpacity style={{ alignItems: 'flex-end', marginRight: 33 }} onPress={Done}>
                                                <Text style={{ color: '#8B3BFF', fontSize: 14, fontWeight: '500' }}>Ok</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </Modal>


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
                            <TouchableOpacity onPress={() => navigation.navigate('Location')} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 15, marginTop: 16 }}>
                                <Image source={require('../../assets/pin1.png')} />
                                <TextInput style={{ flex: 1 }}
                                    placeholder="Xuất phát"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor='#989898'
                                    value={addlocation ? addlocation.location : null}

                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Location')} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 15, marginTop: 16 }}>
                                <Image source={require('../../assets/pin2.png')} />
                                <TextInput style={{ flex: 1 }}
                                    placeholder="Đích đến"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor='#989898'
                                    value={adddestination ? adddestination.location : null}

                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={_onPress} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 15, marginTop: 16 }}>
                                <Image source={require('../../assets/pin3.png')} />
                                <TextInput style={{ flex: 1 }}
                                    placeholder="Thời gian"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor='#989898'
                                    value={startdateuse && endDateuse ? startdateuse + ' / ' + endDateuse : null}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 15, marginTop: 16 }}>
                                <Image source={require('../../assets/pin4.png')} />
                                <TextInput style={{ flex: 1 }}
                                    placeholder="Ngân sách"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor='#989898'

                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 15, marginTop: 16 }}>
                                <Image source={require('../../assets/pin5.png')} />
                                <TextInput style={{ flex: 1 }}
                                    placeholder="Người tham gia"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor='#989898'

                                />
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>


                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                   height:294,
                   backgroundColor:'#FFFFFF'
                 
                }}>
                  
                        <View style={{  marginHorizontal: 10 }}>

                            <Text>1000.00000</Text>
                            <Text>1000.00000</Text>
                            <Text>1000.00000</Text>
                            <Text>1000.00000</Text>
                            <Text>1000.00000</Text>
                          
                        </View>
                    
                </View>
                </Modal>
                <View >
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 35, backgroundColor: '#FF5F24', borderRadius: 5, marginHorizontal: 15 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Xem gợi ý</Text>
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
        width: 70,
        backgroundColor: '#EFEFEF',

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
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
    checkbox: {
        position: 'absolute',
        top: 0,
        right: 0, zIndex: 100,
        color: 'green'
    }

})
export default ScreenSuggest;