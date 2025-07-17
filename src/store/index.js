import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createReducer from 'reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['global'],
};

const persistedReducer = persistReducer(persistConfig, createReducer());

export default function configureStore() {
  let enhancer;

  if (process.env.NODE_ENV === 'development') {
    enhancer = composeWithDevTools(applyMiddleware(thunk));
  } else {
    enhancer = compose(applyMiddleware(thunk));
  }

  const store = createStore(persistedReducer, enhancer);

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  const persist = persistStore(store);

  return {store, persist};
}
