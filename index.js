/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
 import {name as appName} from './app.json';
// import login from './src/screens/auth/login';
import intro from './src/screens/intro';
import intro2 from './src/screens/intro2'
import intro3 from './src/screens/intro3'
import signup from './src/screens/signup';
import login from './src/screens/login';
import signup2 from './src/screens/signup2'

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => login);
// AppRegistry.registerComponent(appName, () => intro);
// AppRegistry.registerComponent(appName, () => intro2);
// AppRegistry.registerComponent(appName, () => intro3);
// AppRegistry.registerComponent(appName, () => signup);
// AppRegistry.registerComponent(appName, () => signup2);



