import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import searchReducer from './state/reducers/searchReducer';
import categoryReducer from './state/reducers/categoryReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    searchReducer,
    categoryReducer
  }),
  composeWithDevTools(
  applyMiddleware(logger, thunk))
);

export default store;
