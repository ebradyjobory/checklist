import React from 'react';
import { shallow, mount, configure } from 'enzyme';
// import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';

// Configure Enzyme
configure({ adapter: new Adapter() }); // To make enzyme happy


// Components
import AppConnect, { App } from '../src/App';

describe('App Redux',() => {
  const initialState = {
    list: []
  }
  const mockStore = configureStore()
  let store
  let container

  beforeEach(() => {
    store = mockStore(initialState)
    container = mount(<Provider store={store}><AppConnect /></Provider>)
  })

  it('Should render the App component', () => {
    expect(container.find(AppConnect).length).toEqual(1)
  });
});

describe('Testing <App /> component', () => {
  const initialState = { list: [] };
  const mockStore = configureStore();

  let store;
  let container;

  beforeEach(() => {
    store = mockStore(initialState)
    container = mount(<AppConnect store={store} />);
  })

  it('Should render <App /> component with no error', () => {
    expect(container.length).toEqual(1)
  });

  it('Render the App component with initial state', () => {
    console.log('???', container.find(App))
    expect(container.find(App).prop('state')).toEqual(initialState.list)
  });

});
