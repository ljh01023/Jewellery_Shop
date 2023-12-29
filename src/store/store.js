import { configureStore } from '@reduxjs/toolkit';

import user from './userList';
import stock from './stockList';
import cartList from './cartList';
import datalist from './pData';
import watched from './watched';

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cartList: cartList.reducer,
    datalist: datalist.reducer,
    watched: watched.reducer,
  },
});
