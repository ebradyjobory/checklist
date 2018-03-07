// @flow
export const addItem = (item: string) => {
  return {
    type: 'ADD_ITEM',
    item, 
  }
}