import {combineReducers} from 'redux';
import counter from './counter';
import sites from './sites';
import {todos, visibilityFilter} from './todos';

export default combineReducers({
  counter,
  sites,

  visibilityFilter,
  todos
});
