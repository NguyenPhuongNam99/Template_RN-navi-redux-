# Template_RN-navi-redux-

 1---ERROR CODE WHEN I SET UP QRCODE--CAMERA PACKED 
(D8: Cannot fit requested classes in a single dex file)

How to fix : android/app/build.gradle
defaultConfig {
        // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
        ........
        multiDexEnabled true
    }


dependencies {
    ...........
    implementation 'com.android.support:multidex:2.0.1'
}


2 Insstall REACT-NATIVE-CROP-PICKER
ERROR :
ANDROID/BUILD.GRADLER :
dependencies {
        classpath("com.android.tools.build:gradle:4.0.1")
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
  2 Gradel.wrapper property : change :  distributionUrl=https://services.gradle.org/distributions/gradle-6.1.1-all.zip
  
 3 : NDK NOT VERSION OR NDK NOT HAVE A SOURCE PROPERTIES FILESS:
 ==>ANDROID STUDIO INSTALL VERSION ==>SEARCH STACKOVERFLOW ==>HOẶC KHI BÁO LỖI NÓ SẼ IN RA VERSION MẶC ĐỊNH ==>TA CHỌN RỒI INSTALL
 
 
![image](https://user-images.githubusercontent.com/73121884/113107113-ba32b100-922d-11eb-946d-9ba168a60414.png)
==>Slove PROBLEM :
              +)Kiểm tra trong ANDROID STUDIO đã cài NDK chưa ? ==>nếu chưa thì install ===>bản mặc định của nó ( hiển thị khi build project lỗi )==>tìm rồi install
              +)vào code tìm app/build.gradle : search NDK version : chỉnh sửa giống với version đã install ở android studio
              
 Vào android/build.gradlew :
 ![image](https://user-images.githubusercontent.com/73121884/118256681-f5d0c400-b4d7-11eb-85f8-62bfdd789c37.png)
project có ndkVersion :...... ===>tìm version này trong android studio và thiết lập 

![image](https://user-images.githubusercontent.com/73121884/118256847-2153ae80-b4d8-11eb-881a-b2abb1992cdf.png)
==>nhìn version trong project React native của mình và thiết lập version đó trong android studio
              
 Hoặc thử cách sau : Thêm đường dẫn ndk vào project của mình ( thêm vào treong file local.property)
 ndk.dir=C\:\\Users\\HYDRO\\AppData\\Local\\Android\\Sdk\\ndk\\20.1.5948944
==>20.1 .... => là version của project mình trong file build.gradle
              
 4 Lỗi khi build Project
 ERROR : The specified Android SDK Build Tools version (25.0.0) is ignored, as it is below the minimum supported version (29.0.2) for Android Gradle Plugin 4.0.1.
 ==>Lỗi phiên bản SDK khi build 
 
 ![image](https://user-images.githubusercontent.com/73121884/113256117-ed8b4380-92f2-11eb-825f-4321f38a6a4a.png)
 vào APP/Build.gradle xem các phần version có giống với version gợi ý ko ==>như trên thì lỗi thông báo nên dùng version 25.0.0  
 (Bonus thêm là vào Android Studio xóa wipe Data của Máy điện thoại )
link youtube : https://www.youtube.com/watch?v=Tx6jt5L1Vq0






5 INSTALL REACT-NATIVE-MAPS:
https://www.youtube.com/watch?v=4qq0GQPkfjI
A littile create key API :
   =>Mobile App key :https://www.youtube.com/watch?v=rv5JMRfoayI
   
   Create KEYAPI :
   ![image](https://user-images.githubusercontent.com/73121884/118014763-be4e0480-b37d-11eb-8318-a4c03ee8054b.png)
   ( khi đã cài thư viện ANDROID SDK TRÊN MOBILE CỦA CONSOLE.CLOUD.GOOGLE)
   Mọi cài đặt thì xem trong video 
   
   
   
   6 Developer error when Login google signin with firebase
   https://stackoverflow.com/questions/54417232/react-native-google-signin-gives-developer-error
   cd android ===> keytool -exportcert -keystore app/debug.keystore -list -v ===>tạo ra key mới 
   và xóa bỏ chỗ config
   ![image](https://user-images.githubusercontent.com/73121884/118304399-d6a25880-b510-11eb-95a6-d4a595f5fc71.png)


 `
 
 7 Cách cài đặt google login
 ==?them path C:\Program Files\Java\jdk1.8.0_281\bin ==>enviroment  ===>để chạy keytool ko bị lỗi 
 
 ==>tạo keystore rồi mới tạo sha1 key 
 tạo keystore
https://reactnative.dev/docs/signed-apk-android


 

tạo sha1
keytool -list -v -keystore D:\Template_RN-navi-redux-\android\app\mykey.keystore -alias key0 -storepass android -keypass android


lưu ý packed name trong firebase phải trùng với packed name trong project của mình
![image](https://user-images.githubusercontent.com/73121884/118305871-c8553c00-b512-11eb-9a2b-e9f5856c126e.png)
![image](https://user-images.githubusercontent.com/73121884/118305911-d4d99480-b512-11eb-8d64-c66b0c878b6a.png)

8 spawnSync ./gradlew EACCES error when running react native project on emulator udara

solved : chmod 755 android/gradlew 


https://stackoverflow.com/questions/54541734/spawnsync-gradlew-eacces-error-when-running-react-native-project-on-emulator-u


   
