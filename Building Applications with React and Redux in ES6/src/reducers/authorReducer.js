/**
 * Created by tteogi on 2016-09-11.
 */
import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors
    // state.push(action.course)
    // return state
    default:
      return state
  }
}
