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
  });
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
  });
});