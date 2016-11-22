import _ from 'lodash';

export function incrementCounter() {
  return {
    type: 'INCREMENT'
  };
}

export function decrementCounter() {
  return {
    type: 'DECREMENT'
  };
}

export function fetchSites() {
  return dispatch => {
    dispatch({
      type: 'FETCH_SITES_REQUEST'
    });

    return fetch('/sites')
      .then(response => response.json())
      .then(data => dispatch({
        type: 'FETCH_SITES_SUCCESS',
        data
      }))
      .catch(error => dispatch({
        type: 'FETCH_SITES_ERROR',
        error
      }));
  };
}

export function fetchTodos () {
  return dispatch => {
    dispatch({
      type: 'FETCH_TODOS_REQUEST'
    });

    return
      [{id:0, text: 'task1'}];
  };
}

export function addTodo(id, text) {
  return {id: id, text: text, type: 'ADD_TODO'}
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export function filterTodo(todos, filter) {

  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }

}
