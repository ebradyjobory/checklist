// @flow
import React, { Component } from 'react';

type PropTypes = {
  list: Array<Object>,
}

type StateTypes = {}

export default class Input extends Component<PropTypes, StateTypes> {
  render() {
    const { list, listChecked } = this.props
    return (
      <div className='custom-control custom-checkbox mb-3'>
        <div>
          <input type='checkbox' className='form-check-input' id='check-all' checked={listChecked}/>
          <label className='form-check-label' htmlFor='check-all'>Check all</label>
        </div>
        <hr></hr>
        {
          list.map(l => {
            return (
              <div key={l.id}>
                <input type='checkbox' className='form-check-input' id={`item-${l.id}`} checked={l.checked}/>
                <label className='form-check-label' htmlFor={`item-${l.id}`} >{l.item}</label>
              </div>
            )
          })
        }
      </div>
    )
  }
}