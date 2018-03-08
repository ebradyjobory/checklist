import reducer, { initialState } from '../src/reducers/reducer'
import configureStore from 'redux-mock-store'
import _ from 'underscore'

import { createAction } from './helpers'

describe('Reducer',() => {
  it('Should retuen inital state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  it('Should resuce ADD_ITEM action', () => {
    const action = createAction('ADD_ITEM', {item: 'read Dune'})
    expect(reducer(initialState, action))
    .toEqual({
      list: [{
        id: 0,
        item: action.item,
        checked: false,
      }]
    })
  })
  it('Should resuce TOGGLE_ITEM action', () => {
    // Add an item
    let action = createAction('ADD_ITEM', {item: 'read Dune'})
    const newState = reducer(initialState, action)
    // Toggle the added item
    action = createAction('TOGGLE_ITEM', { id: 0, checked: true })
    expect(_.findWhere(reducer(newState, action).list, { id: 0 }).checked)
    .toEqual(true)
  })
  it('Should resuce TOGGLE_ALL action', () => {
    // Add two items
    let state = initialState
    let action = createAction('ADD_ITEM', {item: 'read Dune'})
    state = reducer(state, action)
    action = createAction('ADD_ITEM', {item: 'read another book'})
    state = reducer(state, action)
    // Toggle All
    action = createAction('TOGGLE_ALL', {})
    state = reducer(state, action)
    expect(state.list.length).toBe(2)
    expect(_.all(state.list, l => l.checked)).toBe(true)
  })
})