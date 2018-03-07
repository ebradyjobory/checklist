import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='item-list' placeholder='Enter an item' />
      </div>
    )
  }
}