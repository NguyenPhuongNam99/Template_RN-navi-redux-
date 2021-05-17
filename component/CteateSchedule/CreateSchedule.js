import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image,Switch,Modal,Alert,SafeAreaView } from 'react-native'
import Header from '../Header'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CalendarPicker from 'react-native-calendar-picker';

const CreateSchedule = ({ navigation }) => {
    const goback = () => {
        navigation.goBack()
    }
    
    const [isShowCalendar, setIsShowCalendar] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const Cancel = () => {
        setIsShowCalendar(false);
        setSelectedDate('');
    }
    const Done = () => {
        setIsShowCalendar(false);
        setSelectedDate(startDate)
    }
    const _onPress = () => {
        console.log('da lockj')
        setIsShowCalendar(true)

    }
    const onDatechange = (date) => {
        setSelectedDate(date)
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
                        color: '#D0C9D6'
                    }
                }
            case 6: // Thursday
                return {
                    textStyle: {
                        color: '#FFA26B',
                    }
                };
        }
    }

    const customDatesStylesCallback = date => {
        switch (date.isoWeekday()) {

            case 6: // Sunday
                return {
                    textStyle: {
                        color: '#FFA26B',
                    }
                };
        }
    }
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Header Name='Tạo lịch trình' back={goback} />
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
                        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 9 }}>
                            <CalendarPicker
                             onDateChange={onDatechange}
                                onDateChange={onDatechange}
                                visible={isShowCalendar}
                                todayBackgroundColor="#EEDFF2" selectedDayColor="#7300e6"
                                selectedDayTextColor="#FFFFFF"
                                previousTitle='<'
                                nextTitle='>'
                                customDatesStyles='YYYY-MM'
                                todayTextStyle={{
                                    color: '#BE52F2',

                                }}
                                dayLabelsWrapper={{
                                    borderTopWidth: 0,
                                    borderBottomWidth: 1,
                                    borderStyle: 'dashed',
                                    borderRadius: 1,
                                    color: 'green'
                                }}
                                customDatesStyles={customDatesStylesCallback}
                                customDayHeaderStyles={customDayHeaderStylesCallback}
                                weekdays={
                                    [
                                        'Mon',
                                        'Tue',
                                        'Wed',
                                        'Thur',
                                        'Fri',
                                        'Sat',
                                        'Sun'
                                    ]}
                                nextTitleStyle={{ backgroundColor: '#FFFFFF', marginRight: 16, borderRadius: 2, elevation: 5, paddingLeft: 10, paddingRight: 10 }}
                                previousTitleStyle={{ backgroundColor: '#FFFFFF', marginLeft: 16, borderRadius: 2, elevation: 5, paddingLeft: 7, paddingRight: 10 }}
                            />


                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', height: 40, paddingHorizontal: 15, borderTopWidth: 1, borderStyle: 'dashed', paddingVertical: 10, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
                                    <TouchableOpacity onPress={Cancel}>
                                        <Text style={{ color: '#9B9EA3', fontSize: 14, fontWeight: '500' }}>Xóa</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={Done}>
                                        <Text style={{ color: '#8B3BFF', fontSize: 14, fontWeight: '500' }}>Áp dụng</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>
            <View style={styles.SectionStyle}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/add1.png')} //Change your icon image here
                        style={styles.ImageStyle}
                    />
                </TouchableOpacity>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Xuất phát "
                    placeholderTextColor='#989898'
                    underlineColorAndroid='rgba(0,0,0,0)'

                />
            </View>
            <View style={styles.SectionStyle}>
                <TouchableOpacity onPress={()=>navigation.navigate('Location')}>
                    <Image
                        source={require('../../assets/add2.png')} //Change your icon image here
                        style={styles.ImageStyle}
                    />
                </TouchableOpacity>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Đích đến"
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#989898'
                />
            </View>
            <View style={styles.SectionStyle}>
                <TouchableOpacity  onPress={_onPress} style={{ zIndex: 1 }}>
                    <Image
                        source={require('../../assets/add3.png')} //Change your icon image here
                        style={styles.ImageStyle}
                    />
                </TouchableOpacity>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Thời gian"
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#989898'
                />
            </View>
            <View style={styles.SectionStyle}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/add4.png')} //Change your icon image here
                        style={styles.ImageStyle}
                    />
                </TouchableOpacity>
                <TextInput
                    style={{ flex: 1, fontSize: 14 }}
                    placeholder="Người tham gia"
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#989898'
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
                
                    <View style={{flexDirection:'row'}}>
                        <Image
                            source={require('../../assets/add5.png')} //Change your icon image here
                            style={styles.ImageStyle}
                        />
                        <Text style={{alignSelf:'center',fontSize:13,color:'#989898'}}>Công khai</Text>
                    </View>
                    <View>
                        <Switch
                            trackColor={{ false: "#767577", true: "#00D52F" }}
                            thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{width:35,height:35}}
                        />
                    </View>
              
            </View>

            <View style={{ position: 'absolute', bottom: 10, left: 0, width: '100%', zIndex: 100 }}>
                <TouchableOpacity style={styles.touchable}>
                    <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '600' }}>Tạo lịch trình</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',

    }, searchSection: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        borderBottomWidth: 0.5,
        borderColor: '#000000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 16,
        width: 16,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        backgroundColor: '#FFB397',
        // position:'absolute',
        // bottom:310,
        // left:96,
        zIndex: 1000
        , marginHorizontal: 16,
        borderRadius: 5

    }
})
export default CreateSchedule