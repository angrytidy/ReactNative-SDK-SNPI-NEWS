import {ActionConst} from 'react-native-router-flux';

/*
 * Routing component (from modules folder)
 */
import CheckAuth from 'modules/CheckAuth';

const routes = [
  {
    key: 'CheckAuth',
    component: CheckAuth,
    type: ActionConst.RESET,
    initial: true,
  },
];

export default routes;
