import React, { useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Column from './Column';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Pay attention to Frontend tasks' },
    'task-2': { id: 'task-2', content: 'Start learning Next.js framework' },
    'task-3': { id: 'task-3', content: 'Learn React' },
    'task-4': { id: 'task-4', content: 'Read one chapter of the book' },
    'task-5': { id: 'task-5', content: 'Learned basic JavaScript' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'HOT TASKS',
      taskIds: ['task-1'],
    },
    'column-2': {
      id: 'column-2',
      title: 'TO DO',
      taskIds: ['task-2'],
    },
    'column-3': {
      id: 'column-3',
      title: 'IN WORK',
      taskIds: ['task-3', 'task-4'],
    },
    'column-4': {
      id: 'column-4',
      title: 'DONE',
      taskIds: ['task-5'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Board: React.FC = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });

      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardContainer>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </BoardContainer>
    </DragDropContext>
  );
};

export default Board;
