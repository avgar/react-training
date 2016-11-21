import React, {PropTypes, Component} from 'react';
import _ from 'lodash';
import todos from './../../reducers/todos.js'



class TodoList extends Component {

    componentDidMount () {
        const { store } = this.context
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate()
        })
    }

    componentWillUnmount () {
        this.unsubscribe()
    }

    render () {
        const { store } = this.context
        console.log('**************************')
        console.log(this.context)
        console.log(store.getState())

        var tasks =
            _.map(store.getState().todos, (t) => <li key={t.id} className="task">{t.text}</li>)
        return <div>
            <input />
            <button onClick={()=> {store.dispatch({id:0, type: 'ADD_TODO', text: 'task1'})}}>Add</button>
            <ul>
                {tasks}
            </ul>
            </div>
    }
}
TodoList.contextTypes = {
    store: React.PropTypes.object
}
export default TodoList;