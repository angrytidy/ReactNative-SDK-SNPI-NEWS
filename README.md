#SNPI APP (functional config at 17/12/2024)

### Technologies
This app is written in js using React Native Framework

### Prerequisites
Please read the official documentation, https://reactnative.dev/docs/environment-setup
This app is configured to use React Native CLI.

### Required tools
#### Android
Before running the app, please install :
- Android SDK 21
- JAVA SDK
- ADB
- ensure JAVA_HOME and ANDROID_HOME system env variables are defined

### Installation
- yarn install (IF FAIL use sudo)

# Android - Build local: react native 
- Node : v18.16.0
- yarn android (add sudo if fails)
- (WARNING 1: if you have an error like "ERR_OSSL_EVP_UNSUPPORTED" in RN CLI, please add "export NODE_OPTIONS=--openssl-legacy-provider && " to Package.json "scripts/android" => "android": "export NODE_OPTIONS=--openssl-legacy-provider && react-native run-android",)
- (WARNING 2: If you still face errors you cannot debug, please add "--verbose" to to Package.json "scripts/android" =>  "android": "react-native run-android --verbose",) 

# Android - Build Archive (APK || aab) (to publish/deploy GooglePlayStore) | :
- Android APK Release : cd android + ./gradlew assembleRelease (if fail try with sudo AND/OR ./gradlew app:assembleRelease)
- Android AAB : cd android + ./gradlew bundleRelease (if fail try with sudo AND/OR ./gradlew app:bundleRelease)

# iOS - Build local: react native 
### Case 1: Mac Intel | Windows
- Node : v16.14.0
- cd ios && pod install 
- cd ..
- yarn ios (add sudo if fails)
- (WARNING 1: if you still have errors try a run with xCode to have more information in xCode CLI & maybe apply a fix proposed by xCode)
- (WARNING 2: if you have an error like "ERR_OSSL_EVP_UNSUPPORTED" in RN CLI, please add "export NODE_OPTIONS=--openssl-legacy-provider && " to Package.json "scripts/ios" =>  "ios": "export NODE_OPTIONS=--openssl-legacy-provider && react-native run-ios",)
- (WARNING 3: If you still face errors you cannot debug, please add "--verbose" to to Package.json "scripts/ios" =>  "ios": "react-native run-ios --verbose",) 

### Case 2: Mac Mx (1/2/etc)
- Node : v16.14.0nv
- cd ios && arch -x86_64 pod install
- cd ..
- Go on xCode Project (ios/SNPINews.xcworkspace)
    - Project "SNPINews"
    - Architectures/Excluded Architectures
    - Add "arm64" to all
        - Excluded Architectures (+ "arm64")
            - Debug (+ "arm64")
                - Any iOS Simulator SDK (+ "arm64")
            - Release (+ "arm64")
                - Any iOS Simulator SDK (+ "arm64")
- On xCode => Run Project on Simulator
- (WARNING 1: if you still have errors check xCode CLI & maybe apply a fix proposed by xCode)
- (WARNING 2: if you have an error like "ERR_OSSL_EVP_UNSUPPORTED" in RN CLI, please add "export NODE_OPTIONS=--openssl-legacy-provider && " to Package.json "scripts/ios" =>  "ios": "export NODE_OPTIONS=--openssl-legacy-provider && react-native run-ios",)
- (WARNING 3: If you still face errors you cannot debug, please add "--verbose" to to Package.json "scripts/ios" =>  "ios": "react-native run-ios --verbose",) 

# iOS - Build Archive (to publish/deploy AppStore):
- Node : v16.14.0
- cd ios && arch -x86_64 pod install
- cd ..
- If "Excluded Architectures" are set with "arm64" => delete all
    - Go on xCode Project (ios/SNPINews.xcworkspace)
    - Project "SNPINews"
    - Architectures/Excluded Architectures
    - Delete "arm64" from all
        - Excluded Architectures (- "arm64" => keep empty)
            - Debug (- "arm64" => keep empty)
                - Any iOS Simulator SDK (- "arm64" => keep empty)
            - Release (- "arm64" => keep empty)
                - Any iOS Simulator SDK (- "arm64" => keep empty)
- On xCode => increment version + Product/Archive (then deploy to testFlight)

# iOS - Error cases
- RCT Foly : [text](https://github.com/facebook/react-native/issues/39568#issuecomment-1746966624)