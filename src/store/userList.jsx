import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: '홍길동', age: 2 },
  reducers: {
    changeName(prev) {
      prev.name = '홍길동 VVIP 고객님';
    },
    changeAge(prev, action) {
      prev.age += action.payload;
    },
  },
});

export let { changeName, changeAge } = user.actions;
export default user;
