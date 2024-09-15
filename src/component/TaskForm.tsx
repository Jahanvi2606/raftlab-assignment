import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/slices/taskSlice';

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTask({
      id: Date.now().toString(),
      title,
      description,
      dueDate: new Date(dueDate),
      priority,
      status: 'In Progress'
    }));

    // Clear the form fields after submission
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Medium');
  };

  return (
    <form  className='flex' onSubmit={handleSubmit}>
      <div>
        <label className='h-2 w-7 border-none bg-slate-200'>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className='h-2 w-7 border-none bg-slate-600 align-top'>Description:</label>
        <textarea className='border-3 border-slate-300'
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
          required
        />
      </div>

      <div>
        <label className='h-2 w-7 border-none bg-slate-500'>Due Date:</label>
        <input className='border-3'
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label className='h-2 w-7 border-none bg-slate-600'>Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
        >
          <option className='h-2 w-7 border-none bg-slate-600' value="Low">Low</option>
          <option className='h-2 w-7 border-none bg-slate-400'value="Medium">Medium</option>
          <option className='h-2 w-7 border-none bg-slate-500'value="High">High</option>
        </select>
      </div>

      <button  className='h-10 w-20 border-none ml-5 text-white bg-slate-900' type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
