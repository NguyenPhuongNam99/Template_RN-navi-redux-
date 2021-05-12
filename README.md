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
   
