// @flow
import React, { Component } from 'react';

type PropTypes = {
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
      <div className='form-group'>
        <input
          type='text'
          ref='item-list'
          placeholder='Type a task and hit enter'
          className='form-control'
          onKeyDown={this.onKeyDown}
        />
      </div>
    )
  }
}