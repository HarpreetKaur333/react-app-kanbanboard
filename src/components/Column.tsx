import React, { useState } from 'react';
import Task from './Task';

interface ColumnProps {
  title: string;
  tasks: string[];
  onAddTask: (task: string) => void;
  onRemoveTask: (index: number) => void;
}

const Column: React.FC<ColumnProps> = ({ title, tasks, onAddTask, onRemoveTask }) => {
  const [newTask, setNewTask] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask.trim());
      setNewTask('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <button
          className="btn btn-success w-100 mb-3"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Task
        </button>
        <div>
          {tasks.map((task, index) => (
            <Task
              key={index}
              content={task}
              onRemove={() => onRemoveTask(index)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success"
                  onClick={handleAddTask}
                >
                  Add
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;
