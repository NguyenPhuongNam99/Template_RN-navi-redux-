import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Responsive = () => {
    return (
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
            <View style={styles.left}>
                <View style={{ position: 'relative', paddingTop: '100%' }}>
                    <View style={{ ...StyleSheet.absoluteFillObject }}>
                        <Image style={{ width: '100%', height: '100%' }}
                            resizeMode='cover'
                            source={require('../assets/thu.png')} />
                    </View>
                </View>

            </View>
            {/* <View style={styles.right}>
                <View style={{ position: 'relative', paddingTop: '100%' }}>
                    <View style={{ ...StyleSheet.absoluteFillObject }}>
                        <Image style={{ width: '100%', height: '100%' }}
                            resizeMode='cover'
                            source={require('../assets/thu.png')} />
                    </View>
                </View>

            </View> */}
            <View style={styles.right}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.top}>
                        <View style={{ position: 'relative', paddingTop: '100%' }}>
                            <View style={{ ...StyleSheet.absoluteFillObject }}>
                                <Image style={{ width: '100%', height: 77 }}
                                  resizeMode='cover'
                                    source={require('../assets/thu.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={{ position: 'relative', paddingTop: '100%' }}>
                            <View style={{ ...StyleSheet.absoluteFillObject }}>
                                <Image style={{ width: '100%', height: '100%' }}
                                    resizeMode='cover'
                                    source={require('../assets/thu.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    left: {
        backgroundColor: 'blue',
        width: '40%',
        height: 160
    },
    right: {
        backgroundColor: 'green',
        width: '60%',
        height: 160
    },
    top: {
        width: '60%'
    },
    bottom: {
        width: '30%'
    }
})
export default Responsive;