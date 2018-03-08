import * as actions from '../src/actions'

describe('Actions',() => {
  it('Should create `addItem` action', () => {
    const item = 'testing'
    expect(actions.addItem(item)).toEqual({ type: 'ADD_ITEM', item })
  })
  it('Should create `toggleItem action', () => {
    const id = 0
    const checked = true
    expect(actions.toggleItem(id, checked)).toEqual({ type: 'TOGGLE_ITEM', id, checked })
  })
  it('Should create `toggleAll action', () => {
    expect(actions.toggleAll()).toEqual({ type: 'TOGGLE_ALL' })
  })
})