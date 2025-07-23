import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reducers from '../reducers';
import promiseMiddleware from 'redux-promise';

const rootReducer = combineReducers(
  Object.keys(reducers).length ? reducers : { dummy: () => ({}) }
);

const enhancer = compose(applyMiddleware(promiseMiddleware));

const configureStore = () => createStore(rootReducer, {}, enhancer);

export default configureStore;
