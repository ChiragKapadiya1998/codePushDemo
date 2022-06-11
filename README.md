# codePushDemo

video =>https://www.youtube.com/watch?v=ejVPtJF3x7s 

1)https://appcenter.ms/users/chirag.exelance-gmail.com/apps/react-native-codepushandroid/distribute/code-push/Staging

2)https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-android.md

3)https://www.decoide.org/react-native/docs/signed-apk-android.html

4)yarn global add appcenter-cli


Staging=Staging
Pro=Pro

5)add to build =====> appcenter codepush release-react -a chirag.exelance-gmail.com/react-native-codepushandroid -d Staging


6)https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cli

=>yarn add  react-native-code-push


import codePush from "react-native-code-push";

class MyApp extends Component {
}

MyApp = codePush(MyApp);
