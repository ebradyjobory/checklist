import update from 'react-addons-update'; // immutability helper

export const initialState = {
  list: [], // An array of object { text: `string`, checked: `bool` }
}
export default function appState(state = initialState, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return update(state, {
        list: { $push: [{ text: action.item, checked: false }] },
      })
    default:
      return state
  }
}