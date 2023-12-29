import { createSlice } from '@reduxjs/toolkit';

//localStorage.setItem('watchList', JSON.stringify([]));
const result = JSON.parse(localStorage.getItem('watched'));

let watched = createSlice({
  name: 'watched',
  initialState: result || [],
});

export default watched;
