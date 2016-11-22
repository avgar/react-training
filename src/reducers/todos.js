


import _ from 'lodash';

function todo (action, state = {}) {
    switch (action.type) {
        case 'ADD_TODO':
            return   {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':

            if (action.id !== state.id) {
                return state;

            } else
                return {
                    ...state,
                    completed: !state.completed
                }

        default :
            return state;
    }
}

export function todos (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state = [
                ...state,
                todo(action)]
        case 'TOGGLE_TODO':

            return _.map(state, t =>  {
                if (action.id !== t.id) {
                    return t;

                } else {
                    return todo(action, t)
                }
            })
        default :
            return state;
    }
}

export function visibilityFilter (state = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':  return action.filter;
        default: return state
    }
}

function getVisibleTodos (
    todos = [],
    filter = 'SHOW_ALL'
) {
    switch(filter) {
        case 'SHOW_ALL': return todos;
        case 'SHOW_COMPLETED': return _.filter(todos, (t) => t.completed)
        case 'SHOW_ACTIVE': return _.filter(todos, (t) => !t.completed)
        default : return todos
    }
}


