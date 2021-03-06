import React from 'react';
import { View, Text, Image, StyleSheet, FlatList ,SafeAreaView} from 'react-native';
import Header from '../Header'
import { Destionation12_Head1 } from '../../Data/Destionation12_Head_Data'
const Destionation12_Head = ({navigation}) => {
    const goback = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Header Name='Điểm đến tháng 12' back={goback} />
            <View style={styles.flatlist}>
                <FlatList
                    data={Destionation12_Head1}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.block_image}>
                                <Image
                                    style={styles.image}
                                    source={item.image}
                                />
                                <View style={styles.background} />
                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.block}>
                                    <Image style={styles.image_loction} source={item.image_location} />
                                    <Text style={styles.location}>{item.location}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'green'
    },
    flatlist: {
        marginHorizontal: 16,

        paddingBottom: 80
    },
    block_image: {
        height: 180,
        width:'100%',
        marginVertical: 10,
       
    },
    title: {
        position: 'absolute',
        top: '46%',
        left: '43%',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius:10
    },
    background: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    block: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 16,
        left: 16
    },
    image_location:{
        width:11,
        height:14,
        marginTop:16
        
    },
    location: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        marginLeft:6
    }
})
export default Destionation12_Head;