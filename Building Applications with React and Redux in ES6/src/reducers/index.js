/**
 * Created by tteogi on 2016-09-11.
 */

import {combineReducers} from 'redux'
import courses from './courseReducer'
import authors from './authorReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
})

export default rootReducer
