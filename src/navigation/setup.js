import firebase from '@react-native-firebase/app'
import auth from 'react-native-firebase/auth'
import database from '@react-native-firebase/database'
import storage from '@react-native-firebase/storage'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';


GoogleSignin.configure({
    webClientId:'14036446631-da7qus8k46shnqb8ghi4tk7s3fulag29.apps.googleusercontent.com'
});

const firebaseConfig ={
    apiKey:''
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export default ()=>{
    return{ firebase,auth,database,storage}
}