import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet,FlatList} from 'react-native'
import Header from '../Header'
import {FinishScheduleData} from '../../Data/ScheduleData'
import Favourite_Item from '../../component/Profile/Favourite_Item'
import {useSelector,useDispatch} from 'react-redux'
const Favourite =({navigation})=>{
    const dispatch = useDispatch();
    const item_tym = useSelector(state=>state.item_tym)
    const goback =()=>{
        navigation.goBack();
    }
    return(
        <View style={styles.container}>
            <Header Name='Yêu thích' back ={goback} />
            {
                item_tym ?
                <FlatList
                        data={item_tym}
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <Favourite_Item Item={item} />
                        }
                    />
                :
                <Text>Bạn chưa thêm danh mục yêu thích nào !</Text>
            }
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default Favourite;