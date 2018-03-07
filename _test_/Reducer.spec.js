import reducer, { initialState } from '../src/reducers/reducer';
import configureStore from 'redux-mock-store';

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
});