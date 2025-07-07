
import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboardSlice';
import tasksReducer from './taskSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
     tasks: tasksReducer,
  },
});
