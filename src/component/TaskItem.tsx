import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskStatus } from '../store/slices/taskSlice';
import { Task } from '../src/types/taskTypes';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div  className=" p-10 mb-2 inline-block">
      <h2 className="text-xl">{task.title}</h2>
      <p>{task.description}</p>
      <p>Due: {task.dueDate.toLocaleDateString()}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => dispatch(deleteTask(task.id))} className="bg-red-500 text-white p-1">
        Delete
      </button>
      <button onClick={() => dispatch(toggleTaskStatus(task.id))} className="bg-green-500 text-white p-1 ml-2">
        {task.status === 'Completed' ? 'Mark as In Progress' : 'Mark as Completed'}
      </button>
    </div>
  );
};

export default TaskItem;
