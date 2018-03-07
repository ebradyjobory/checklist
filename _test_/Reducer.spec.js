import reducer, { initialState } from '../src/reducers/reducer';
import configureStore from 'redux-mock-store';

describe('Reducer',() => {
  it('Should retuen inital state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  it('Should resuce ADD_ITEM action', () => {
    const action = {
      type: 'ADD_ITEM',
      text: 'read Dune'
    }
    expect(reducer(initialState, action))
    .toEqual({
      list: [{
        text: action.text,
        checked: false,
      }]
    })
  })
});