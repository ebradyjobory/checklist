// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

// Components
import Input from './components/Input'
import List from './components/List'


// Styles
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import '../node_modules/font-awesome/css/font-awesome.css'


type PropTypes = {
  state: Object,
  dispatch: Function,
}
type StateTypes = {}

export class App extends Component<PropTypes, StateTypes> {
  render() {
    const { state, dispatch } = this.props
    return (
      <div className="container">
        <Input
          onItemAdd={
            item => dispatch(actions.addItem(item))
          }
        />
        <List
          list={state.list}
          listChecked={state.listChecked}
          onItemCheck={
            (id: Number, checked: Boolean) => dispatch(actions.toggleItem(id, checked))
          }
          onItemDelete={
            (id: Number) => dispatch(actions.deleteItem(id))
          }
          onToggleAll={ (e: SyntheticEvent<HTMLButtonElement>) => dispatch(actions.toggleAll()) }
          onOrderChnage= { (direction: number, id: Number) => dispatch(actions.changeOrder(direction, id)) }
        />
      </div>
    )
  }
}

const mapStateToProps = ({ reducer }) => ({ state: reducer })

export default connect(mapStateToProps)(App)

  // <h3>
  //   Create a 'checklist' app that allows the following operations:
  // </h3>
  // <ul>
  //   <li>Add and remove entries to the list</li>
  //   <li>Check and uncheck an entry</li>
  //   <li>Move items up and down in the list</li>
  //   <li>Check all items at once</li>
  // </ul>
  // <h3>Testing</h3>
  // <p>
  //   Write some tests using the testing framework of your choice to test the logic of the app.
  // </p>
  // <p>Bonus: use Jest to test one of your react components</p>
  // <br/><br/>
  // <span>Don't worry about the style/design of the UI</span>

