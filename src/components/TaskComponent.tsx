import React from 'react';
import { Task } from '../types/task';

type Props = {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TaskComponent: React.FC<Props> = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="task-row">
      <input type="checkbox" checked={task.isCompleted} onChange={() => toggleTask(task.id)} />
      <span className="task-text">{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskComponent;
