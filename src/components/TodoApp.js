import React, { Component } from 'react';
import { TodoList } from "./TodoList";
import './TodoApp.css';
import Menu from './Menu.js';
import FormDialog from './FormDialog';
import { logout, getTodos, addTodo } from '../utils';

export default class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.save = this.save
            .bind(this);
    }

    loadTodos() {
        let todos = getTodos();
        todos.map((t) => {
            t.dueDate = new Date(parseInt(t.dueDate, 10));
            return t;
        })
        this.setState({ items: todos });
        return todos;
    }

    componentDidMount() {
        this.loadTodos();
    }

    save(newItem) {
        newItem.dueDate = new Date(newItem.dueDate);
        this.setState(prevState => ({
            description: '',
            status: '',
            dueDate: new Date(),
            name: '',
            email: ''
        }));
        addTodo(newItem);

    }

    logout = () => {
        logout();
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="App">
                <Menu logout={this.logout} />
                <TodoList todoList={this.state.items} />
                <FormDialog save={this.save} />
            </div>
        );
    }
}