import React from 'react';
import { View, Text, Image ,TouchableOpacity} from 'react-native';

const MultipleDetail = ({ Item,check ,pass,check1}) => {
    const xuly =()=>{
       check &&check()
       pass && pass()
       check1 && check1()
    }
    return (
        <TouchableOpacity onPress={xuly} style={{marginLeft:15}}>
            <View>
                <Image style={{ width: 160, height: 150, borderRadius: 5}} source={Item.image} />
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#A2A2A2' }}>{Item.version}</Text>
                        <Image style={{ width: 62, height: 10, borderRadius: 5, marginTop: 4 }} source={Item.comment} />

                    </View>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: '500' }}>{Item.name}</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                        <View style={{width: 12, height: 14,}}>
                            <Image 
                            
                            source={Item.location} />
                        </View>
                        
                        <Text style={{  fontSize: 10, fontWeight: 'normal', color: '#3076FE' }}>{Item.des}</Text>
                    </View>
                    <Text style={{ fontSize: 12, color: '#FF2424', fontWeight: '500' }}>{Item.price}</Text>

                </View>

            </View>
        </TouchableOpacity>

    )
}
export default MultipleDetail;

//casch xu ly khi co nhieu file,co nhieu ham gioong nhu the