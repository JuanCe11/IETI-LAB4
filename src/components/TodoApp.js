import React, { Component } from 'react';
import { TodoList } from "./TodoList";
import moment from "moment";
import './TodoApp.css';
import Menu from './Menu.js';
import FormDialog from './FormDialog';
import { logout } from '../utils'

export default class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.save = this.save
            .bind(this);
    }


    save(newItem) {
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            status: '',
            dueDate: moment(),
            name: '',
            email: ''
        }));
    }

    logout = () => {
        console.log(this);
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