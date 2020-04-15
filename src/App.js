import React, { Component } from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [];

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos,
		};
	}

	changeInputHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	addTaskHandler = (event) => {
		event.preventDefault();

		const newTodo = {
			task: this.state.task,
			id: Date.now(),
			status: false,
		};

		this.setState({
			todos: [...this.state.todos, newTodo],
		});

		const form = document.querySelector('form');
		form.reset();
	};

	toggleStatusHandler = (id) => {
		this.setState({
			todos: this.state.todos.map((item) => {
				if (id === item.id) {
					return {
						...item,
						status: !item.status,
					};
				} else return item;
			}),
		});
	};

	clearTaskHandler = (event) => {
		event.preventDefault();

		this.setState({
			todos: this.state.todos.filter((item) => {
				return item.status === !true;
			}),
		});
	};

	render() {
		return (
			<div>
				<h1>Todo</h1>
				<TodoForm
					addTask={this.addTaskHandler}
					changeInput={this.changeInputHandler}
					clearTask={this.clearTaskHandler}
				/>
				<TodoList
					todos={this.state.todos}
					updateStatus={this.toggleStatusHandler}
				/>
			</div>
		);
	}
}

export default App;
