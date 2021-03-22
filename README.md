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
