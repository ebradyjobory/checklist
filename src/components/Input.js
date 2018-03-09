// @flow

import React, { Component } from 'react';

type PropTypes = {
  onItemAdd: Function,
}

type StateTypes = {
  value: string,
}

export default class Input extends Component<PropTypes, StateTypes> {
  state = {
    value: ''
  }
  onKeyDown = (e: { target: EventTarget }) => {
    const { onItemAdd } = this.props
    if (e.target.value && (e.keyCode === 9 || e.keyCode === 13)) {
      onItemAdd(e.target.value)
      // Reset input field value
      this.setState({ value: '' })
    }
  }
  onChange = (e: { target: { value: string } }) => {
    this.setState({ value: e.target.value })
  }
  render() {
    return (
      <div className='form-group'>
        <input
          type='text'
          ref='item-list'
          value={this.state.value}
          placeholder='Type a task and hit enter'
          className='form-control'
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
        />
      </div>
    )
  }
}