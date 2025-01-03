import React from 'react';
import Column from './Column';

type ColumnKeys = 'Hot Tasks' | 'To Do' | 'In Work' | 'Done';

const Board: React.FC = () => {
  const [columns, setColumns] = React.useState<{ [key in ColumnKeys]: string[] }>({
    'Hot Tasks': ['Pay attention to Frontend tasks'],
    'To Do': ['Start learning Next.js framework'],
    'In Work': ['Learn React', 'Read one chapter of the book'],
    'Done': ['Learned basic JavaScript'],
  });

  const handleAddTask = (column: ColumnKeys, task: string) => {
    setColumns((prev) => ({
      ...prev,
      [column]: [...prev[column], task],
    }));
  };

  const handleRemoveTask = (column: ColumnKeys, index: number) => {
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
              onAddTask={(task) => handleAddTask(title as ColumnKeys, task)}
              onRemoveTask={(index) => handleRemoveTask(title as ColumnKeys, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
