import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import Header from '../Header';
import { Followdata } from '../../Data/FollowData'
const Follow = ({ navigation }) => {
    const goback = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Header Name='Người theo dõi' back={goback} />


            <View style={styles.block}>



                <FlatList
                    data={Followdata}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.Follow}>
                                <View style={styles.BlockImage}>
                                    <Image style={{ width: 34, height: 34, borderRadius: 17 }} source={{uri:item.image}} />
                                    <Text style={styles.name}>{item.name}</Text>
                                </View>
                                <TouchableOpacity style={styles.touchabe}>
                                    <Text style={styles.status}>Theo dõi</Text>
                                </TouchableOpacity>
                            </View>

                           
        
                        )
                    }

                    }

                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    block: {
        marginVertical: 25,
       
      
    },
    Follow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderBottomWidth:1,
        borderBottomColor:'#B9B9B9',
        paddingBottom:7,
        paddingTop:7,
        paddingHorizontal:15,
        
        

    },
    BlockImage: {
        flexDirection: 'row'
    },
    name: {
        alignSelf: 'center',
        paddingLeft: 9
    }, touchabe: {
        borderWidth: 1,
        borderColor: '#FF5F24',
        justifyContent: 'center',
        alignItems: 'center',
        // padding:6,
        // paddingTop:3,
        // paddingBottom:3,
        padding: 6,
        borderRadius: 8,
        height: 20,
        alignSelf: 'center'

    },
    status: {
        fontSize: 10,
        color: '#FF5F24',
        lineHeight: 20
    }
})
export default Follow