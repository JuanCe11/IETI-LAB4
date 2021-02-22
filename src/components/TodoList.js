import React from 'react';
import CardTodo from './CardTodo';


export class TodoList extends React.Component {

    render() {
        if (this.props.todoList.length === 0){
            return (
            <h2>You don't have todos</h2>

                )
        }
        return this.props.todoList.map((todo, i) => {
            return (
                <CardTodo key={i} todo={todo}/>
            );
        });

    }

}