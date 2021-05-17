import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

const UpdateInfo = () => {
    const [state, setState] = useState('https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/83040435_175874177153572_7388585565899194368_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=mez_ijK9pdIAX_2jocS&_nc_ht=scontent.fhan14-1.fna&oh=a6f3a3cc4e3ab18aff0eabcd663c14dd&oe=609AFDBA')
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
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerTitle}>
                        <TouchableOpacity>
                            <Text>Hủy</Text>
                        </TouchableOpacity>
                        <Text>Sửa thông tin cá nhân</Text>
                        <TouchableOpacity>
                            <Text style={styles.save}>Lưu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.avatar}>
                    <Image style={styles.imageAvatar} source={{ uri: state }} />
                    <TouchableOpacity onPress={image}>
                        <Text style={styles.titleChange}>Thay đổi ảnh đại diện </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginHorizontal: 15, borderBottomWidth: 0.2, borderTopWidth: 0.2, paddingVertical: 6 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ alignContent: 'flex-end' }}>Họ tên </Text>
                        </View>
                        <View style={{ width: '70%' }}>
                            <TextInput placeholder='Phuong Nam' placeholderTextColor='#000000' style={{ borderBottomWidth: 0.2, borderBottomColor: '#B9B9B9' }} />

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text >Email </Text>
                        </View>
                        <View style={{ width: '70%' }}>
                            <TextInput placeholder='nguyenphuongnam06012sdsdsfdfd000@gmail.com' placeholderTextColor='#000000' style={{ borderBottomWidth: 0.2, borderBottomColor: '#B9B9B9' }} />

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text >Số điện thoại </Text>
                        </View>
                        <View style={{ width: '70%' }}>
                            <TextInput placeholder='0973712797' placeholderTextColor='#000000' />

                        </View>
                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerTitle: {
        height: 50,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
        , justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16
    }, save: {
        color: '#FF5F24'
    },
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 21
    },
    imageAvatar: {
        height: 70,
        width: 70,
        borderRadius: 30
    },
    titleChange: {
        color: '#FF5F24',
        paddingVertical: 16

    },
    info: {
        borderTopWidth: 0.3,
        borderBottomWidth: 0.3,
        borderTopColor: '#B9B9B9',
        borderBottomColor: '#B9B9B9',

    },
    blockInfo: {
        flexDirection: 'row', marginHorizontal: 15,


    },
    input: {
        borderBottomWidth: 0.2,
        height: 36,
        flex: 7,
        fontSize: 13,
        paddingTop: 10,
        lineHeight: 20,
        marginLeft: 70,
        borderBottomColor: '#B9B9B9',
        color: '#000000',
        fontSize: 14
    },
    input1: {

        height: 36,
        flex: 7,
        fontSize: 13,

        lineHeight: 20,
        marginLeft: 70,

    }
})
export default UpdateInfo