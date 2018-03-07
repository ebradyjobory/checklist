// @flow
import React, { Component } from 'react';

type PropTypes = {
  list: Array<Object>,
  onAddItem: Function,
}

type StateTypes = {}

export default class Input extends Component<PropTypes, StateTypes> {
  onKeyDown = (e: SyntheticEvent<*>) => {
    const { onAddItem } = this.props
    if (e.target.value && (e.keyCode === 9 || e.keyCode === 13)) {
      onAddItem(e.target.value)
    }
  }
  render() {
    return (
      <div>
        <input
          type='text'
          ref='item-list'
          placeholder='Enter an item'
          onKeyDown={this.onKeyDown}
        />
      </div>
    )
  }
}