import React, { useState } from 'react';
import TaskComponent from './components/TaskComponent';
import { Task } from './types/task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = (): void => {
    if (newTask) {
      setTasks([...tasks, { id: Date.now(), text: newTask, isCompleted: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number): void => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      {tasks.map(task => (
        <TaskComponent
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default App;
