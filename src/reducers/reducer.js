import update from 'react-addons-update'; // immutability helper
import _ from 'underscore';

export const initialState = {
  list: [], // An array of object { text: `string`, checked: `bool` }
}
export default function appState(state = initialState, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return update(state, {
        list: { $push: [{ id: _.size(state.list), item: action.item, checked: false }] },
      })
    default:
      return state
  }
}