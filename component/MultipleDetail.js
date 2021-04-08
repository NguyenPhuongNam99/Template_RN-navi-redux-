import React from 'react';
import { View, Text, Image ,TouchableOpacity} from 'react-native';

const MultipleDetail = ({ Item,check ,pass}) => {
    const xuly =()=>{
        check()
        pass()
    }
    return (
        <TouchableOpacity onPress={xuly}>
            <View>
                <Image style={{ width: 160, height: 150, borderRadius: 5, marginHorizontal: 11 }} source={Item.image} />
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 9 }}>
                        <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#A2A2A2', marginHorizontal: 8 }}>{Item.version}</Text>
                        <Image style={{ width: 62, height: 10, borderRadius: 5, marginTop: 4 }} source={Item.comment} />

                    </View>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: '500', marginHorizontal: 11 }}>{Item.name}</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 2 }}>
                        <Image style={{ width: 12, height: 14, borderRadius: 14 }}
                            resizeMode='stretch'
                            source={Item.location} />
                        <Text style={{ paddingHorizontal: 10, fontSize: 10, fontWeight: 'normal', color: '#3076FE' }}>{Item.des}</Text>
                    </View>
                    <Text style={{ fontSize: 12, color: '#FF2424', fontWeight: '500', marginHorizontal: 13 }}>{Item.price}</Text>

                </View>

            </View>
        </TouchableOpacity>

    )
}
export default MultipleDetail;

//casch xu ly khi co nhieu file,co nhieu ham gioong nhu the