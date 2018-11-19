import { combineReducers } from 'redux'
import todos from './todos'
import categories from './categories'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  todos,
  categories,
  visibilityFilter
});

export default rootReducer
