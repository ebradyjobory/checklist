import * as actions from '../src/actions'

describe('Test actions', () => {
  it('Should create `addItem` action', () => {
    const item = 'testing'
    expect(actions.addItem(item)).toEqual({ type: 'ADD_ITEM', item })
  })
  it('Should create `deleteItem` action', () => {
    const id = 0
    // Delete an item
    expect(actions.deleteItem(id)).toEqual({ type: 'DELETE_ITEM', id })
  })
  it('Should create `toggleItem action', () => {
    const id = 0
    const checked = true
    expect(actions.toggleItem(id, checked)).toEqual({ type: 'TOGGLE_ITEM', id, checked })
  })
  it('Should create `toggleAll action', () => {
    expect(actions.toggleAll()).toEqual({ type: 'TOGGLE_ALL' })
  })
  it('Should create `changeOrder action', () => {
    const id = 0
    const direction = 1
    expect(actions.changeOrder(direction, id)).toEqual({ type: 'CHANGE_ORDER', id, direction })
  })
})