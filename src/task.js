import React from "react";
import styled from "styled-components";
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
	border: 1px solid lightblue;
	margin-bottom: 8px;
	padding: 8px;
	border-radius: 2px;
	display: border-box;
	background-color: white;
`;

export default class Task extends React.Component {
	render() {
		const { index, task } = this.props
		return (
			<Draggable draggableId={task.id} index={index}>
				{provided => (
					<Container
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						{task.content}
					</Container>
				)}
			</Draggable>
		);
	}
}
