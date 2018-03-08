// @flow

export const createAction = (type: String, dispatched: Object) => {
  return {
    type,
    ...dispatched,
  }
}