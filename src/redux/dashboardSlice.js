
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCustomers: 21978,
  activeCustomers: 10369,
  totalProfit: 64981.97,
  totalExpense: 18158.21,
  sales: [25, 30, 37.97, 28, 45, 36, 20, 22],
  cases: [
    { id: 1, name: 'Warranty Coverage', type: 'Incident', status: 'Pending', priority: 'Normal' },
    { id: 2, name: 'Discount Issue', type: 'Incident', status: 'Pending', priority: 'Low' },
    { id: 3, name: 'Product Issue', type: 'Incident', status: 'Resolved', priority: 'High' },
  ]
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {}
});

export default dashboardSlice.reducer;
