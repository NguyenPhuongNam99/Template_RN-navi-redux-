import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native'

const Viewok =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.left}>
                    <Image resizeMode='stretch' style={{width:'100%',height:'100%'}} source={require('../assets/vi1.png')} />
                </View>
                <View style={styles.right}>
                    <View style={styles.block1}>
                    <Image resizeMode='stretch' style={{width:'100%',height:'100%'}} source={require('../assets/vi2.png')} />

                    </View>
                    <View style={styles.block2}>
                        <View style={styles.bt1}>
                        <Image resizeMode='stretch' style={{width:'100%',height:'100%'}} source={require('../assets/vi3.png')} />

                        </View>
                        <View style={styles.bt2}>
                        <Image resizeMode='stretch' style={{width:'100%',height:'100%'}} source={require('../assets/vi2.png')} />

                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:230,
        marginHorizontal:16,marginVertical:10
    },
    top:{
        flex:0.7,
      
        flexDirection:'row'
    },
    bottom:{
        flex:0.3,
        backgroundColor:'yellow'
    },
    left:{
        flex:4,
     marginRight:7
    },
    right:{
        flex:6,
       
    },
    block1:{
        flex:1
    },
    block2:{
        flex:1,
        flexDirection:'row',
        marginTop:6
    },
    bt1:{
        flex:1,marginRight:5
    },bt2:{
        flex:1
    }
})
export default Viewok;