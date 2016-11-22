
import {expect} from 'chai';
import {combineReducers} from 'redux';
import _ from 'lodash';
import {createStore, applyMiddleware} from 'redux';
import {todos, visibilityFilter} from './todos'


let todoCombinedReducer = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoCombinedReducer)

describe('todos list', () => {


        it('should has a new task after add', () => {
            const action = {
                type: 'ADD_TODO',
                id: 0,
                text: 'learn redux'
            }
            const bforState = []
            const afterState = [{
                id: 0,
                text: 'learn redux',
                completed: false
            }]

            store.dispatch(action, bforState)
            expect(afterState).to.eql(store.getState().todos);
        });


        it('should toggle task', () => {
            const action = {
                type: 'TOGGLE_TODO',
                id: 0,
            }
            const bforState = [{
                id: 0,
                text: 'learn redux',
                completed: false
            },{
                id: 1,
                text: 'learn redux2',
                completed: false
            }
            ]
            const afterState = [{
                id: 0,
                text: 'learn redux',
                completed: true
            },{
                id: 1,
                text: 'learn redux2',
                completed: false
            }]

            expect(todos(bforState, action)).to.eql(afterState);
        });

    it('filter, should be \'SHOW_COMPLETED\', after dispatch ... action', () => {

        expect(visibilityFilter(undefined, {type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED'})).to.eq('SHOW_COMPLETED')
    } )




    }
)

