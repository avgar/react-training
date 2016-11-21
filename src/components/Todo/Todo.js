import React, {PropTypes, Component} from 'react';
import _ from 'lodash';
import todos from './../../reducers/todos.js'



class TodoList extends Component {

    constructor () {
        super();
        this.id = 0;
    }
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
        this.id++

        const { store } = this.context

        var tasks =
            _.map(store.getState().todos, (t) => <li key={t.id} className="task">{t.text}</li>)
        return <div>
            <input ref={node =>{this.input = node}} />
            <button onClick={()=> {
            store.dispatch({id: this.id++, type: 'ADD_TODO', text: this.input.value});
            this.input.value = ''}}>Add</button>
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