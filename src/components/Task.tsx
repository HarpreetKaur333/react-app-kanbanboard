import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

interface TaskProps {
  task: {
    id: string;
    content: string;
  };
  index: number;
}

const TaskContainer = styled.div<{ isDragging: boolean }>`
  background: ${(props) => (props.isDragging ? '#d3f9d8' : '#fff')};
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
`;

const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </TaskContainer>
      )}
    </Draggable>
  );
};

export default Task;
