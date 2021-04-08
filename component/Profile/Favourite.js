import React from 'react';
import {View,Text,Imaga,TouchableOpacity,StyleSheet,FlatList} from 'react-native'
import Header from '../Header'
import {FinishScheduleData} from '../../Data/ScheduleData'
import ScheduleNow_Item from '../../component/ScheduleNow_Item'
const Favourite =({navigation})=>{
    const goback =()=>{
        navigation.goBack();
    }
    return(
        <View style={styles.container}>
            <Header Name='Yêu thích' back ={goback} />
            <FlatList
                        data={FinishScheduleData}
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <ScheduleNow_Item Item={item} />
                        }
                    />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default Favourite;