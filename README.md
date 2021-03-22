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
