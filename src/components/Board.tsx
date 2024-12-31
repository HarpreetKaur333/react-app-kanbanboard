import React from 'react';
import Column from './Column';

const Board: React.FC = () => {
  const [columns, setColumns] = React.useState({
    'Hot Tasks': ['Pay attention to Frontend tasks'],
    'To Do': ['Start learning Next.js framework'],
    'In Work': ['Learn React', 'Read one chapter of the book'],
    'Done': ['Learned basic JavaScript'],
  });

  const handleAddTask = (column: string, task: string) => {
    setColumns((prev) => ({
      ...prev,
      [column]: [...prev[column], task],
    }));
  };

  const handleRemoveTask = (column: string, index: number) => {
    setColumns((prev) => {
      const updatedTasks = [...prev[column]];
      updatedTasks.splice(index, 1);
      return {
        ...prev,
        [column]: updatedTasks,
      };
    });
  };

  return (
    <div className="app-container">
      <h2>KANBAN Board</h2>
      <div className="row justify-content-center">
        {Object.entries(columns).map(([title, tasks]) => (
          <div className="col-md-3 col-sm-6 mb-4" key={title}>
            <Column
              title={title}
              tasks={tasks}
              onAddTask={(task) => handleAddTask(title, task)}
              onRemoveTask={(index) => handleRemoveTask(title, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
