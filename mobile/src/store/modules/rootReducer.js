import { combineReducers } from 'redux';

import auth from './auth/reducer';
import checkin from './checkin/reducer';
import order from './order/reducer';

export default combineReducers({
  auth,
  checkin,
  order,
});
