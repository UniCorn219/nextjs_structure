import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
  ThunkAction,
  AnyAction,
} from '@reduxjs/toolkit';

import app from './app';
import domain from './domain';
import ui from './ui';

const rootReducer = combineReducers({
  app,
  domain,
  ui,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});


const makeStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    preloadedState,
    devTools: true,
  });
};

export type Store = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type Action<R = any> = ThunkAction<
  Promise<R>,
  RootState,
  null,
  AnyAction
>;

export default makeStore;
