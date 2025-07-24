// ...
// import {Actions} from 'react-native-router-flux';
import strings from 'config/strings';

import {displayToast} from 'lib/interactions';

export default () => {
  displayToast(strings.pleaseLogin);
  // ...
  // Actions.Login();
};
