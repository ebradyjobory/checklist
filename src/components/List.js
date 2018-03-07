// @flow
import React, { Component } from 'react';

type PropTypes = {
  list: Array<Object>,
  listChecked: Boolean,
  onItemCheck: Function,
  onToggleAll: Function,
}

type StateTypes = {}

export default class Input extends Component<PropTypes, StateTypes> {
  onItemCheck = (e: SyntheticEvent<*>, id: Number) => {
    const { onItemCheck } = this.props;
    const { checked } = e.target;
    onItemCheck(id, checked);
  }
  render() {
    const { list, listChecked, onToggleAll } = this.props
    return (
      <div className='custom-control custom-checkbox mb-3'>
        <div>
          <input
            type='checkbox'
            className='form-check-input'
            id='check-all'
            checked={listChecked}
            onChange={onToggleAll}
          />
          <label className='form-check-label' htmlFor='check-all'>Check all</label>
        </div>
        <hr></hr>
        {
          list.map(l => {
            return (
              <div key={l.id}>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id={`item-${l.id}`}
                  checked={l.checked}
                  onChange={ (e) => this.onItemCheck(e, l.id) }
                />
                <label className='form-check-label' htmlFor={`item-${l.id}`} >{l.item}</label>
              </div>
            )
          })
        }
      </div>
    )
  }
}