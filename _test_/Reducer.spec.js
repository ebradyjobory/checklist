import reducer, { initialState } from '../src/reducers/reducer'
import configureStore from 'redux-mock-store'
import _ from 'underscore'

import { createAction } from '../src/helpers'

describe('Test reducers',() => {
  it('Should retuen inital state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  it('Should reduce ADD_ITEM action', () => {
    const action = createAction('ADD_ITEM', {item: 'read Dune'})
    expect(reducer(initialState, action).list)
    .toEqual([{
        id: 0,
        item: action.item,
        checked: false,
        order: 1,
    }])
  })
  it('Should reduce ADD_ITEM action with the right order', () => {
    let action = createAction('ADD_ITEM', {item: 'read Dune'})
    let state = reducer(initialState, action)
    action = createAction('ADD_ITEM', {item: 'read another book'})
    state = reducer(state, action)
    expect(state.list.length).toBe(2)
    expect(state.list[0].order).toBe(1)
    expect(state.list[1].order).toBe(2)
  })
  it('Should reduce DELETE_ITEM action', () => {
    // Add an item
    let action = createAction('ADD_ITEM', {item: 'read Dune'})
    let state = reducer(initialState, action)
    expect(state.list.length).toBe(1)
    // Remove item
    action = createAction('DELETE_ITEM', {id: 0})
    state = reducer(state, action)
    expect(state.list.length).toBe(0)
  })
  it('Should reduce TOGGLE_ITEM action', () => {
    // Add an item
    let action = createAction('ADD_ITEM', {item: 'read Dune'})
    const newState = reducer(initialState, action)
    // Toggle the added item
    action = createAction('TOGGLE_ITEM', { id: 0, checked: true })
    expect(_.findWhere(reducer(newState, action).list, { id: 0 }).checked)
    .toEqual(true)
  })
  it('Should reduce TOGGLE_ALL action', () => {
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
  it('Should reduce CHANGE_ORDER action', () => {
    // Add two items
    let state = initialState
    let action = createAction('ADD_ITEM', {item: 'read Dune'})
    state = reducer(state, action)
    expect(state.list[0].order).toBe(1)
    action = createAction('ADD_ITEM', {item: 'read another book'})
    state = reducer(state, action)
    expect(state.list[1].order).toBe(2)
    // Change order
    action = createAction('CHANGE_ORDER', { id: 0, direction: -1 })
    state = reducer(state, action)
    expect(state.list[0].order).toBe(2)
    // Other items should be reordered
    expect(state.list[1].order).toBe(1)
  })
})