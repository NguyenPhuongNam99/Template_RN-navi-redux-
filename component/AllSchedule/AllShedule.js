import React from 'react'
import {View,Text,Image,TouchableOpacity,StyleSheet, FlatList} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
const AllSchedule =()=>{
    const filterStatus = useSelector(state => state.filterStatus)
    const getStyle = (styleTouchable) => {
        if (styleTouchable === filterStatus) {
            return { backgroundColor: '#FF5F24' }
        }
        else {
            return { backgroundColor: '#EFEFEF' }
        }
    }
    const setAction = (Status) => {
        dispatch({ type: Status })
    }
    const primaridata=[
        {
            id:1,
            name:'hello'
        },
        {
            id:2,
            name:'hello'
        },
        {
            id:3,
            name:'hello'
        },
    ]
    const Doubledata=[
        {
            id:1,
            name:'hesdsdllo',
            tilte:'hellolo'
        },
        {
            id:2,
            name:'hsdsdsello',
            tilte:'hellolo'
        },
        {
            id:3,
            name:'sdssdsd',
            tilte:'hellolo'
        },
    ]

    const dispatch =useDispatch()
    const getData=()=>{
        if(filterStatus =='Primary'){
            return primaridata
        }
        if(filterStatus=='Double'){
            return Doubledata
        }
    }
    const Primaryhe =({item})=>{
        return(
            <View style={{flex:1,backgroundColor:'orange'}}>
                <Text>{item.name}</Text>
            </View>
        )
    }
    const Doublehe =({item})=>{
        return(
            <View style={{flex:1,backgroundColor:'green'}}>
                <Text>{item.name}</Text>
                <Text>{item.tilte}</Text>
            </View>
        )
    }
    return(
        <View style={StyleSheet.container}>
             <View style={styles.header}>
                    <TouchableOpacity style={[styles.touchable, getStyle('Primary')]} onPress={() => setAction('Primary')}>
                        <Text style={{ color: 'black' }}>Độc hành</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable, getStyle('Double')]} onPress={() => setAction('Double')}>
                        <Text style={{ color: 'black' }}>Cặp đôi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable, getStyle('Family')]} onPress={() => setAction('Family')}>
                        <Text style={{ color: 'black' }} >Gia đình</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable, getStyle('Tour')]} onPress={() => setAction('Tour')}>
                        <Text style={{ color: 'black' }}>Tour</Text>
                    </TouchableOpacity>

            </View>
            <FlatList 
                data={getData()}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>
                filterStatus =='Primary'? <Primaryhe item={item} /> : filterStatus=='Double' ? <Doublehe item={item} /> : null
            
            }
            />
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1
    } ,header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 17,
        // height:30

    },
    touchable: {
        height: 26,
        width: 70,
        backgroundColor: '#EFEFEF',

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        color: 'black',
        fontSize: 14,

    }, 
})
export default AllSchedule;