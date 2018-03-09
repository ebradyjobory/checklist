// @flow

import _ from 'underscore'

export const createAction = (type: String, dispatched: Object) => {
  return {
    type,
    ...dispatched,
  }
}

export const itemIsInPosition = (list: Array<Object>, id: Number, position: string) => {
  return _.chain(list)
          .sortBy('order')
          [position]()
          .value()
          .id === id
}

export const swapOrders = (list: Array<Object>, id: Number, direction: number) => {
  let item
  let originalOrder
  let listCopy = list.slice()
  listCopy = listCopy.map(l => {
    if (l.id === id) {
      // Swap orders
      originalOrder = l.order
      const newOrder = l.order - direction
      // Find the item with that order
      item = _.findWhere(listCopy, { order: newOrder })
      // Update the order
      l.order = newOrder
    }
    return l
  })
  // Swap orders
  listCopy = listCopy.map(l => {
    if (l.id === item.id) l.order = originalOrder
    return l
  })
  return listCopy
}