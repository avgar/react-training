import React, {PropTypes, Component} from 'react';
import _ from 'lodash';
import todos from './../../reducers/todos.js'



class TodoList extends Component {



    render () {
        var tasks =
            _.map(this.props.tasks, (t) => <li key={t.id} className="task">{t.text}</li>)
        return <ul>
            {tasks}
        </ul>
    }
}

export default TodoList;