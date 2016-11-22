import {connect} from 'react-redux';
import TodoList from './../../components/Todo/Todo';
import {filterTodo, addTodo, toggleTodo} from './../../actions'

function mapStateToProps(state) {
    return {
        todos: state.todos,
        visibilityFilter: 'SHOW_ALL'
    }
}

export default  connect(mapStateToProps, {addTodo, toggleTodo, filterTodo})(TodoList)

