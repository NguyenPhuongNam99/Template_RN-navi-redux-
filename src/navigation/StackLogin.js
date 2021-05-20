import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../../component/Login/Login'
import BookScreen from "../BookScreen";
import UpdateProfile from '../../src/UpdateProfile'

const StackLogin = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

            {/* <Stack.Screen name="ConfirmOTP" component={ConfirmOTP}  options={{headerShown: false}} /> */}
            <Stack.Screen name="BookScreen" component={BookScreen} options={{ headerShown: false }} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}
export default StackLogin;