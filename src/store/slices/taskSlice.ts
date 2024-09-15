import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../src/types/taskTypes';
import { useEffect } from 'react';
 
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn("Could not load tasks from localStorage", e);
    return undefined;
  }
};

const saveToLocalStorage = (state: Task[]) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (e) {
    console.warn("Could not save tasks to localStorage", e);
  }
};

// Load the initial state from localStorage
const initialState: Task[] = loadFromLocalStorage() || [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[], // Ensure initial state matches Task[]
  reducers: {
    
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    editDescription: (
      state,
      action: PayloadAction<{ id: string; newDescription: string }>
    ) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.description = action.payload.newDescription;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTaskStatus: (state, action: PayloadAction<string>) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.status = task.status === 'Completed' ? 'In Progress' : 'Completed';
      }
    },
  },
});

export const { addTask, deleteTask, toggleTaskStatus, editDescription  } = tasksSlice.actions;
export const usePersistedTasks = (state: Task[]) => {
  useEffect(() => {
    saveToLocalStorage(state);
  }, [state]);
};

export default tasksSlice.reducer;
