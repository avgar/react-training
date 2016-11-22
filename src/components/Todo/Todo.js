import React, {PropTypes, Component} from 'react';
import _ from 'lodash';
import s from './Todo.scss';

const Todo = ({text, completed, onClick}) => {
    return (<li className="task" style={{textDecoration:completed?'line-through':'none'}} onClick={onClick}> {text} </li>)
}

const FooterBar = ({onClick}) => {
    return <div>
        <a href="#" className={s.link}>All</a>
        <a href="#" className={s.link}>Completed</a>
        <a href="#" className={s.link}>Active</a>
    </div>
}

class TodoList extends Component {

    constructor () {
        super();
        this.id = 0;
    }

    static propTypes = {
        addTodo: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        filterTodo: PropTypes.func.isRequired,
        todos: PropTypes.array,
        visibilityFilter: PropTypes.string,
    };


    render () {
        const {addTodo, toggleTodo, filterTodo} = this.props;

        this.id++

        var tasks =
            _.map(this.props.todos, (t) => <Todo key={t.id} text={t.text} completed={t.completed} onClick={()=>{toggleTodo(t.id)}}/>);

        return <div>
            <input ref={node =>{this.input = node}} />
                <button onClick={()=> {
                addTodo(this.id++, this.input.value);
                this.input.value = ''}}>
                    Add
                </button>
                <ul>
                    {tasks}
                </ul>
                <FooterBar/>
            </div>
    }
}



export default TodoList;