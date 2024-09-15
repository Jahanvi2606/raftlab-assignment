import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks); // Ensure 'tasks' is correctly accessed

  const sortedTasks = tasks.slice().sort((a, b) => {
    if (a.dueDate > b.dueDate) return 1;
    if (a.dueDate < b.dueDate) return -1;
    if (a.priority === 'High' && b.priority !== 'High') return -1;
    if (a.priority !== 'High' && b.priority === 'High') return 1;
    return 0;
  });

  return (
    <div>
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
