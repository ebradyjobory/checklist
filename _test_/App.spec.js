import React from 'react';
import { shallow, mount, configure } from 'enzyme';
// import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';

// Configure Enzyme
configure({ adapter: new Adapter() }); // To make enzyme happy


// Components
import App from '../src/App';

describe('Testing <App /> component', () => {
  const initialState = { list: [] };
  const mockStore = configureStore();

  let store;
  let container;

  beforeEach(() => {
    store = mockStore(initialState)
    container = mount(<App store={store} />);
  })

  it('Should render <App /> component with no error', () => {
    expect(container.length).toEqual(1)
  });
})