import React from 'react';
import {View,Text,Share,Button} from "react-native";

const OrderScreen =()=>{
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    return(
        
        <View>
            <Text>Hello OrderScreen</Text>
            <Button onPress={onShare} title="Share" />

        </View>
    )
}
export default OrderScreen;