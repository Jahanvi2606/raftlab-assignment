import React from 'react';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
