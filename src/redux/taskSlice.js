// redux/tasksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    // NOT STARTED
    {
      id: 1,
      title: "Schedule training seminar for sales team",
      status: "Not Started",
      priority: "Urgent",
      dueDate: "Aug 27 2020",
      assignee: "Ronald Richards",
    },
    {
      id: 2,
      title: "Send sales order draft to a.beike",
      status: "Not Started",
      priority: "Normal",
      dueDate: "Aug 27 2020",
      assignee: "Leslie Alexander",
    },
    {
      id: 3,
      title: "Prepare annual revenue report for investors",
      status: "Not Started",
      priority: "Urgent",
      dueDate: "Aug 27 2020",
      assignee: "Ralph Edwards",
    },

    // STARTED
    {
      id: 4,
      title: "Review & approve marketing budget",
      status: "Started",
      priority: "Urgent",
      dueDate: "Aug 27 2020",
      assignee: "Marvin McKinney",
    },
    {
      id: 5,
      title: "Send product samples to clients",
      status: "Started",
      priority: "Normal",
      dueDate: "Aug 28 2020",
      assignee: "Brooklyn Simmons",
    },
    {
      id: 6,
      title: "Follow up with leads from webinar",
      status: "Started",
      priority: "Normal",
      dueDate: "Aug 29 2020",
      assignee: "Kathryn Murphy",
    },

    // IN PROGRESS
    {
      id: 7,
      title: "Prepare product presentation",
      status: "In Progress",
      priority: "Normal",
      dueDate: "Aug 28 2020",
      assignee: "Jane Doe",
    },
    {
      id: 8,
      title: "Update CRM with client meeting notes",
      status: "In Progress",
      priority: "Urgent",
      dueDate: "Aug 28 2020",
      assignee: "Jacob Jones",
    },
    {
      id: 9,
      title: "Compile Q3 performance metrics",
      status: "In Progress",
      priority: "Normal",
      dueDate: "Aug 30 2020",
      assignee: "Arlene McCoy",
    },

    // BLOCKED
    {
      id: 10,
      title: "Fix packaging design",
      status: "Blocked",
      priority: "Urgent",
      dueDate: "Aug 28 2020",
      assignee: "John Smith",
    },
    {
      id: 11,
      title: "Legal approval for campaign budget",
      status: "Blocked",
      priority: "Urgent",
      dueDate: "Aug 29 2020",
      assignee: "Eleanor Pena",
    },
    {
      id: 12,
      title: "Client feedback on new brochure",
      status: "Blocked",
      priority: "Normal",
      dueDate: "Aug 30 2020",
      assignee: "Annette Black",
    },

    // COMPLETED
    {
      id: 13,
      title: "Write emails to potential suppliers",
      status: "Completed",
      priority: "Urgent",
      dueDate: "Aug 27 2020",
      assignee: "Jenny Wilson",
    },
    {
      id: 14,
      title: "Packaging sales order for speakers 30",
      status: "Completed",
      priority: "Normal",
      dueDate: "Aug 27 2020",
      assignee: "Wade Warren",
    },
    {
      id: 15,
      title: "Send thank-you emails post-conference",
      status: "Completed",
      priority: "Normal",
      dueDate: "Aug 26 2020",
      assignee: "Savannah Nguyen",
    }
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) task.status = status;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTaskStatus, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
