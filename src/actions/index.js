// @flow
export const addItem = (item: String) => {
  return {
    type: 'ADD_ITEM',
    item, 
  }
}

export const deleteItem = (id: Number) => {
  return {
    type: 'DELETE_ITEM',
    id, 
  }
}

export const toggleItem = (id: Number, checked: Boolean) => {
  return {
    type: 'TOGGLE_ITEM',
    id, checked, 
  }
}

export const toggleAll = () => {
  return {
    type: 'TOGGLE_ALL',
  }
}