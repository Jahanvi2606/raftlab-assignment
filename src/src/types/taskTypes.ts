export type Task = {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    priority: 'Low' | 'Medium' | 'High';
    status: 'In Progress' | 'Completed';
  };
  export type RootState = {
    tasks: Task[]; // Ensure this matches the state shape managed by tasksReducer
  };