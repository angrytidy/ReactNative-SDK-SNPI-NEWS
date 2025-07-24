import {NavigationActions} from '@react-navigation/native';

let _navigator;
const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};
const navigate = (routeName, params) => {
  // console.log(routeName)
  _navigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      routeName,
      params,
    }),
  );
};

// add other navigation functions that you need and export themexport default {  navigate,  setTopLevelNavigator,};
export default {
  navigate,
  setTopLevelNavigator,
};
