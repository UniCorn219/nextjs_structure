import { combineReducers } from '@reduxjs/toolkit';

import { reducer as user } from './user';

export default combineReducers({
  user,
});
