import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const result = await axios
  .get('https://carrepe.github.io/datalist/productData.json.json') //
  .then((res) => res.data.list);

let datalist = createSlice({
  name: 'datalist',
  initialState: result,
});

export default datalist;
