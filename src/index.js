import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from './initial-data'
import Column from './column.js'

import 'normalize.css'

class App extends Component {
	state = initialData;

	onDragEnd = result => {
		const { destination, source, draggableId } = result;
		if(!destination) return
		if(destination.droppableId === source.droppableId &&
				destination.index === source.index
			) return

		const { columns } = this.state
		const column = columns[source.droppableId]
		const newTaskIds = Array.from(column.taskIds)
		newTaskIds.splice(source.index, 1)
		newTaskIds.splice(destination.index, 0, draggableId)
		const newColumn = {
			...column,
			taskIds: newTaskIds
		}

		const newState = {
			...this.state.columns,
			columns: {
				[newColumn.id]: newColumn,
			}
		}
		this.setState(newState);
	}

	render() {
		const { columnOrder, columns, tasks } = this.state;
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				{columnOrder.map(columnId => {
					const column = columns[columnId];
					const columnTasks = column.taskIds.map(taskId => tasks[taskId]);

					return <Column key={column.id} column={column} tasks={columnTasks} />;
				})}
			</DragDropContext>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
