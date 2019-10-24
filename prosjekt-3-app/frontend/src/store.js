import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import searchReducer from './state/reducers/searchReducer';
import thunk from 'redux-thunk';

//Redux store for state handeling, with only one reducer for simplification
const store = createStore(
  searchReducer,
  composeWithDevTools(
  applyMiddleware(logger, thunk))
);

export default store;
