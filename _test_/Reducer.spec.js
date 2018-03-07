import reducer, { initialState } from '../src/reducers/reducer';
import configureStore from 'redux-mock-store';
import _ from 'underscore';

describe('Reducer',() => {
  it('Should retuen inital state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  it('Should resuce ADD_ITEM action', () => {
    const action = {
      type: 'ADD_ITEM',
      item: 'read Dune'
    }
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
    const action1 = {
      type: 'ADD_ITEM',
      item: 'read Dune'
    }
    const newState = reducer(initialState, action1)
    // Toggle the added item
    const action2 = {
      type: 'TOGGLE_ITEM',
      id: 0,
      checked: true,
    }
    expect(_.findWhere(reducer(newState, action2).list, { id: 0 }).checked)
    .toEqual(true)
  })
  it('Should resuce TOGGLE_ALL action', () => {
    // Add two items
    let state = initialState
    const action1 = {
      type: 'ADD_ITEM',
      item: 'read Dune'
    }
    const action2 = {
      type: 'ADD_ITEM',
      item: 'read another book'
    }
    state = reducer(state, action1)
    state = reducer(state, action2)
    // Toggle All
    const action3 = {
      type: 'TOGGLE_ALL',
    }
    state = reducer(state, action3)
    expect(state.list.length).toBe(2)
    expect(_.all(state.list, l => l.checked)).toBe(true)
  })
});