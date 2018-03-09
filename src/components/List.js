// @flow
import React, { Component } from 'react'
import _ from 'underscore'
import { itemIsInPosition } from '../helpers'

type PropTypes = {
  list: Array<Object>,
  listChecked: Boolean,
  onItemCheck: Function,
  onToggleAll: Function,
  onItemDelete: Function,
  onOrderChnage: Function,
}

type StateTypes = {}

export default class Input extends Component<PropTypes, StateTypes> {
  onItemCheck = (e: { target: { checked: Boolean } }, id: Number) => {
    const { onItemCheck } = this.props
    const { checked } = e.target
    onItemCheck(id, checked)
  }
  onItemDelete = (id: Number) => {
    const { onItemDelete } = this.props
    onItemDelete(id)
  }
  onOrderChnage = (direction: number, id: Number) => {
    const { onOrderChnage } = this.props
    onOrderChnage(direction, id)
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
          _.sortBy(list, 'order').map(l => {
            return (
              <div className='item-list' key={l.id}>
                <div>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id={`item-${l.id}`}
                    checked={l.checked}
                    onChange={ (e) => this.onItemCheck(e, l.id) }
                  />
                  <label className='form-check-label' htmlFor={`item-${l.id}`} >{l.item}</label>
                </div>
                <div className='trash'>
                  <i
                    className='fa fa-trash'
                    title='delete item'
                    onClick={() => this.onItemDelete(l.id) }>
                  </i>
                </div>
                <div className='order-btns'>
                  { ! itemIsInPosition(list, l.id, 'first') && <i className='fa fa-sort-up' title='move item up' onClick={ () => this.onOrderChnage(1, l.id) }></i> }
                  { ! itemIsInPosition(list, l.id, 'last') && <i className='fa fa-sort-down' title='move item down' onClick={ () => this.onOrderChnage(-1, l.id) }></i> }
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}