import update from 'react-addons-update' // immutability helper
import _ from 'underscore'

import { swapOrder } from '../helpers'

export const initialState = {
  list: [], // An array of object { text: `string`, checked: `bool` }
  listChecked: false,
}
export default function appState(state = initialState, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return update(state, {
        list: { $push: [{ id: _.size(state.list), item: action.item, checked: false, order: _.size(state.list) + 1 }] },
      })
    case 'DELETE_ITEM':
      return update(state, {
        list: { $set: state.list.filter(l => l.id !== action.id) },
      })
    case 'TOGGLE_ITEM':
      return update(state, {
        list: { $set: state.list.map(l => {
          if (l.id === action.id) l.checked = action.checked
          return l
        })},
      })
    case 'TOGGLE_ALL':
      return update(state, {
        listChecked: { $set: !state.listChecked },
        list: { $set: state.list.map(l => {
          if (l.checked && state.listChecked) l.checked = false
          if (!l.checked && !state.listChecked) l.checked = true
          return l
        })},
      })
    case 'CHANGE_ORDER':
      return update(state, {
        list: { $set: swapOrder(state.list, action.id, action.direction) },
      })
    default:
      return state
  }
}