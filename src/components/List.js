// @flow
import React, { Component } from 'react'
import _ from 'underscore'

type PropTypes = {
  list: Array<Object>,
  listChecked: Boolean,
  onItemCheck: Function,
  onToggleAll: Function,
  onItemDelete: Function,
}

type StateTypes = {}

export default class Input extends Component<PropTypes, StateTypes> {
  onItemCheck = (e: SyntheticEvent<*>, id: Number) => {
    const { onItemCheck } = this.props
    const { checked } = e.target
    onItemCheck(id, checked)
  }
  onItemDelete = (id: Number) => {
    const { onItemDelete } = this.props
    onItemDelete(id)
  }
  render() {
    const { list, listChecked, onToggleAll } = this.props
    return (
      <div className='custom-control col'>
        { !_.isEmpty(list) &&
          <div className='check-all'>
            <input
              type='checkbox'
              className='form-check-input'
              id='check-all'
              checked={listChecked}
              onChange={onToggleAll}
            />
            <label className='form-check-label' htmlFor='check-all'>Check all</label>
          </div>
        }
        <hr></hr>
        {
          list.map(l => {
            return (
              <div className='item-list' key={l.id}>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id={`item-${l.id}`}
                  checked={l.checked}
                  onChange={ (e) => this.onItemCheck(e, l.id) }
                />
                <label className='form-check-label' htmlFor={`item-${l.id}`} >{l.item}</label>
                <i
                  className='fa fa-trash'
                  onClick={() => this.onItemDelete(l.id) }
                ></i>
              </div>
            )
          })
        }
      </div>
    )
  }
}