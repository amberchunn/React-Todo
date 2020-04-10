import React from 'react';

const Todo = (props) => {
	return (
		<div
			className={`task${props.status ? ' completed' : ''}`}
			key={props.id}
			onClick={props.updateStatus}
		>
			{props.task}
		</div>
	);
};

export default Todo;
