import React from 'react';

const TodoForm = (props) => {
	return (
		<>
			<form>
				<input
					type="text"
					name="task"
					value={props.task}
					onChange={props.changeInput}
				/>
				<button onClick={props.addTask}>Add Task</button>
				<button onClick={props.clearTask}>Clear Completed</button>
			</form>
		</>
	);
};

export default TodoForm;
