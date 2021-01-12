import { combineReducers } from '@reduxjs/toolkit';

import { reducer as app } from './app';
import { reducer as notification } from './notification';

export default combineReducers({
  app,
  notification,
});
