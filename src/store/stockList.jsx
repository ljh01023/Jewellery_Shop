import { createSlice } from '@reduxjs/toolkit';

let stock = createSlice({
  name: 'stock',
  initialState: [10, 50, 20, 8, 9],
});
export default stock;
