import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Rendering', () => {
  it('renders without crashing', () => {
    const initialState = { 
      searchWord: "",
      menus: [],
      category: [],
      sliderMaxCalories: 1880,
      sliderRating: 0,
      sortCategory: "",
      sortValue: null,
      status: "",
      first: 9,
      offset: 0,
      count: 0,
      error: []
    }
    const store = mockStore(initialState)

    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, div);
  });

  it('renders correctly with no props', () => {
    const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
  });
});