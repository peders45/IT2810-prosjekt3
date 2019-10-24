import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import searchReducer from './state/reducers/searchReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    searchReducer
  }),
  composeWithDevTools(
  applyMiddleware(logger, thunk))
);

export default store;
