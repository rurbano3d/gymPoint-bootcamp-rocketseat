import { NavigationActions } from 'react-navigation';

let nav;

function setTopLevelNavigator(navigationRef) {
  nav = navigationRef;
}

function navigate(routeName, params) {
  nav.dispatch(NavigationActions.navigate({ routeName, params }));
}

export default {
  setTopLevelNavigator,
  navigate,
};
