import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentView: "monthly",
  events: [
    { date: 1, title: "Rewarding Marketing", color: "bg-green-100 text-green-700" },
    { date: 3, title: "Email Campaign", color: "bg-red-100 text-red-700" },
       

  ],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setView: (state, action) => {
      state.currentView = action.payload;
    },
  },
});


export const { setView } = calendarSlice.actions;
export default calendarSlice.reducer;
