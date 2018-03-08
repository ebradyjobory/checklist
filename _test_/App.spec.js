import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux'

// Configure Enzyme
configure({ adapter: new Adapter() }) // To make enzyme happy


// Components
import AppConnect, { App } from '../src/App'
import Input from '../src/components/Input'

describe('App Redux',() => {
  const initialState = {
    list: []
  }
  const mockStore = configureStore()
  let store
  let container

  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<Provider store={store}><AppConnect /></Provider>)
  })

  it('Should render the App component', () => {
    expect(container.find(AppConnect).length).toEqual(1)
  })
})

describe('Testing <App /> component', () => {
  const initialState = { list: [] }
  const mockStore = configureStore()

  let store
  let container
  let inputComponent

  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<AppConnect store={store} />)
    inputComponent = shallow(<Input list={initialState.list} />)
  })

  it('Should render <App /> component with no error', () => {
    expect(container.length).toEqual(1)
  })

  it('Should render the <App /> component with initial state', () => {
    const state = container.instance().props.store.getState()
    expect(state.list).toEqual(initialState.list)
  })
  
  it('<Input/> component should have input tag', () => {
    expect(
      inputComponent.find('input')
                    .exists()
    ).toEqual(true)
  })

  it('<Input/> component should expect a `list` props', () => {
    expect(inputComponent.instance().props).toEqual({list: []})
  })

})
