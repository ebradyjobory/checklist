// @flow
export const addItem = (item: string) => {
  return {
    type: 'ADD_ITEM',
    item, 
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