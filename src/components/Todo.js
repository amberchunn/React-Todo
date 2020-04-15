import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
	padding: 25px;
	background: #333;
	color: #ededed;
	text-align: center;
	font-weight: 700;
	width: 25%;
	font-size: 2rem;
	text-decoration: ${(props) => (props.status ? '#FF0000 line-through wavy' : 'none')};
	cursor: pointer;
`;

const Todo = (props) => {
	return (
		<Item
			className={'task'}
			onClick={() => props.updateStatus(props.id)}
			status={props.status}
			key={props.id}
		>
			{props.task}
		</Item>
	);
};

export default Todo;
