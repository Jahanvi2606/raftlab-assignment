import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/taskSlice';
import { editDescription } from '../store/slices/taskSlice';
import { useDispatch } from 'react-redux';
import { loadState, saveState } from '../utils/localStorage';
// import { throttle } from 'lodash';

// Load initial state from local storage
const preloadedState = loadState();
// const dispatch = useDispatch();
const store = configureStore({
    reducer: {
      tasks: tasksReducer, // Now this matches the state shape
    },
  });
  
//   const handleSaveEdit = (taskId: string, newDescription: string) => {
//     dispatch(editDescription({ id: taskId, newDescription }));
//   };

export type RootState = ReturnType<typeof store.getState>;
export default store;
