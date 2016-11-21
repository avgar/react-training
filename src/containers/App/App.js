import React from 'react';
import Counter from '../Counter/Counter';
import SiteList from '../SiteList/SiteList';
import TodoList from '../../components/Todo/Todo';

function App() {
    return (
        <div>
            <Counter/>
            <SiteList/>
            <TodoList tasks={[{id:0, text: 'text1'}, {id:1, text: 'text2'}]}/>

        </div>
    );
}

export default App;
