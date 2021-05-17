import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from 'react-native'
import { State } from 'react-native-gesture-handler';
import Header from '../Header'
import { useDispatch, useSelector } from 'react-redux'
const PeopleJoin = ({ navigation }) => {
    const dispatch = useDispatch()
    const ADDSTATUS = () => {
        if (peopleOld.countOld > 0 && peopleMidle.countMidle > 0 && peopleBaby.countBaby > 0) {
            dispatch({ type: 'ADDSTATUS', peopleOld: peopleOld, peopleMidle: peopleMidle, peopleBaby: peopleBaby })
            navigation.navigate('ScreenSuggest')
        }

        else {
            console.log('null')
        }
    }

    const goback = () => {
        navigation.goBack()
    }
    const [peopleOld, setPeopleOld] = useState({ name: 'người lớn', countOld: 2 })
    const [peopleMidle, setPeopleMidle] = useState({ name: 'trẻ em', countMidle: 0 })
    const [peopleBaby, setPeopleBaby] = useState({ name: 'em bé', countBaby: 0 })
    const setCoundOld = () => {
        setPeopleOld({ ...peopleOld, countOld: peopleOld.countOld + 1 })
    }
    const subCoundOld = () => {
        if (peopleOld.countOld > 0) {
            setPeopleOld({ ...peopleOld, countOld: peopleOld.countOld - 1 })
        }

    }
    const setCoundMidle = () => {
        setPeopleMidle({ ...peopleMidle, countMidle: peopleMidle.countMidle + 1 })
    }
    const subCoundMidle = () => {
        if (peopleMidle.countMidle > 0) {
            setPeopleMidle({ ...peopleMidle, countMidle: peopleMidle.countMidle - 1 })
        }

    }
    const setCoundBaby = () => {
        setPeopleBaby({ ...peopleBaby, countBaby: peopleBaby.countBaby + 1 })
    }
    const subCounBaby = () => {
        if (peopleBaby.countBaby > 0) {
            setPeopleBaby({ ...peopleBaby, countBaby: peopleBaby.countBaby - 1 })
        }

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Header Name='Người tham gia' back={goback} />
                <View style={styles.blockBig}>


                    <View style={styles.blockInfo}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Người lớn</Text>
                            <Text style={styles.sub}>(trên 12 tuổi )</Text>
                        </View>
                        <View style={styles.right}>
                            <TouchableOpacity onPress={subCoundOld}>
                                <Image source={require('../../assets/sub.png')} />
                            </TouchableOpacity>

                            <Text style={styles.status}>{peopleOld.countOld} </Text>
                            <TouchableOpacity onPress={setCoundOld}>
                                <Image source={require('../../assets/inc.png')} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={styles.blockInfo}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Trẻ em</Text>
                            <Text style={styles.sub}>(2 - 12 tuổi )</Text>
                        </View>
                        <View style={styles.right}>
                            <TouchableOpacity onPress={subCoundMidle}>
                                <Image source={require('../../assets/sub.png')} />
                            </TouchableOpacity>

                            <Text style={styles.status}>{peopleMidle.countMidle} </Text>
                            <TouchableOpacity onPress={setCoundMidle}>
                                <Image source={require('../../assets/inc.png')} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={styles.blockInfo}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Em bé</Text>
                            <Text style={styles.sub}>dưới 1 tuổi</Text>
                        </View>
                        <View style={styles.right}>
                            <TouchableOpacity onPress={subCounBaby}>
                                <Image source={require('../../assets/sub.png')} />
                            </TouchableOpacity>

                            <Text style={styles.status}>{peopleBaby.countBaby} </Text>
                            <TouchableOpacity onPress={setCoundBaby}>
                                <Image source={require('../../assets/inc.png')} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                <View style={{ position: 'absolute', bottom: 10, width: '100%', zIndex: 100 }}>
                    <TouchableOpacity onPress={ADDSTATUS} style={styles.touchableADD}>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '600' }}>Xong</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    blockBig: {
        marginTop: 32
    },
    blockInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        borderBottomWidth: 0.5,
        marginHorizontal: 15,

        height: 40,
        alignItems: 'center',
        marginBottom: 20
    },
    left: {
        flexDirection: 'row'
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title: {
        color: '#090909',
        fontSize: 14,
        fontWeight: '900',
        fontFamily: 'OpenSans-SemiBold'
    },
    sub: {
        color: '#9A9A9A',
        paddingLeft: 8
    },
    status: {
        marginHorizontal: 8
    },
    touchable: {
        height: 35,
        backgroundColor: '#FF5F24',
        justifyContent: 'center',
        alignItems: 'center',
        // position:'absolute',
        // bottom:0,
        width: '100%', marginHorizontal: 20

    },

    touchableADD: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        backgroundColor: '#FF5F24',
        // position:'absolute',
        // bottom:310,
        // left:96,
        zIndex: 1000
        , marginHorizontal: 16,
        borderRadius: 5

    }
})
export default PeopleJoin