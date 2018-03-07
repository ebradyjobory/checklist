import * as actions from '../src/actions'

describe('Actions',() => {
  it('Should create `addItem` action', () => {
      const item = 'testing'
      expect(actions.addItem(item)).toEqual({ type:"ADD_ITEM", item })
  });
});