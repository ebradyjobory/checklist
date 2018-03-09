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
