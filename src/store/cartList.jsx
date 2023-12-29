import { createSlice } from '@reduxjs/toolkit';
import cart from './cartInfo';
// const cart = JSON.parse(localStorage.getItem('cart'));

let cartList = createSlice({
  name: 'cartList',
  initialState: cart || [],
  reducers: {
    plusCount(prev, action) {
      let num = prev.findIndex((a) => a._id === action.payload);
      prev[num].count++;
    },
    minusCount(prev, action) {
      let num = prev.findIndex((a) => a._id === action.payload);
      prev[num].count--;
    },
    delItem(prev, action) {
      let num = prev.findIndex((a) => a._id === action.payload);
      prev.splice(num, 1);
    },
    addItem(prev, action) {
      let num = prev.findIndex((a) => a._id === action.payload._id);
      if (num === -1) prev.push(action.payload);
      if (num !== -1) prev[num].count += action.payload.count;
      console.log('add 버튼 클릭', num);
    },
  },
});

export const { plusCount, minusCount, delItem, addItem } = cartList.actions;
export default cartList;
