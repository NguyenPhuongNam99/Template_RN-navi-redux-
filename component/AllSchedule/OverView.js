import React from 'react'
import {View,Text,Image,TouchableOpacity,FlatList,StyleSheet,ScrollView} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import {scheduleData2} from '../../Data/OverViewData'
const OverView =()=>{
    const data =[
        {
            id:1,
            title:'Lịch trình',
            name:'SCHEDULE'
        },
        {
            id:2,
            title:'Máy bay',
            name:'AIRPLANE'
        },
        {
            id:3,
            title:'Khách sạn',
            name:'HOTEL'
        },
        {
            id:4,
            title:'Thăm quan',
            name:'VISIT'
        },
    ]
    const dispatch = useDispatch();
    const statusOver = useSelector(state=>state.statusOver)
    const dispatchdata = (Datatype)=>{
        dispatch({type:Datatype})
    }
    const getData =(statusName)=>{
        if(statusOver == 'SCHEDULE'){
            return scheduleData
        }
        if(statusOver == 'HOTEL'){
            return hotelData
        }
        if(statusOver == 'AIRPLANE'){
            return airplaneData
        }
        if(statusOver == 'VISIT'){
            return visitData
        }
    }
    const getStyle= (statusName)=>{
        if(statusOver === statusName){
            return{
                backgroundColor:'#FF5F24',
                borderRadius:5
            }
        }
        else{
           return{ backgroundColor:'#ECF1FF',borderRadius:5}
        }
    }
    const ScheduleItem =({item})=>{
        return(
            <View style={styles.blockImage}>
                <Image style={styles.imageBlock} source={item.image} />
                <View style={styles.timer}>
                    <Text style={styles.textTimer}>{item.timerDate}</Text>
                </View>
                <View style={{backgroundColor:'green',marginTop:15}}>
                     <Text>{item.date}</Text>
                <Text>{item.text}</Text>
                </View>
               
            </View>
        )
    }
    return(
        <View>
  <ScrollView >
        
        <View style={styles.container}>
          
            <View style={{ height: 150, position: 'relative' }}>


                <View style={styles.headerImage}>
                    <Image style={styles.imageBanner} source={require('../../assets/qn1.jpg')} />
                </View>
                <View style={styles.blockAvatar}>
                    <Image style={styles.avatar} source={require('../../assets/nam.jpg')} />
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleHeader}>Quy Nhơn ,Bình Định</Text>
                    <Text style={styles.titleFontSize}>5/12 -10/12</Text>
                </View>
                <View style={styles.option}>
                    {
                        data.map((item)=>(
                                <TouchableOpacity key={item.id} onPress={()=>dispatchdata(item.name)} style={[styles.touchable,getStyle(item.name)]}>
                                    <Text>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        )
                    }
                </View>
                <View style={styles.blockbody}>
                    <Text style={styles.plan}>Kế hoạch</Text>
                    <TouchableOpacity>
                        <Text style={styles.all}>Tất cả  ></Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <FlatList
                        data ={scheduleData2}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        keyExtractor={(item)=>item.id.toString()}
                        renderItem={({item})=>
                            <ScheduleItem  item ={item}/>
                    }
                    />
                   

                </View>
                <View style={styles.transformBlock}>
                    <Text style={{fontWeight:'bold',color:'#000000',fontSize:14,marginBottom:10}}>Chuyến đi gồm </Text>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <View style={styles.left}>
                            <Image style={{width:28,height:18,marginRight:11}} source={require('../../assets/anh23.png')} />
                        </View>
                        <View style={styles.right}>
                            <Text style={{fontSize:13,fontWeight:'bold'}}>Khách sạn</Text>
                            <Text style={{fontSize:12,color:'#9A9A9A'}}>1 khách sạn, 5 ngày 4 đêm</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <View style={styles.left}>
                            <Image style={{width:28,height:18,marginRight:11}} source={require('../../assets/v33.png')} />
                        </View>
                        <View style={styles.right}>
                        <Text style={{fontSize:13,fontWeight:'bold'}}>Máy bay</Text>
                            <Text style={{fontSize:12,color:'#9A9A9A'}}>2 vé khứ hồi</Text>
                        </View>
                    </View>
                </View>
                <Text style={{fontSize:14,fontWeight:'bold'}}> Thành viên</Text>
                <View style={styles.info}>
                        <Image style={{width:40,height:40,borderRadius:19,marginRight:10}} source={require('../../assets/nam.jpg')} />
                        <Image style={{width:40,height:40,borderRadius:19}} source={require('../../assets/nam.jpg')} />

                </View>
                
            </View>
           
        </View>
        </ScrollView> 
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1
    },
    headerImage:{
        height:150,
        backgroundColor:'green',
        position:'relative',
        
    },
    imageBanner:{
        width:'100%',
        height:'100%'
    },
    blockAvatar:{
        // justifyContent:'center',
        // alignItems:'center',
        position:'absolute',
        bottom:-18,
        left:'45%'
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:20
    },
    title:{
        justifyContent:'center',
        alignItems:'center',
        zIndex:100,
        marginTop:20
    },
    titleHeader:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:2
    },
    titleFontSize:{
        color:'#333333',
        fontSize:12
    },
    option:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:16,
        marginBottom:20
       
    },
    touchable:{
        width:85,
        height:30,
        // backgroundColor:'#FF5F24',
        justifyContent:'center',
        alignItems:'center'
    },

    //body
    blockbody:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:15
    },
    plan:{
        color:'#000000',
        fontSize:14,
        fontWeight:'bold'
    },
    all:{
        fontSize:12,
        color:'#9E9E9E'
    },
    blockImage:{
        height:200,
        width:150,
        backgroundColor:'green',
        marginLeft:16,
        position:'relative'
    },
    imageBlock:{
        width:'100%',
        height:'100%'
    },
    timer:{
        position:'absolute',
        bottom:20,
        left:15,
        backgroundColor:'green',zIndex:100
    },
    textTimer:{
        color:'green',
        fontSize:14,
        fontWeight:'bold'
    },
    transformBlock:{
        marginHorizontal:15,
        marginVertical:13
    },
    info:{
        flexDirection:'row',
        marginHorizontal:15
    }
})
export default OverView