import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
	console.log(props);

	return (
		<div className="todo-list">
			<h2>Todo List</h2>

			{props.todos.map((item) => (
				<Todo
					key={item.id}
					task={item.task}
					status={item.status}
					updateStatus={props.updateStatus}
				/>
			))}
		</div>
	);
};

export default TodoList;
