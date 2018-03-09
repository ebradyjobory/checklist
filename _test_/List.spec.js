import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux'
import reducer, { initialState } from '../src/reducers/reducer'
import { createStore } from 'redux'
import { createAction } from '../src/helpers'
import * as actions from '../src/actions' 

// Configure Enzyme
configure({ adapter: new Adapter() }) // To make enzyme happy

// Components
import List from '../src/components/List'

describe('Testing <List /> component', () => {
  const initialState = { list: [] }
  let list
  let store
  beforeEach(() => {
    store = createStore(reducer)
    list = shallow(<List list={initialState.list} />)
  })
  it('Should render the <List /> component successfully', () => {
    expect(list.exists()).toEqual(true);
  })
  it('Should mount a check all input tag and another input tag for each item in the list', () => {
    // Add an item to the list
    store.dispatch(actions.addItem('read Dune'))
    let state = store.getState()
    expect(state.list.length).toBe(1)
    list = shallow(<List list={state.list} />)
    expect(list.find('input').length).toBe(2) // One for the check all and one for the new item
    store.dispatch(actions.addItem('read another book'))
    state = store.getState()
    expect(state.list.length).toBe(2)
    list = shallow(<List list={state.list} />)
    expect(list.find('input').length).toBe(3)
  })
})