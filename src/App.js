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

	toggleStatusHandler = (event) => {
		// console.log('matched');
		this.setState({
			todos: this.state.todos.map((item) => {
				if (event.key === item.key) {
					console.log('matched');
					return {
						...item,
						status: !item.status,
					};
				}
				return item;
			}),
		});
	};

	clearTaskHandler = (event) => {
		this.setState({ task: event.target.value });
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

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
