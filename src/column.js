import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import Task from './task'

const Container = styled.div`
	border: 1px solid lightgrey;
	border-radius: 2px;
	margin: 8px;
	width: 200px;
`;

const Title = styled.h3`
	padding: 8px;
`;

const TaskList = styled.div`
	padding: 8px;
`;

export default class Column extends Component {
	render() {
		const { column } = this.props
		return (
			<Container>
				<Title>{column.title}</Title>
				<Droppable droppableId={column.id}>
					{provided => (
						<TaskList ref={provided.innerRef} {...provided.droppableProps}>
							{this.props.tasks.map((task, index) => (
								<Task key={task.id} task={task} index={index} />
							))}
							{provided.placeholder}
						</TaskList>
					)}
				</Droppable>
			</Container>
		);
	}
}
