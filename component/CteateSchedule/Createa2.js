import React,{useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput,LogBox } from 'react-native'
import Header from '../Header'
import { ScreenSuggestData } from '../../Data/ScreenSuggest_Data';
import { useSelector, useDispatch } from 'react-redux'
import { Checkbox } from 'react-native-paper';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import CheckBox from '@react-native-community/checkbox';
import { Modal } from 'react-native-paper';
const Createa2 = ({ navigation }) => {
    LogBox.ignoreAllLogs();
    const goback =()=>{
        navigation.goBack();
    }
    const [onSelect, setOnSelect] = useState(false);
    // const checkSelect = (item)=>{
    //    setOnSelect(item)
    // }
    const priceItem = useSelector(state => state.priceItem)
    const addlocation = useSelector(state => state.addlocation)
    const adddestination = useSelector(state => state.adddestination)
   
    const dispatch = useDispatch();
    const endDateuse = useSelector(state => state.endDate)
    const startdateuse = useSelector(state => state.startDate)
    const filterStatus = useSelector(state => state.filterStatus)
    const peopleOld = useSelector(state => state.peopleOld)
    const peopleMidle = useSelector(state => state.peopleMidle)
    const peopleBaby = useSelector(state => state.peopleBaby)
  
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


    }
    const dataprice = [
        {
            id: 1,
            price: '1.000.000 - 2.000.000 dd'
        },
        {
            id: 2,
            price: '3.000.000 - 5.000.000 dd'
        },
        {
            id: 3,
            price: '3.000.000 - 22.000.000 dd'
        },
        {
            id: 4,
            price: '21.000.000 - 156.000.000 dd'
        },
        {
            id: 5,
            price: '12.000.000 - 290.000.000 dd'
        },
    ]
   
    const hideModal = () => setIsShowCalendar(false);
    const hideM = () => setModalVisible(false)
    return (
        <SafeAreaView style={{ flex: 1 }}>
             <Header Name='Tạo lịch trình' back={goback} />
            <View>
               
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
                            value={startdateuse && endDateuse && startDate && endDateuse ? startdateuse + ' / ' + endDateuse : null}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 15, marginTop: 16 }}>
                        <Image source={require('../../assets/pin4.png')} />
                        <TextInput style={{ flex: 1 }}
                            placeholder="Ngân sách"
                            underlineColorAndroid="transparent"
                            placeholderTextColor='#989898'
                            value={priceItem && priceItem ? priceItem : null}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PeopleJoin')} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 15, marginTop: 16 }}>
                        <Image source={require('../../assets/pin5.png')} />
                        <TextInput style={{ flex: 1 }}
                            placeholder="Người tham gia"
                            underlineColorAndroid="transparent"
                            placeholderTextColor='#989898'
                            value={peopleOld && peopleMidle && peopleBaby ? peopleOld.name + '  ' + peopleOld.countOld + '  ' + peopleMidle.name + '  ' + peopleMidle.countMidle + '  ' + peopleBaby.name + '  ' + peopleBaby.countBaby : null} />
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={{  justifyContent: 'center', alignItems: 'center', height: 35, backgroundColor: '#FF5F24', borderRadius: 5, marginHorizontal: 15 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Xem gợi ý</Text>
                    </TouchableOpacity>
                </View>


            </View>
            <Modal

                visible={modalVisible}

            >
                <View style={{
                    // flex: 1,
                    justifyContent: "center",
                    alignItems: "center"


                }}>

                    <View style={{
                        marginHorizontal: 10, backgroundColor: '#FFFFFF',
                        height: 294, width: 264, paddingHorizontal: 16, borderRadius: 10
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 16 }}>Chọn ngân sách</Text>
                        <View style={{ paddingTop: 25 }}>

                            {dataprice.map((item) => {
                                return (
                                    <TouchableOpacity onPress={() => setOnSelect(item.price)}>
                                        <Text style={styles.item}>{item.price}</Text>
                                    </TouchableOpacity>
                                )
                            })}

                            <TextInput placeholder='chon so khac' onChangeText={(item) => setOnSelect(item)} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(!modalVisible),
                                    setOnSelect('')
                            }}>
                                <Text style={{ fontSize: 14, color: '#9A9A9A', fontWeight: 'bold' }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(!modalVisible),
                                    dispatch({ type: 'ADDPRICE', priceItem: onSelect })
                            }
                            } >


                                <Text style={{ fontSize: 14, color: '#FF5F24', fontWeight: 'bold' }}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </Modal>
            <Modal
                // animationType="fade"
                // transparent={true}
                visible={isShowCalendar}
                onDismiss={hideModal}
            >
                <View >
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
                            selectedRangeStyle={{ backgroundColor: '#FCDAD5', opacity: 1 }}
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
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})
export default Createa2