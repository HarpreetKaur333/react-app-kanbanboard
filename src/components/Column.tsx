import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

interface ColumnProps {
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };
  tasks: Array<{
    id: string;
    content: string;
  }>;
}

const ColumnContainer = styled.div`
  background-color: #f3f3f3;
  margin: 0 10px;
  border-radius: 10px;
  padding: 15px;
  width: 250px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const TaskList = styled.div<{ isDraggingOver: boolean }>`
  background-color: ${(props) => (props.isDraggingOver ? '#e0f7fa' : '#fff')};
  border-radius: 5px;
  padding: 10px;
  min-height: 200px;
`;

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <ColumnContainer>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </ColumnContainer>
  );
};

export default Column;
