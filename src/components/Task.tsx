import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


interface TaskProps {
  content: string;
  onRemove: () => void;
}

const Task: React.FC<TaskProps> = ({ content, onRemove }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff3cd',
        border: '1px solid #f5c6cb',
        padding: '5px',
        marginBottom: '5px',
        borderRadius: '5px',
      }}
    >
      <span>{content}</span>
      <IconButton
        onClick={onRemove}
        color="error" // Red color for delete
        size="small" // Smaller size for a compact layout
        aria-label="delete task"
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Task;
