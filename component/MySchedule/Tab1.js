import React from 'react';
import{ View,Text} from 'react-native';
import TabVoucher from './index';

const Tab1 =()=>{
    return(
        <View style={{flex:1}}>
            <View style={{backgroundColor:'green',height:70}}>
                <Text>hello viet nam</Text>
            </View>
            <TabVoucher />
        </View>
    )
}
export default Tab1 ;